import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, Building2, Briefcase, Sparkles, FolderTree, ArrowRight } from 'lucide-react';
import { ALL_COMPANIES } from '../data/companies';
import { ALL_ROLES } from '../data/roles';
import { DEPARTMENTS } from '../data/departments';
import { CompanyLogo } from './CompanyLogo';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCompany: (companyId: string) => void;
  onSelectRole: (roleId: string) => void;
  onSelectDepartment?: (deptId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectCompany,
  onSelectRole,
  onSelectDepartment
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent can toggle
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Parse and search across everything
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;

    // Filter Companies
    const matchedCompanies = ALL_COMPANIES.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.industry.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q)
    ).slice(0, 4);

    // Filter Roles
    const matchedRoles = ALL_ROLES.filter(r =>
      r.title.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q) ||
      r.simpleExplanation.toLowerCase().includes(q) ||
      r.technicalSkills.some(s => s.toLowerCase().includes(q)) ||
      r.responsibilities.some(resp => resp.toLowerCase().includes(q))
    ).slice(0, 5);

    // Filter Departments
    const matchedDepts = Object.values(DEPARTMENTS).filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q) ||
      d.keySkills.some(s => s.toLowerCase().includes(q))
    ).slice(0, 3);

    // Filter Unique Skills
    const allSkills = Array.from(
      new Set(ALL_ROLES.flatMap(r => [...r.technicalSkills, ...r.softSkills]))
    );
    const matchedSkills = allSkills
      .filter(s => s.toLowerCase().includes(q))
      .slice(0, 4);

    return {
      companies: matchedCompanies,
      roles: matchedRoles,
      departments: matchedDepts,
      skills: matchedSkills,
      hasAny:
        matchedCompanies.length > 0 ||
        matchedRoles.length > 0 ||
        matchedDepts.length > 0 ||
        matchedSkills.length > 0
    };
  }, [query]);

  const quickPrompts = [
    'Google Software Engineer',
    'AWS Cloud Engineer',
    'Deloitte Business Analyst',
    'Skills required for Data Analyst',
    'Python',
    'Investment Banking',
    'UX Design'
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-start justify-center pt-16 px-4 pb-6">
      <div 
        className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all"
        onClick={e => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search companies, job roles, skills, departments, or industries..."
            className="w-full text-slate-900 placeholder:text-slate-400 text-base bg-transparent focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <span className="text-[11px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
              ESC
            </span>
          )}
        </div>

        {/* Quick Prompts when search is empty */}
        {!query && (
          <div className="p-5 bg-slate-50/60">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
              Popular Searches
            </div>
            <div className="flex flex-wrap gap-2">
              {quickPrompts.map(prompt => (
                <button
                  key={prompt}
                  onClick={() => setQuery(prompt)}
                  className="px-3 py-1.5 text-xs text-slate-700 bg-white hover:bg-indigo-50 hover:text-indigo-600 rounded-lg border border-slate-200/80 transition-colors cursor-pointer shadow-2xs"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200/60 text-xs text-slate-500">
              <span className="font-medium text-slate-700">Tip:</span> Search for any company like <span className="text-indigo-600">“Google”</span>, role like <span className="text-indigo-600">“Cloud Engineer”</span>, or skill like <span className="text-indigo-600">“SQL”</span>.
            </div>
          </div>
        )}

        {/* Search Results */}
        {results && (
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-5">
            {!results.hasAny && (
              <div className="py-12 text-center text-slate-500">
                <p className="text-sm">No exact matches found for "{query}".</p>
                <p className="text-xs text-slate-400 mt-1">Try searching for "Google", "Software Engineer", "Deloitte", or "Python".</p>
              </div>
            )}

            {/* Companies Results */}
            {results.companies.length > 0 && (
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Companies ({results.companies.length})</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {results.companies.map(c => (
                    <button
                      key={c.id}
                      onClick={() => {
                        onSelectCompany(c.id);
                        onClose();
                      }}
                      className="flex items-center gap-3 p-2.5 text-left rounded-lg border border-slate-200/80 hover:border-indigo-300 hover:bg-indigo-50/40 transition-all cursor-pointer group"
                    >
                      <CompanyLogo id={c.id} name={c.name} brandColor={c.brandColor} size="sm" />
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 truncate">
                          {c.name}
                        </div>
                        <div className="text-xs text-slate-500 truncate">
                          {c.industry} · {c.departments.length} Depts
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Roles Results */}
            {results.roles.length > 0 && (
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Job Roles ({results.roles.length})</span>
                </div>
                <div className="space-y-1.5">
                  {results.roles.map(r => (
                    <button
                      key={r.id}
                      onClick={() => {
                        onSelectRole(r.id);
                        onClose();
                      }}
                      className="w-full flex items-center justify-between p-2.5 text-left rounded-lg border border-slate-200/80 hover:border-indigo-300 hover:bg-indigo-50/40 transition-all cursor-pointer group"
                    >
                      <div className="min-w-0 pr-3">
                        <div className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 flex items-center gap-2">
                          <span>{r.title}</span>
                          <span className="text-xs font-normal text-slate-500">in {r.departmentName}</span>
                        </div>
                        <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          {r.simpleExplanation}
                        </div>
                      </div>
                      <span className="text-xs font-medium text-indigo-600 shrink-0 flex items-center gap-1 group-hover:underline">
                        View Roadmap <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Skills Results */}
            {results.skills.length > 0 && (
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Matching Skills ({results.skills.length})</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {results.skills.map(skill => (
                    <div
                      key={skill}
                      className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 flex items-center gap-1.5"
                    >
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Departments */}
            {results.departments.length > 0 && (
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  <FolderTree className="w-3.5 h-3.5" />
                  <span>Departments</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {results.departments.map(dept => (
                    <button
                      key={dept.id}
                      onClick={() => {
                        if (onSelectDepartment) onSelectDepartment(dept.id);
                        onClose();
                      }}
                      className="p-2.5 text-left rounded-lg border border-slate-200/80 hover:border-indigo-300 hover:bg-indigo-50/40 transition-all cursor-pointer group"
                    >
                      <div className="text-xs font-semibold text-slate-900 group-hover:text-indigo-600">
                        {dept.name}
                      </div>
                      <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                        {dept.description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Footer info bar */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
          <span>Explore 28+ Global Companies · 10+ Departments · Verified Roles</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
