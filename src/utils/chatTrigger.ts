/**
 * Helper utility to trigger opening the n8n Chatbot anywhere in the app
 */
export function openCareerScopeChat(prompt?: string) {
  window.dispatchEvent(
    new CustomEvent('open-n8n-chat', {
      detail: { prompt }
    })
  );
}
