import React, { useState } from 'react';
import { 
  ArrowLeftRight, 
  Briefcase, 
  Code, 
  Sparkles, 
  Wrench, 
  TrendingUp, 
  Check, 
  ArrowRight,
  Building2,
  Clock
} from 'lucide-react';
import { ALL_ROLES } from '../data/roles';
import { ALL_COMPANIES } from '../data/companies';
import { CompanyLogo } from './CompanyLogo';
import { DisclaimerBanner } from './DisclaimerBanner';

interface RoleComparatorProps {
  initialRoleAId?: string;
  initialRoleBId?: string;
  onSelectRole: (roleId: string) => void;
  onSelectCompany: (companyId: string) => void;
}

export const RoleComparator: React.FC<RoleComparatorProps> = ({
  initialRoleAId = 'software-engineer',
  initialRoleBId = 'data-analyst',
  onSelectRole,
  onSelectCompany
}) => {
  const [roleAId, setRoleAId] = useState(initialRoleAId);
  const [roleBId, setRoleBId] = useState(initialRoleBId);

  const roleA = ALL_ROLES.find(r => r.id === roleAId) || ALL_ROLES[0];
  const roleB = ALL_ROLES.find(r => r.id === roleBId) || ALL_ROLES[1];

  const presets = [
    { name: 'Software Engineer vs Data Analyst', a: 'software-engineer', b: 'data-analyst' },
    { name: 'Cloud Engineer vs Software Engineer', a: 'cloud-engineer', b: 'software-engineer' },
    { name: 'Product Manager vs Tech Consultant', a: 'product-manager', b: 'technology-consultant' },
    { name: 'AI/ML Engineer vs Data Analyst', a: 'ai-ml-engineer', b: 'data-analyst' },
    { name: 'Cybersecurity Analyst vs Cloud Engineer', a: 'cybersecurity-analyst', b: 'cloud-engineer' }
  ];

  // Common hiring companies
  const commonCompanies = ALL_COMPANIES.filter(
    c => roleA.hiringCompanies.includes(c.id) && roleB.hiringCompanies.includes(c.id)
  );

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-1">
          <ArrowLeftRight className="w-4 h-4" />
          <span>Role Comparator</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Compare Career Roles Side-by-Side
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
          Evaluate responsibilities, required technical skills, daily tools, and career growth trajectories to decide which path matches your strengths.
        </p>

        {/* Quick comparison presets */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-500">Popular comparisons:</span>
          {presets.map(p => (
            <button
              key={p.name}
              onClick={() => {
                setRoleAId(p.a);
                setRoleBId(p.b);
              }}
              className="text-xs font-medium px-2.5 py-1 bg-white hover:bg-indigo-50 hover:text-indigo-600 border border-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Role Selection Pickers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Role A Picker */}
        <div className="bg-white border-2 border-indigo-500/30 rounded-2xl p-5 shadow-xs">
          <label className="block text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1.5">
            Role A (Target 1)
          </label>
          <select
            value={roleA.id}
            onChange={e => setRoleAId(e.target.value)}
            className="w-full p-2.5 text-sm font-bold text-slate-900 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-indigo-600 cursor-pointer"
          >
            {ALL_ROLES.map(r => (
              <option key={r.id} value={r.id} disabled={r.id === roleB.id}>
                {r.title} ({r.departmentName})
              </option>
            ))}
          </select>
          <div className="mt-2 text-xs text-slate-500">
            {roleA.departmentName} · {roleA.category}
          </div>
        </div>

        {/* Role B Picker */}
        <div className="bg-white border-2 border-purple-500/30 rounded-2xl p-5 shadow-xs">
          <label className="block text-xs font-bold text-purple-600 uppercase tracking-wider mb-1.5">
            Role B (Target 2)
          </label>
          <select
            value={roleB.id}
            onChange={e => setRoleBId(e.target.value)}
            className="w-full p-2.5 text-sm font-bold text-slate-900 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:border-purple-600 cursor-pointer"
          >
            {ALL_ROLES.map(r => (
              <option key={r.id} value={r.id} disabled={r.id === roleA.id}>
                {r.title} ({r.departmentName})
              </option>
            ))}
          </select>
          <div className="mt-2 text-xs text-slate-500">
            {roleB.departmentName} · {roleB.category}
          </div>
        </div>
      </div>

      {/* Side-by-Side Comparison Matrix */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs divide-y divide-slate-200">
        
        {/* Row 1: What Does This Role Do? */}
        <div className="p-6">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
            <span>Role Purpose & Daily Objective</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-indigo-50/40 border border-indigo-100">
              <div className="font-bold text-indigo-900 text-sm mb-1">{roleA.title}</div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {roleA.simpleExplanation}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-purple-50/40 border border-purple-100">
              <div className="font-bold text-purple-900 text-sm mb-1">{roleB.title}</div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {roleB.simpleExplanation}
              </p>
            </div>
          </div>
        </div>

        {/* Row 2: Responsibilities */}
        <div className="p-6">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-indigo-600" />
            <span>Core Responsibilities</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="font-bold text-slate-900 text-xs mb-2">{roleA.title}</div>
              <ul className="space-y-2">
                {roleA.responsibilities.slice(0, 5).map((r, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0 mt-1.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-bold text-slate-900 text-xs mb-2">{roleB.title}</div>
              <ul className="space-y-2">
                {roleB.responsibilities.slice(0, 5).map((r, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0 mt-1.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Row 3: Technical Skills */}
        <div className="p-6">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
            <Code className="w-3.5 h-3.5 text-indigo-600" />
            <span>Technical Skills Comparison</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="font-bold text-slate-900 text-xs mb-2">{roleA.title}</div>
              <div className="flex flex-wrap gap-1.5">
                {roleA.technicalSkills.map(skill => (
                  <span
                    key={skill}
                    className="text-xs font-medium bg-indigo-50 text-indigo-800 border border-indigo-200/80 px-2.5 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="font-bold text-slate-900 text-xs mb-2">{roleB.title}</div>
              <div className="flex flex-wrap gap-1.5">
                {roleB.technicalSkills.map(skill => (
                  <span
                    key={skill}
                    className="text-xs font-medium bg-purple-50 text-purple-800 border border-purple-200/80 px-2.5 py-1 rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 4: Soft Skills */}
        <div className="p-6">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Essential Soft Skills</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="font-bold text-slate-900 text-xs mb-2">{roleA.title}</div>
              <div className="flex flex-wrap gap-1.5">
                {roleA.softSkills.map(skill => (
                  <span
                    key={skill}
                    className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="font-bold text-slate-900 text-xs mb-2">{roleB.title}</div>
              <div className="flex flex-wrap gap-1.5">
                {roleB.softSkills.map(skill => (
                  <span
                    key={skill}
                    className="text-xs bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 5: Primary Tools */}
        <div className="p-6">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
            <Wrench className="w-3.5 h-3.5 text-indigo-600" />
            <span>Primary Tools & Platforms</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="font-bold text-slate-900 text-xs mb-2">{roleA.title}</div>
              <div className="flex flex-wrap gap-1.5">
                {roleA.toolsAndPlatforms.map(tool => (
                  <span
                    key={tool}
                    className="text-xs font-mono bg-slate-50 border border-slate-200 text-slate-800 px-2 py-0.5 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="font-bold text-slate-900 text-xs mb-2">{roleB.title}</div>
              <div className="flex flex-wrap gap-1.5">
                {roleB.toolsAndPlatforms.map(tool => (
                  <span
                    key={tool}
                    className="text-xs font-mono bg-slate-50 border border-slate-200 text-slate-800 px-2 py-0.5 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 6: Typical Experience Level & Fresher Benchmarks */}
        <div className="p-6">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-indigo-600" />
            <span>Fresher Entry Level & Compensation Guide</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-1">
              <div className="font-bold text-slate-900">{roleA.title}</div>
              <div className="text-slate-600">{roleA.averageFresherSalaryGuide}</div>
              <div className="text-[11px] text-slate-500 pt-1">
                Entry level: {roleA.careerProgression[0]?.level} ({roleA.careerProgression[0]?.experience})
              </div>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs space-y-1">
              <div className="font-bold text-slate-900">{roleB.title}</div>
              <div className="text-slate-600">{roleB.averageFresherSalaryGuide}</div>
              <div className="text-[11px] text-slate-500 pt-1">
                Entry level: {roleB.careerProgression[0]?.level} ({roleB.careerProgression[0]?.experience})
              </div>
            </div>
          </div>
        </div>

        {/* Row 7: Career Progression Ladder */}
        <div className="p-6">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />
            <span>Career Progression Tracks</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="font-bold text-slate-900 text-xs mb-1">{roleA.title}</div>
              {roleA.careerProgression.map((cp, idx) => (
                <div key={idx} className="p-2.5 rounded-lg border border-slate-200 text-xs">
                  <div className="font-semibold text-slate-800">{cp.level}</div>
                  <div className="text-[11px] text-indigo-600 font-mono">{cp.experience}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{cp.focus}</div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <div className="font-bold text-slate-900 text-xs mb-1">{roleB.title}</div>
              {roleB.careerProgression.map((cp, idx) => (
                <div key={idx} className="p-2.5 rounded-lg border border-slate-200 text-xs">
                  <div className="font-semibold text-slate-800">{cp.level}</div>
                  <div className="text-[11px] text-purple-600 font-mono">{cp.experience}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{cp.focus}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Actions: View Full Roadmaps */}
        <div className="p-6 bg-slate-50/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onSelectRole(roleA.id)}
            className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
          >
            <span>Explore {roleA.title} Full Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onSelectRole(roleB.id)}
            className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
          >
            <span>Explore {roleB.title} Full Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Educational Notice Banner */}
      <DisclaimerBanner />
    </div>
  );
};
