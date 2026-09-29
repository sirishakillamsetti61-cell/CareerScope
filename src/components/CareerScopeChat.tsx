import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  RotateCcw, 
  Settings, 
  ChevronDown, 
  Maximize2, 
  Minimize2, 
  Copy, 
  Check, 
  AlertCircle, 
  ExternalLink,
  Zap,
  Globe
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  text: string;
  timestamp: Date;
  status?: 'sent' | 'pending' | 'error';
  errorDetails?: {
    code?: number;
    hint?: string;
    isWorkflowInactive?: boolean;
  };
}

const DEFAULT_PROD_URL = 'https://sirisha17.app.n8n.cloud/webhook/eb244c3b-01fe-49d6-adbf-8106bdc6238b/chat';
const DEFAULT_TEST_URL = 'https://sirisha17.app.n8n.cloud/webhook-test/eb244c3b-01fe-49d6-adbf-8106bdc6238b/chat';

const QUICK_PROMPTS = [
  'What skills does a Google Software Engineer need?',
  'Compare Data Analyst vs Business Analyst',
  'Roadmap for AWS Cloud Architect',
  'Interview preparation for Deloitte Consultant',
  'How to transition from Junior to Senior Developer?',
];

export const CareerScopeChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Webhook settings
  const [webhookUrl, setWebhookUrl] = useState<string>(() => {
    return localStorage.getItem('cs_n8n_webhook_url') || DEFAULT_PROD_URL;
  });
  const [isTestMode, setIsTestMode] = useState<boolean>(() => {
    return localStorage.getItem('cs_n8n_test_mode') === 'true';
  });

  // Chat state
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const saved = localStorage.getItem('cs_chat_messages');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map((m: any) => ({
          ...m,
          timestamp: new Date(m.timestamp),
        }));
      } catch (e) {
        console.error('Failed to parse saved chat messages', e);
      }
    }
    return [
      {
        id: 'welcome-1',
        sender: 'assistant',
        text: "👋 Hi! I'm your **CareerScope AI Advisor** connected to your n8n workflow.\n\nAsk me anything about companies, departments, career roadmaps, interview prep, or compare job roles! How can I help you today?",
        timestamp: new Date(),
      },
    ];
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize session ID
  useEffect(() => {
    let sid = localStorage.getItem('cs_chat_session_id');
    if (!sid) {
      sid = 'cs-' + Math.random().toString(36).substring(2, 11) + '-' + Date.now();
      localStorage.setItem('cs_chat_session_id', sid);
    }
    setSessionId(sid);
  }, []);

  // Sync messages to localStorage
  useEffect(() => {
    localStorage.setItem('cs_chat_messages', JSON.stringify(messages));
  }, [messages]);

  // Scroll to bottom on messages change
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isLoading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  const handleToggleTestMode = (testMode: boolean) => {
    setIsTestMode(testMode);
    localStorage.setItem('cs_n8n_test_mode', testMode ? 'true' : 'false');
    const newUrl = testMode ? DEFAULT_TEST_URL : DEFAULT_PROD_URL;
    setWebhookUrl(newUrl);
    localStorage.setItem('cs_n8n_webhook_url', newUrl);
  };

  const handleUpdateWebhook = (newUrl: string) => {
    setWebhookUrl(newUrl);
    localStorage.setItem('cs_n8n_webhook_url', newUrl);
  };

  const handleResetUrl = () => {
    setWebhookUrl(DEFAULT_PROD_URL);
    setIsTestMode(false);
    localStorage.setItem('cs_n8n_webhook_url', DEFAULT_PROD_URL);
    localStorage.setItem('cs_n8n_test_mode', 'false');
  };

  const handleClearChat = () => {
    const freshSession = 'cs-' + Math.random().toString(36).substring(2, 11) + '-' + Date.now();
    setSessionId(freshSession);
    localStorage.setItem('cs_chat_session_id', freshSession);
    const initial: ChatMessage[] = [
      {
        id: 'welcome-' + Date.now(),
        sender: 'assistant',
        text: "👋 Chat reset! I'm ready for new questions about tech companies, job descriptions, and skills roadmaps.",
        timestamp: new Date(),
      },
    ];
    setMessages(initial);
    localStorage.removeItem('cs_chat_messages');
  };

  const handleCopyMessage = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const executeSend = async (messageToSend: string) => {
    const trimmed = messageToSend.trim();
    if (!trimmed || isLoading) return;

    const userMsgId = 'usr-' + Date.now();
    const userMessage: ChatMessage = {
      id: userMsgId,
      sender: 'user',
      text: trimmed,
      timestamp: new Date(),
      status: 'sent',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    const targetUrl = webhookUrl.trim();
    const payload = {
      action: 'sendMessage',
      chatInput: trimmed,
      message: trimmed,
      sessionId: sessionId,
      metadata: {
        timestamp: new Date().toISOString(),
        source: 'CareerScope Web Client',
      },
    };

    try {
      let response: Response | null = null;
      let usedProxy = false;

      // Try direct call first
      try {
        response = await fetch(targetUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
      } catch (err) {
        // Direct fetch failed (likely CORS). Fallback to Vite proxy route if available
        console.warn('Direct fetch failed, trying local proxy fallback...', err);
        const proxyUrl = targetUrl.replace(
          'https://sirisha17.app.n8n.cloud',
          '/api/n8n-proxy'
        );
        try {
          response = await fetch(proxyUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
          usedProxy = true;
        } catch (proxyErr) {
          throw new Error('Unable to reach n8n webhook (network or CORS failure).');
        }
      }

      if (!response) {
        throw new Error('No response from n8n webhook.');
      }

      const responseText = await response.text();
      let responseData: any = null;

      try {
        responseData = JSON.parse(responseText);
      } catch {
        // Raw text response
        responseData = responseText;
      }

      if (!response.ok) {
        // Check for n8n's specific "workflow must be active" 404 response
        const isWorkflowInactive =
          response.status === 404 &&
          typeof responseData === 'object' &&
          (responseData?.hint?.includes('workflow must be active') ||
           responseData?.message?.includes('is not registered'));

        const errorMsg: ChatMessage = {
          id: 'err-' + Date.now(),
          sender: 'assistant',
          text: isWorkflowInactive
            ? `⚠️ **n8n Workflow Inactive in Production Mode**\n\nThe webhook returned:\n*"${responseData?.message || 'Webhook not registered'}"*\n\n**To activate your n8n AI Chatbot:**\n1. Open your n8n workspace at [sirisha17.app.n8n.cloud](https://sirisha17.app.n8n.cloud)\n2. Open your chat workflow\n3. Click the **Active** toggle switch in the top-right corner\n\n💡 *Tip: If you are currently testing your workflow on the canvas, switch to **Test Webhook** mode below.*`
            : `❌ **Error connecting to n8n** (${response.status}):\n${responseData?.message || responseText || 'Unknown error occurred.'}`,
          timestamp: new Date(),
          status: 'error',
          errorDetails: {
            code: response.status,
            hint: responseData?.hint,
            isWorkflowInactive,
          },
        };
        setMessages((prev) => [...prev, errorMsg]);
        setIsLoading(false);
        return;
      }

      // Extract output from standard n8n chat formats
      let botOutput = '';
      if (typeof responseData === 'string') {
        botOutput = responseData;
      } else if (responseData && typeof responseData === 'object') {
        if (responseData.output) {
          botOutput = responseData.output;
        } else if (responseData.text) {
          botOutput = responseData.text;
        } else if (responseData.response) {
          botOutput = responseData.response;
        } else if (responseData.message) {
          botOutput = responseData.message;
        } else if (Array.isArray(responseData) && responseData.length > 0) {
          const first = responseData[0];
          botOutput =
            first.output ||
            first.text ||
            first.json?.output ||
            first.json?.text ||
            JSON.stringify(first, null, 2);
        } else {
          botOutput = JSON.stringify(responseData, null, 2);
        }
      }

      if (!botOutput) {
        botOutput = "Received empty response from n8n agent workflow.";
      }

      const botMessage: ChatMessage = {
        id: 'bot-' + Date.now(),
        sender: 'assistant',
        text: botOutput,
        timestamp: new Date(),
        status: 'sent',
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      console.error('Chatbot error:', err);
      const errorMsg: ChatMessage = {
        id: 'err-' + Date.now(),
        sender: 'assistant',
        text: `⚠️ **Connection Error**\n\nCould not connect to the n8n webhook:\n\`${targetUrl}\`\n\n*Error: ${err?.message || 'Network request failed'}*\n\nMake sure the n8n instance is accessible and your workflow is published.`,
        timestamp: new Date(),
        status: 'error',
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeSend(inputMessage);
  };

  // Basic formatting helper for bold, lists, and code blocks
  const renderFormattedText = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, idx) => {
      // Code block lines
      if (line.startsWith('```')) {
        return (
          <div key={idx} className="font-mono text-xs text-indigo-300 bg-slate-900 px-2 py-1 rounded my-1">
            {line.replace(/```[a-zA-Z]*/, '')}
          </div>
        );
      }

      // Heading or section
      if (line.startsWith('### ')) {
        return <h4 key={idx} className="font-bold text-sm text-indigo-900 mt-2 mb-1">{line.replace('### ', '')}</h4>;
      }
      if (line.startsWith('## ')) {
        return <h3 key={idx} className="font-bold text-base text-slate-900 mt-2 mb-1">{line.replace('## ', '')}</h3>;
      }

      // Bullet points
      if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
        const bulletText = line.trim().substring(2);
        return (
          <div key={idx} className="flex items-start gap-1.5 my-1 text-xs sm:text-sm pl-1">
            <span className="text-indigo-500 font-bold">•</span>
            <span>{parseInlineFormatting(bulletText)}</span>
          </div>
        );
      }

      // Numbered list
      const numMatch = line.trim().match(/^(\d+)\.\s+(.*)$/);
      if (numMatch) {
        return (
          <div key={idx} className="flex items-start gap-1.5 my-1 text-xs sm:text-sm pl-1">
            <span className="text-indigo-600 font-semibold">{numMatch[1]}.</span>
            <span>{parseInlineFormatting(numMatch[2])}</span>
          </div>
        );
      }

      if (line.trim() === '') {
        return <div key={idx} className="h-1.5" />;
      }

      return (
        <p key={idx} className="text-xs sm:text-sm leading-relaxed my-0.5">
          {parseInlineFormatting(line)}
        </p>
      );
    });
  };

  const parseInlineFormatting = (content: string) => {
    // Basic bold **text** parsing
    const parts = content.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      // Inline code `code`
      if (part.startsWith('`') && part.endsWith('`')) {
        return <code key={i} className="px-1 py-0.5 rounded bg-slate-100 font-mono text-xs text-indigo-600">{part.slice(1, -1)}</code>;
      }
      return part;
    });
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom-Right) */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer border border-white/20"
            aria-label="Open CareerScope AI Chatbot"
          >
            {/* Pulsing beacon */}
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>

            <Bot className="w-5 h-5 text-white" />
            <div className="text-left hidden sm:block">
              <div className="text-xs font-bold leading-tight flex items-center gap-1">
                CareerScope AI
                <Sparkles className="w-3 h-3 text-amber-300 fill-amber-300" />
              </div>
              <div className="text-[10px] text-indigo-100 opacity-90 leading-tight">
                n8n Chat Assistant
              </div>
            </div>
          </button>
        </div>
      )}

      {/* Main Chat Window */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-300 ease-out flex flex-col bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden ${
            isExpanded
              ? 'inset-4 sm:inset-6 md:inset-8 w-auto h-auto'
              : 'bottom-4 right-4 sm:bottom-6 sm:right-6 w-[calc(100vw-2rem)] sm:w-[420px] md:w-[450px] h-[580px] max-h-[90vh]'
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-indigo-900 text-white px-4 py-3.5 flex items-center justify-between border-b border-indigo-900/50 shadow-xs">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white shadow-md">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900"></span>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold text-white truncate">
                    CareerScope AI
                  </h3>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-indigo-500/20 text-indigo-200 border border-indigo-400/30">
                    {isTestMode ? 'Test' : 'n8n Cloud'}
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 truncate">
                  Role exploration & career roadmaps
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  showSettings ? 'bg-white/20 text-white' : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
                title="Webhook settings & test mode"
              >
                <Settings className="w-4 h-4" />
              </button>

              <button
                onClick={handleClearChat}
                className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                title="Reset conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="hidden sm:inline-flex p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                title={isExpanded ? 'Restore window size' : 'Expand full window'}
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                title="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Settings Drawer / Flyout */}
          {showSettings && (
            <div className="bg-slate-50 border-b border-slate-200 p-3.5 text-xs text-slate-700 animate-in slide-in-from-top-2 duration-150">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-900 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-indigo-600" />
                  n8n Webhook Configuration
                </span>
                <button
                  onClick={handleResetUrl}
                  className="text-[11px] text-indigo-600 hover:underline cursor-pointer"
                >
                  Reset Default
                </button>
              </div>

              {/* Mode switch */}
              <div className="flex items-center gap-2 mb-2.5">
                <button
                  onClick={() => handleToggleTestMode(false)}
                  className={`flex-1 py-1 px-2 rounded-lg font-medium text-[11px] cursor-pointer border transition-colors ${
                    !isTestMode
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Production (/webhook)
                </button>
                <button
                  onClick={() => handleToggleTestMode(true)}
                  className={`flex-1 py-1 px-2 rounded-lg font-medium text-[11px] cursor-pointer border transition-colors ${
                    isTestMode
                      ? 'bg-amber-600 text-white border-amber-600'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  Test Canvas (/webhook-test)
                </button>
              </div>

              {/* URL Input */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-mono text-slate-500">
                  Target Webhook URL
                </label>
                <input
                  type="text"
                  value={webhookUrl}
                  onChange={(e) => handleUpdateWebhook(e.target.value)}
                  className="w-full text-xs font-mono px-2.5 py-1.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 text-slate-800"
                  placeholder="https://sirisha17.app.n8n.cloud/webhook/..."
                />
              </div>

              <div className="mt-2 text-[10px] text-slate-500 leading-tight">
                {isTestMode ? (
                  <span className="text-amber-700 font-medium">
                    ⚡ Test mode: Click "Execute workflow" on your n8n canvas before sending each message.
                  </span>
                ) : (
                  <span>
                    🚀 Production mode: Ensure your workflow in n8n is toggled to <strong>Active</strong>.
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((message) => {
              const isUser = message.sender === 'user';
              return (
                <div
                  key={message.id}
                  className={`flex gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  {!isUser && (
                    <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex-shrink-0 flex items-center justify-center shadow-xs mt-0.5">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`relative group max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm shadow-xs ${
                      isUser
                        ? 'bg-indigo-600 text-white rounded-br-xs'
                        : message.status === 'error'
                        ? 'bg-amber-50 text-slate-900 border border-amber-200 rounded-bl-xs'
                        : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-xs'
                    }`}
                  >
                    {/* Message content */}
                    <div>
                      {isUser ? (
                        <p className="leading-relaxed whitespace-pre-wrap">{message.text}</p>
                      ) : (
                        <div className="text-slate-800">
                          {renderFormattedText(message.text)}
                        </div>
                      )}
                    </div>

                    {/* Quick action button if workflow inactive */}
                    {message.errorDetails?.isWorkflowInactive && (
                      <div className="mt-3 pt-2 border-t border-amber-200 flex flex-wrap gap-2">
                        <button
                          onClick={() => handleToggleTestMode(true)}
                          className="px-2.5 py-1 bg-amber-600 text-white text-[11px] font-medium rounded-md hover:bg-amber-700 transition-colors cursor-pointer"
                        >
                          Switch to Test Webhook
                        </button>
                        <a
                          href="https://sirisha17.app.n8n.cloud"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 bg-white text-slate-700 border border-slate-300 text-[11px] font-medium rounded-md hover:bg-slate-50 transition-colors"
                        >
                          Open n8n Workspace <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}

                    {/* Footer metadata & copy */}
                    <div
                      className={`mt-1.5 flex items-center justify-end gap-2 text-[10px] ${
                        isUser ? 'text-indigo-200' : 'text-slate-400'
                      }`}
                    >
                      <span>
                        {message.timestamp.toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                      {!isUser && (
                        <button
                          onClick={() => handleCopyMessage(message.id, message.text)}
                          className="hover:text-slate-700 transition-colors p-0.5 cursor-pointer"
                          title="Copy message"
                        >
                          {copiedId === message.id ? (
                            <Check className="w-3 h-3 text-emerald-600" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                      )}
                    </div>
                  </div>

                  {isUser && (
                    <div className="w-7 h-7 rounded-lg bg-slate-200 text-slate-700 flex-shrink-0 flex items-center justify-center shadow-xs mt-0.5">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex-shrink-0 flex items-center justify-center shadow-xs mt-0.5">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-xs px-4 py-3 shadow-xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce"></span>
                  <span className="text-xs text-slate-400 font-medium ml-2">n8n agent thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts suggestions */}
          {messages.length <= 2 && (
            <div className="px-3 py-2 bg-slate-50 border-t border-slate-200/80">
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1.5 px-1">
                Suggested Prompts
              </p>
              <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {QUICK_PROMPTS.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => executeSend(prompt)}
                    className="whitespace-nowrap text-left text-[11px] px-2.5 py-1 rounded-full bg-white text-slate-700 border border-slate-200 hover:border-indigo-400 hover:text-indigo-600 transition-colors cursor-pointer shadow-2xs flex-shrink-0"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Box */}
          <form
            onSubmit={handleFormSubmit}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about companies, roles, roadmaps..."
              className="flex-1 bg-slate-100 focus:bg-white text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all outline-none text-slate-800 placeholder:text-slate-400"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className={`p-2.5 rounded-xl transition-all cursor-pointer flex-shrink-0 ${
                inputMessage.trim() && !isLoading
                  ? 'bg-indigo-600 text-white shadow-md hover:bg-indigo-700 active:scale-95'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
              title="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
