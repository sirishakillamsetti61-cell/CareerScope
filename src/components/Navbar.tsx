import React from 'react';
import { Search, User, Compass, Bookmark } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export type NavTab = 'home' | 'companies' | 'explorer' | 'roles' | 'compare' | 'roadmaps' | 'dashboard';

interface NavbarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  onOpenSearch: () => void;
  onOpenAuth: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenSearch,
  onOpenAuth
}) => {
  const { isAuthenticated, user, savedCompanyIds, savedRoleIds } = useAuth();
  const savedCount = savedCompanyIds.length + savedRoleIds.length;

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => setActiveTab('home')}
          className="text-left group flex items-center gap-2 cursor-pointer focus-visible:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-xs group-hover:bg-indigo-700 transition-colors">
            CS
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
            CareerScope
          </span>
        </button>

        {/* Zone 2: 5 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <button
            onClick={() => setActiveTab('companies')}
            className={`cursor-pointer transition-colors py-1 ${
              activeTab === 'companies'
                ? 'text-indigo-600 font-semibold border-b-2 border-indigo-600'
                : 'hover:text-slate-900'
            }`}
          >
            Companies
          </button>
          
          <button
            onClick={() => setActiveTab('explorer')}
            className={`cursor-pointer transition-colors py-1 flex items-center gap-1.5 ${
              activeTab === 'explorer'
                ? 'text-indigo-600 font-semibold border-b-2 border-indigo-600'
                : 'hover:text-slate-900'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Role Explorer</span>
          </button>

          <button
            onClick={() => setActiveTab('compare')}
            className={`cursor-pointer transition-colors py-1 ${
              activeTab === 'compare'
                ? 'text-indigo-600 font-semibold border-b-2 border-indigo-600'
                : 'hover:text-slate-900'
            }`}
          >
            Compare Roles
          </button>

          <button
            onClick={() => setActiveTab('roadmaps')}
            className={`cursor-pointer transition-colors py-1 ${
              activeTab === 'roadmaps'
                ? 'text-indigo-600 font-semibold border-b-2 border-indigo-600'
                : 'hover:text-slate-900'
            }`}
          >
            Career Roadmaps
          </button>

          <button
            onClick={() => setActiveTab('dashboard')}
            className={`cursor-pointer transition-colors py-1 flex items-center gap-1.5 ${
              activeTab === 'dashboard'
                ? 'text-indigo-600 font-semibold border-b-2 border-indigo-600'
                : 'hover:text-slate-900'
            }`}
          >
            <span>Dashboard</span>
            {savedCount > 0 && (
              <span className="text-[11px] font-mono font-medium px-1.5 py-0.2 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                {savedCount}
              </span>
            )}
          </button>
        </nav>

        {/* Zone 3: Primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200/80 rounded-lg transition-colors cursor-pointer border border-slate-200/60"
            title="Search companies, roles, skills (Ctrl + K)"
          >
            <Search className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Search scope...</span>
            <kbd className="hidden sm:inline text-[10px] font-mono text-slate-400 bg-white px-1.5 py-0.5 rounded border border-slate-200">
              ⌘K
            </kbd>
          </button>

          {isAuthenticated && user ? (
            <button
              onClick={() => setActiveTab('dashboard')}
              className="flex items-center gap-2 pl-2 pr-3 py-1.5 text-xs font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-200 rounded-lg hover:border-slate-300 transition-all cursor-pointer shadow-xs"
            >
              <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span className="max-w-[100px] truncate">{user.name}</span>
            </button>
          ) : (
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer shadow-xs whitespace-nowrap"
            >
              <User className="w-3.5 h-3.5" />
              <span>Sign In</span>
            </button>
          )}
        </div>

      </div>

      {/* Mobile Secondary Bar for small screens */}
      <div className="flex md:hidden items-center justify-around border-t border-slate-100 bg-slate-50/90 px-2 py-2 text-xs font-medium text-slate-600">
        <button
          onClick={() => setActiveTab('companies')}
          className={`px-2 py-1 ${activeTab === 'companies' ? 'text-indigo-600 font-bold' : ''}`}
        >
          Companies
        </button>
        <button
          onClick={() => setActiveTab('explorer')}
          className={`px-2 py-1 ${activeTab === 'explorer' ? 'text-indigo-600 font-bold' : ''}`}
        >
          Explorer
        </button>
        <button
          onClick={() => setActiveTab('compare')}
          className={`px-2 py-1 ${activeTab === 'compare' ? 'text-indigo-600 font-bold' : ''}`}
        >
          Compare
        </button>
        <button
          onClick={() => setActiveTab('roadmaps')}
          className={`px-2 py-1 ${activeTab === 'roadmaps' ? 'text-indigo-600 font-bold' : ''}`}
        >
          Roadmaps
        </button>
        <button
          onClick={() => setActiveTab('dashboard')}
          className={`px-2 py-1 ${activeTab === 'dashboard' ? 'text-indigo-600 font-bold' : ''}`}
        >
          Dashboard
        </button>
      </div>
    </header>
  );
};
