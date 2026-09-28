import React from 'react';
import { NavTab } from './Navbar';
import { INDUSTRIES } from '../data/companies';

interface FooterProps {
  setActiveTab: (tab: NavTab) => void;
  onSelectIndustry?: (industry: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="mt-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Col 1: Brand & Mission */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                CS
              </div>
              <span className="text-base font-bold text-slate-900 tracking-tight">
                CareerScope
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Empowering students, freshers, and career switchers to explore real companies, departments, job roles, required skills, and actionable roadmaps.
            </p>
          </div>

          {/* Col 2: Exploration Pathways */}
          <div>
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Explore Tools
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <button
                  onClick={() => setActiveTab('companies')}
                  className="hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  Company Directory (28+ Employers)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('explorer')}
                  className="hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  Company-Specific Role Explorer
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('compare')}
                  className="hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  Role Comparator (Side-by-Side)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('roadmaps')}
                  className="hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  6-Stage Career Roadmaps
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('dashboard')}
                  className="hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  Student / Fresher Dashboard
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Industries Covered */}
          <div>
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Industries Covered
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-slate-600">
              {INDUSTRIES.map(industry => (
                <button
                  key={industry}
                  onClick={() => setActiveTab('companies')}
                  className="hover:text-indigo-600 transition-colors cursor-pointer"
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>

          {/* Col 4: Core Framework */}
          <div>
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              The Exploration Hierarchy
            </div>
            <div className="text-xs text-slate-500 font-mono space-y-1">
              <div>Company</div>
              <div className="text-indigo-600 font-bold">↓ Department</div>
              <div className="text-indigo-600 font-bold">↓ Job Role</div>
              <div className="text-indigo-600 font-bold">↓ Responsibilities</div>
              <div className="text-indigo-600 font-bold">↓ Required Skills</div>
              <div className="text-indigo-600 font-bold">↓ Career Roadmap</div>
            </div>
          </div>

        </div>

        {/* Legal & Educational Disclaimer */}
        <div className="pt-8 border-t border-slate-200/80 text-[11px] text-slate-500 space-y-2">
          <p className="leading-relaxed">
            <strong className="text-slate-700 font-semibold">Educational Disclaimer:</strong> All organizational structures, role descriptions, required skills, and interview guidelines presented on CareerScope are provided solely for educational and career orientation purposes. Actual hiring criteria, job responsibilities, compensation figures, and skill expectations vary across individual business teams, geographic locations, seniority levels, and active job openings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-slate-400">
            <span>© {new Date().getFullYear()} CareerScope · Built for students, freshers, and job seekers</span>
            <span>Data updated regularly for current industry hiring standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
