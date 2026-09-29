import React from 'react';
import { 
  Search, 
  ArrowRight, 
  Building2, 
  Briefcase, 
  Compass, 
  ArrowLeftRight, 
  Layers, 
  Sparkles, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { ALL_COMPANIES } from '../data/companies';
import { ALL_ROLES } from '../data/roles';
import { CompanyLogo } from './CompanyLogo';
import { DisclaimerBanner } from './DisclaimerBanner';
import { openCareerScopeChat } from '../utils/chatTrigger';

interface HomeHeroProps {
  onOpenSearch: () => void;
  onExploreCompanies: () => void;
  onExploreRoleExplorer: () => void;
  onExploreCompare: () => void;
  onExploreRoadmaps: () => void;
  onSelectCompany: (companyId: string) => void;
  onSelectRole: (roleId: string) => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({
  onOpenSearch,
  onExploreCompanies,
  onExploreRoleExplorer,
  onExploreCompare,
  onExploreRoadmaps,
  onSelectCompany,
  onSelectRole
}) => {
  const featuredCompanies = ALL_COMPANIES.slice(0, 8);
  const featuredRoles = ALL_ROLES.slice(0, 6);

  const hierarchySteps = [
    { title: 'Company', desc: 'Real global employers & cultures' },
    { title: 'Department', desc: 'Engineering, Data, Product, Risk' },
    { title: 'Job Role', desc: 'Precise titles & team placements' },
    { title: 'Responsibilities', desc: 'Day-to-day deliverables' },
    { title: 'Required Skills', desc: 'Beginner → Intermediate → Advanced' },
    { title: 'Career Roadmap', desc: '6-stage path from basics to hire' }
  ];

  return (
    <div className="space-y-12 max-w-6xl mx-auto">
      
      {/* Hero Banner */}
      <div className="relative pt-6 sm:pt-10 pb-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-xs font-semibold text-indigo-700">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Career Discovery for Students & Job Seekers</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight text-balance max-w-4xl mx-auto leading-[1.15]">
          Explore real companies, their departments, and what skills you need.
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed text-balance">
          Discover what companies exist, what roles they offer, what those roles actually do, and the structured roadmaps required to pursue them.
        </p>

        {/* Big Search Trigger Bar */}
        <div className="max-w-2xl mx-auto pt-2">
          <button
            onClick={onOpenSearch}
            className="w-full p-3.5 sm:p-4 bg-white hover:bg-slate-50 border border-slate-300 hover:border-indigo-400 rounded-2xl shadow-sm text-left flex items-center justify-between gap-3 transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-3 text-slate-400 group-hover:text-slate-600">
              <Search className="w-5 h-5 text-indigo-600" />
              <span className="text-sm font-medium text-slate-500">
                Search companies, roles, skills, or departments...
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg">
                Quick Search
              </span>
              <kbd className="hidden sm:inline text-xs font-mono text-slate-400 bg-slate-100 px-2 py-1 rounded border border-slate-200">
                ⌘K
              </kbd>
            </div>
          </button>

          {/* Quick query examples */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 text-xs text-slate-500">
            <span className="font-semibold text-slate-700">Try searching:</span>
            {['“Google Software Engineer”', '“AWS Cloud Engineer”', '“Deloitte Business Analyst”', '“Skills for Data Analyst”'].map(ex => (
              <span
                key={ex}
                onClick={onOpenSearch}
                className="text-indigo-600 hover:underline cursor-pointer"
              >
                {ex}
              </span>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center">
            <button
              onClick={() => openCareerScopeChat()}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-50 to-violet-50 hover:from-indigo-100 hover:to-violet-100 border border-indigo-200 text-indigo-900 rounded-xl text-xs font-semibold shadow-2xs transition-all cursor-pointer group"
            >
              <Sparkles className="w-4 h-4 text-indigo-600 group-hover:scale-110 transition-transform" />
              <span>Ask CareerScope AI (n8n Agent)</span>
              <span className="text-[10px] font-mono text-indigo-600 bg-white px-1.5 py-0.5 rounded border border-indigo-200/80">Active</span>
              <ArrowRight className="w-3.5 h-3.5 text-indigo-500 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* THE CORE HIERARCHY FLOW VISUALIZER */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="text-center max-w-xl mx-auto mb-6">
          <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
            Structured Architectural Framework
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
            The Complete CareerScope Pathway
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Navigate seamlessly from top global employers down to specific actionable project milestones.
          </p>
        </div>

        {/* 6 Step Hierarchy Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {hierarchySteps.map((step, idx) => (
            <div
              key={step.title}
              className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 flex flex-col justify-between relative group hover:bg-indigo-50/30 hover:border-indigo-300 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-bold text-indigo-600">
                    0{idx + 1}
                  </span>
                  {idx < 5 && (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-300 hidden lg:block" />
                  )}
                </div>
                <h3 className="text-xs font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* QUICK LAUNCH TOOLS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        
        {/* Tool 1: Company Directory */}
        <div
          onClick={onExploreCompanies}
          className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-indigo-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Company Directory
            </h3>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Explore 28+ leading employers across 10 industries: Google, Amazon, Deloitte, TCS, JPMorgan, Apple, and more.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-600">
            <span>Browse Companies</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Tool 2: Company-Specific Role Explorer */}
        <div
          onClick={onExploreRoleExplorer}
          className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-indigo-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Role Explorer
            </h3>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Select <strong className="text-slate-800 font-semibold">Company → Department → Role</strong> to inspect exact tech stacks and fresher interview expectations.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-600">
            <span>Launch Explorer</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Tool 3: Compare Roles */}
        <div
          onClick={onExploreCompare}
          className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-indigo-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
        >
          <div>
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <ArrowLeftRight className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              Compare Roles
            </h3>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Compare two careers side-by-side: Software Engineer vs Data Analyst, Product Manager vs Consultant, and more.
            </p>
          </div>
          <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-indigo-600">
            <span>Compare Now</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

      </div>

      {/* FEATURED COMPANIES SECTION */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Featured Employers in Directory</h2>
            <p className="text-xs text-slate-500 mt-0.5">Explore departments, roles, and stacks at world-class organizations.</p>
          </div>
          <button
            onClick={onExploreCompanies}
            className="text-xs font-semibold text-indigo-600 hover:underline self-start sm:self-auto cursor-pointer"
          >
            View all 28+ companies →
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {featuredCompanies.map(c => (
            <button
              key={c.id}
              onClick={() => onSelectCompany(c.id)}
              className="p-3.5 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/20 text-left transition-all cursor-pointer flex items-center gap-3 group"
            >
              <CompanyLogo id={c.id} name={c.name} brandColor={c.brandColor} size="sm" />
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 truncate">
                  {c.name}
                </div>
                <div className="text-[10px] text-slate-500 truncate">
                  {c.industry}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* FEATURED ROLES & ROADMAPS */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Popular Career Blueprints</h2>
            <p className="text-xs text-slate-500 mt-0.5">Understand responsibilities, skills from beginner to advanced, and 6-stage roadmaps.</p>
          </div>
          <button
            onClick={onExploreRoadmaps}
            className="text-xs font-semibold text-indigo-600 hover:underline self-start sm:self-auto cursor-pointer"
          >
            Explore all roadmaps →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredRoles.map(r => (
            <div
              key={r.id}
              className="p-4 rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-xs transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {r.title}
                  </h3>
                  <span className="text-[10px] font-mono text-slate-400">
                    {r.departmentName}
                  </span>
                </div>
                <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
                  {r.simpleExplanation}
                </p>

                <div className="mt-3 flex flex-wrap gap-1">
                  {r.technicalSkills.slice(0, 3).map(skill => (
                    <span
                      key={skill}
                      className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-slate-500 font-mono">
                  6 Roadmap Steps
                </span>
                <button
                  onClick={() => onSelectRole(r.id)}
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Role Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Educational Notice Banner */}
      <DisclaimerBanner />
    </div>
  );
};
