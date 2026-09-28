import React, { useState } from 'react';
import { X, User, Mail, Lock, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { UserProfile } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'login' | 'signup' | 'forgot';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  defaultMode = 'login'
}) => {
  const { login, signup, loginAsDemo, resetPassword } = useAuth();
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot'>(defaultMode);

  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [experienceLevel, setExperienceLevel] = useState<UserProfile['experienceLevel']>('Student');
  const [targetRole, setTargetRole] = useState('Software Engineer');
  const [resetSent, setResetSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsSubmitting(true);

    try {
      if (mode === 'login') {
        if (!email || !password) {
          setErrorMsg('Please enter both email and password.');
          setIsSubmitting(false);
          return;
        }
        login(email, password);
        onClose();
      } else if (mode === 'signup') {
        if (!name || !email || !password) {
          setErrorMsg('Please fill in all required fields.');
          setIsSubmitting(false);
          return;
        }
        signup(name, email, experienceLevel, targetRole);
        onClose();
      } else if (mode === 'forgot') {
        if (!email) {
          setErrorMsg('Please enter your account email.');
          setIsSubmitting(false);
          return;
        }
        await resetPassword(email);
        setResetSent(true);
      }
    } catch (err) {
      setErrorMsg('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              {mode === 'login' && 'Sign in to CareerScope'}
              {mode === 'signup' && 'Create your CareerScope account'}
              {mode === 'forgot' && 'Reset your password'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {mode === 'login' && 'Track saved companies, roles, and career roadmap progress.'}
              {mode === 'signup' && 'Personalize your learning path and save dream roles.'}
              {mode === 'forgot' && 'We will send you a secure password reset link.'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Demo Fast Logins banner */}
        {mode === 'login' && (
          <div className="mx-6 mt-4 p-3 bg-indigo-50/70 border border-indigo-100 rounded-xl">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-900 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>One-Click Demo Profiles</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  loginAsDemo('fresher');
                  onClose();
                }}
                className="px-2.5 py-1.5 bg-white hover:bg-indigo-100/60 text-slate-800 border border-indigo-200 rounded-lg text-xs font-medium transition-colors text-left cursor-pointer"
              >
                <div className="font-semibold text-indigo-700">Alex Chen</div>
                <div className="text-[10px] text-slate-500">CS Student & Fresher</div>
              </button>
              <button
                type="button"
                onClick={() => {
                  loginAsDemo('switcher');
                  onClose();
                }}
                className="px-2.5 py-1.5 bg-white hover:bg-indigo-100/60 text-slate-800 border border-indigo-200 rounded-lg text-xs font-medium transition-colors text-left cursor-pointer"
              >
                <div className="font-semibold text-indigo-700">Priya Sharma</div>
                <div className="text-[10px] text-slate-500">Career Switcher</div>
              </button>
            </div>
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {errorMsg && (
            <div className="p-3 text-xs text-rose-700 bg-rose-50 border border-rose-200 rounded-lg">
              {errorMsg}
            </div>
          )}

          {resetSent && mode === 'forgot' ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-semibold text-slate-900">Check your inbox</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                We sent a password reset link to <span className="font-medium text-slate-800">{email}</span>. Click the link inside to set a new password.
              </p>
              <button
                type="button"
                onClick={() => {
                  setResetSent(false);
                  setMode('login');
                }}
                className="text-xs font-medium text-indigo-600 hover:underline pt-2 inline-block cursor-pointer"
              >
                Back to Sign In
              </button>
            </div>
          ) : (
            <>
              {mode === 'signup' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="e.g. Maya Patel"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                  />
                </div>
              </div>

              {mode !== 'forgot' && (
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="text-xs font-semibold text-slate-700">
                      Password
                    </label>
                    {mode === 'login' && (
                      <button
                        type="button"
                        onClick={() => {
                          setMode('forgot');
                          setErrorMsg('');
                        }}
                        className="text-xs text-indigo-600 hover:underline cursor-pointer"
                      >
                        Forgot password?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
                    />
                  </div>
                </div>
              )}

              {mode === 'signup' && (
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Current Status
                    </label>
                    <select
                      value={experienceLevel}
                      onChange={e => setExperienceLevel(e.target.value as any)}
                      className="w-full px-2.5 py-2 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none focus:border-indigo-600"
                    >
                      <option value="Student">Student</option>
                      <option value="Fresher (0-1 yrs)">Fresher (0-1 yrs)</option>
                      <option value="Early Career (1-3 yrs)">Early Career (1-3 yrs)</option>
                      <option value="Career Switcher">Career Switcher</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Target Role
                    </label>
                    <select
                      value={targetRole}
                      onChange={e => setTargetRole(e.target.value)}
                      className="w-full px-2.5 py-2 text-xs border border-slate-300 rounded-lg bg-white focus:outline-none focus:border-indigo-600"
                    >
                      <option value="Software Engineer">Software Engineer</option>
                      <option value="Data Analyst">Data Analyst</option>
                      <option value="Cloud Solutions Engineer">Cloud Engineer</option>
                      <option value="Product Manager">Product Manager</option>
                      <option value="UX / UI Designer">UX Designer</option>
                      <option value="Technology & Business Consultant">Consultant</option>
                      <option value="Financial & Investment Analyst">Financial Analyst</option>
                    </select>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-2 mt-4 shadow-xs disabled:opacity-50"
              >
                <span>
                  {mode === 'login' && 'Sign In'}
                  {mode === 'signup' && 'Create Free Account'}
                  {mode === 'forgot' && 'Send Reset Link'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          )}

          {/* Mode switch link */}
          <div className="text-center pt-2 text-xs text-slate-500">
            {mode === 'login' && (
              <p>
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setMode('signup');
                    setErrorMsg('');
                  }}
                  className="font-semibold text-indigo-600 hover:underline cursor-pointer"
                >
                  Sign up for free
                </button>
              </p>
            )}
            {mode === 'signup' && (
              <p>
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setMode('login');
                    setErrorMsg('');
                  }}
                  className="font-semibold text-indigo-600 hover:underline cursor-pointer"
                >
                  Sign in here
                </button>
              </p>
            )}
            {mode === 'forgot' && !resetSent && (
              <p>
                Remember your password?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setMode('login');
                    setErrorMsg('');
                  }}
                  className="font-semibold text-indigo-600 hover:underline cursor-pointer"
                >
                  Sign in
                </button>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
