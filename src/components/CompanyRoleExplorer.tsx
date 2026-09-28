import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  FolderTree, 
  Briefcase, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Bookmark, 
  BookmarkCheck,
  Compass,
  Layers,
  ChevronRight
} from 'lucide-react';
import { ALL_COMPANIES } from '../data/companies';
import { ALL_ROLES } from '../data/roles';
import { CompanyLogo } from './CompanyLogo';
import { useAuth } from '../context/AuthContext';
import { DisclaimerBanner } from './DisclaimerBanner';

interface CompanyRoleExplorerProps {
  onSelectRoleFull: (roleId: string) => void;
  onSelectCompanyFull: (companyId: string) => void;
}

export const CompanyRoleExplorer: React.FC<CompanyRoleExplorerProps> = ({
  onSelectRoleFull,
  onSelectCompanyFull
}) => {
  const { savedRoleIds, toggleSaveRole, savedCompanyIds, toggleSaveCompany } = useAuth();

  // Cascade selections
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>('google');
  const [selectedDeptId, setSelectedDeptId] = useState<string>('software-engineering');
  const [selectedRoleId, setSelectedRoleId] = useState<string>('software-engineer');

  // Currently selected company
  const selectedCompany = useMemo(() => {
    return ALL_COMPANIES.find(c => c.id === selectedCompanyId) || ALL_COMPANIES[0];
  }, [selectedCompanyId]);

  // Departments available in selected company
  const availableDepts = selectedCompany.departments;

  // Currently selected department
  const selectedDept = useMemo(() => {
    return availableDepts.find(d => d.id === selectedDeptId) || availableDepts[0];
  }, [availableDepts, selectedDeptId]);

  // Roles available in selected department
  const availableRoles = useMemo(() => {
    const roles = ALL_ROLES.filter(r => r.departmentId === selectedDept?.id);
    return roles.length > 0 ? roles : ALL_ROLES.slice(0, 2);
  }, [selectedDept]);

  // Currently selected role
  const selectedRole = useMemo(() => {
    return availableRoles.find(r => r.id === selectedRoleId) || availableRoles[0];
  }, [availableRoles, selectedRoleId]);

  const isRoleSaved = savedRoleIds.includes(selectedRole.id);
  const isCompanySaved = savedCompanyIds.includes(selectedCompany.id);

  // When company changes, ensure department & role stay valid
  const handleCompanyChange = (newCompanyId: string) => {
    setSelectedCompanyId(newCompanyId);
    const comp = ALL_COMPANIES.find(c => c.id === newCompanyId);
    if (comp && comp.departments.length > 0) {
      const firstDept = comp.departments[0];
      setSelectedDeptId(firstDept.id);
      const rolesInDept = ALL_ROLES.filter(r => r.departmentId === firstDept.id);
      if (rolesInDept.length > 0) {
        setSelectedRoleId(rolesInDept[0].id);
      }
    }
  };

  // When department changes, ensure role stays valid
  const handleDeptChange = (newDeptId: string) => {
    setSelectedDeptId(newDeptId);
    const rolesInDept = ALL_ROLES.filter(r => r.departmentId === newDeptId);
    if (rolesInDept.length > 0) {
      setSelectedRoleId(rolesInDept[0].id);
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider mb-1">
          <Compass className="w-4 h-4" />
          <span>Interactive Cascading Navigator</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Company-Specific Role Explorer
        </h1>
        <p className="text-sm text-slate-600 mt-1 max-w-3xl leading-relaxed">
          Follow the hierarchical journey: <strong className="text-slate-800 font-semibold">Company → Department → Job Role → Responsibilities → Skills</strong>. Select any combination below to inspect real-world expectations.
        </p>
      </div>

      {/* 3-Step Cascading Selector Controls */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">
          Select Your Path
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Step 1: Select Company */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-mono">1</span>
              <span>Company</span>
            </label>
            <div className="relative">
              <select
                value={selectedCompanyId}
                onChange={e => handleCompanyChange(e.target.value)}
                className="w-full pl-3 pr-8 py-2.5 text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 cursor-pointer appearance-none"
              >
                {ALL_COMPANIES.map(comp => (
                  <option key={comp.id} value={comp.id}>
                    {comp.name} ({comp.industry})
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-500 text-xs">
                ▼
              </div>
            </div>
          </div>

          {/* Step 2: Select Department */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-mono">2</span>
              <span>Department</span>
            </label>
            <div className="relative">
              <select
                value={selectedDept?.id || ''}
                onChange={e => handleDeptChange(e.target.value)}
                className="w-full pl-3 pr-8 py-2.5 text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 cursor-pointer appearance-none"
              >
                {availableDepts.map(dept => (
                  <option key={dept.id} value={dept.id}>
                    {dept.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-500 text-xs">
                ▼
              </div>
            </div>
          </div>

          {/* Step 3: Select Role */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-mono">3</span>
              <span>Job Role</span>
            </label>
            <div className="relative">
              <select
                value={selectedRole?.id || ''}
                onChange={e => setSelectedRoleId(e.target.value)}
                className="w-full pl-3 pr-8 py-2.5 text-xs font-semibold text-slate-800 bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 cursor-pointer appearance-none"
              >
                {availableRoles.map(role => (
                  <option key={role.id} value={role.id}>
                    {role.title}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-500 text-xs">
                ▼
              </div>
            </div>
          </div>

        </div>

        {/* Selected hierarchy breadcrumb tracker */}
        <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2 text-xs text-slate-600 font-medium">
          <span className="text-slate-400 font-semibold uppercase text-[10px]">Active Pathway:</span>
          <span className="text-slate-900 font-bold">{selectedCompany.name}</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">{selectedDept.name}</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-indigo-600 font-bold">{selectedRole.title}</span>
        </div>
      </div>

      {/* Dynamic Results Display Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        
        {/* Header with Company context & quick actions */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4 border-b border-slate-100 pb-6">
          <div className="flex items-start gap-4">
            <CompanyLogo
              id={selectedCompany.id}
              name={selectedCompany.name}
              brandColor={selectedCompany.brandColor}
              size="lg"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  {selectedDept.name} Department at {selectedCompany.name}
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-0.5">
                {selectedRole.title}
              </h2>
              <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                <span>{selectedCompany.industry} Sector</span>
                <span aria-hidden="true">·</span>
                <span>Benchmark: {selectedRole.averageFresherSalaryGuide.split('|')[0]?.trim()}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start">
            <button
              onClick={() => toggleSaveRole(selectedRole.id)}
              className={`p-2 rounded-lg border text-xs font-semibold cursor-pointer transition-colors flex items-center gap-1.5 ${
                isRoleSaved
                  ? 'bg-amber-50 border-amber-300 text-amber-800'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {isRoleSaved ? (
                <BookmarkCheck className="w-4 h-4 text-amber-600" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
              <span>{isRoleSaved ? 'Role Saved' : 'Save Role'}</span>
            </button>
          </div>
        </div>

        {/* What does this role do? */}
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
          <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
            Role Purpose & Scope
          </div>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {selectedRole.simpleExplanation}
          </p>
        </div>

        {/* Company Specific Context & Culture */}
        <div className="p-4 rounded-xl bg-indigo-50/50 border border-indigo-100 space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-950 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span>Working as a {selectedRole.title} at {selectedCompany.name}</span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            {selectedCompany.hiringFocusFresher}
          </p>
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[11px] font-semibold text-slate-500">
              Stack & Focus at {selectedCompany.name}:
            </span>
            {selectedCompany.techStackHighlights.map(tech => (
              <span
                key={tech}
                className="text-[11px] font-mono font-medium text-slate-800 bg-white border border-indigo-200/80 px-2 py-0.5 rounded shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Two Columns: Responsibilities & Required Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          
          {/* Responsibilities */}
          <div className="p-5 rounded-xl border border-slate-200/80 bg-white space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">
              <Briefcase className="w-4 h-4 text-indigo-600" />
              <h3>Core Responsibilities</h3>
            </div>
            <ul className="space-y-2.5">
              {selectedRole.responsibilities.slice(0, 5).map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0 mt-1.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Commonly Associated Skills */}
          <div className="p-5 rounded-xl border border-slate-200/80 bg-white space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <h3>Commonly Associated Skills</h3>
            </div>
            
            <div className="space-y-2">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Technical Mastery
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedRole.technicalSkills.map(skill => (
                  <span
                    key={skill}
                    className="text-xs bg-slate-100 text-slate-800 px-2.5 py-1 rounded-md font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                Soft Skills
              </div>
              <div className="flex flex-wrap gap-1.5">
                {selectedRole.softSkills.map(skill => (
                  <span
                    key={skill}
                    className="text-xs bg-slate-50 border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Action Bar */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => onSelectCompanyFull(selectedCompany.id)}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Explore all departments at {selectedCompany.name}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onSelectRoleFull(selectedRole.id)}
            className="w-full sm:w-auto px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer inline-flex items-center justify-center gap-2 shadow-xs"
          >
            <span>View Full Roadmap & Skill Levels for {selectedRole.title}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Educational Notice Banner */}
      <DisclaimerBanner />
    </div>
  );
};
