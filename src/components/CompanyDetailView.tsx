import React, { useState } from 'react';
import { ArrowLeft, Bookmark, BookmarkCheck, ExternalLink, Briefcase, Sparkles, Building2, Layers, CheckCircle2, ChevronRight } from 'lucide-react';
import { Company, RoleDetail } from '../types';
import { CompanyLogo } from './CompanyLogo';
import { ALL_ROLES } from '../data/roles';
import { useAuth } from '../context/AuthContext';
import { DisclaimerBanner } from './DisclaimerBanner';
import { openCareerScopeChat } from '../utils/chatTrigger';

interface CompanyDetailViewProps {
  company: Company;
  onBack: () => void;
  onSelectRole: (roleId: string) => void;
}

export const CompanyDetailView: React.FC<CompanyDetailViewProps> = ({
  company,
  onBack,
  onSelectRole
}) => {
  const { savedCompanyIds, toggleSaveCompany } = useAuth();
  const isSaved = savedCompanyIds.includes(company.id);

  // Selected department tab within the company
  const [selectedDeptId, setSelectedDeptId] = useState<string>(
    company.departments[0]?.id || ''
  );

  const activeDept = company.departments.find(d => d.id === selectedDeptId) || company.departments[0];

  // Get roles under this department
  const deptRoles = ALL_ROLES.filter(r => r.departmentId === activeDept?.id);

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Back button and breadcrumb */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to Company Directory</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span>Companies</span>
          <span aria-hidden="true">/</span>
          <span className="font-semibold text-slate-900">{company.name}</span>
        </div>
      </div>

      {/* Main Company Profile Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
          <div className="flex items-start gap-4">
            <CompanyLogo
              id={company.id}
              name={company.name}
              brandColor={company.brandColor}
              size="lg"
            />
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {company.name}
                </h1>
                <a
                  href={company.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-700 transition-colors"
                  title="Visit official careers website"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Zero-pill clean unboxed metadata */}
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mt-1.5">
                <span className="font-medium text-slate-800">{company.industry}</span>
                <span aria-hidden="true">·</span>
                <span>HQ: {company.headquarters}</span>
                <span aria-hidden="true">·</span>
                <span>{company.departments.length} Key Departments</span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2.5 self-stretch sm:self-auto justify-end">
            <button
              onClick={() => openCareerScopeChat(`Tell me about working at ${company.name}, their hiring process, culture, and key engineering & product roles.`)}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-lg transition-colors cursor-pointer shadow-2xs"
              title={`Ask n8n AI about ${company.name}`}
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Ask AI</span>
            </button>

            <button
              onClick={() => toggleSaveCompany(company.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                isSaved
                  ? 'bg-amber-50 border-amber-300 text-amber-800'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              {isSaved ? (
                <>
                  <BookmarkCheck className="w-4 h-4 text-amber-600" />
                  <span>Saved Company</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-4 h-4" />
                  <span>Save Company</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Short company description */}
        <p className="text-sm text-slate-700 leading-relaxed mt-5">
          {company.description}
        </p>

        {/* Fresher & Campus Hiring Focus Spotlight */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
          <div className="flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-slate-900">
                Fresher & University Recruitment Focus at {company.name}
              </div>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {company.hiringFocusFresher}
              </p>
            </div>
          </div>

          {/* Tech stack highlights */}
          <div className="mt-3 pt-3 border-t border-slate-200/60 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Common Tech & Tool Stack:
            </span>
            {company.techStackHighlights.map(tech => (
              <span
                key={tech}
                className="text-[11px] font-mono font-medium text-slate-700 bg-white border border-slate-200 px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Department Breakdown Section */}
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
            Departments at {company.name}
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Select a department below to explore active job roles, daily responsibilities, and relevant skills.
          </p>
        </div>

        {/* Department Tab Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {company.departments.map(dept => {
            const isActive = dept.id === activeDept?.id;
            return (
              <button
                key={dept.id}
                onClick={() => setSelectedDeptId(dept.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer shrink-0 border ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {dept.name}
              </button>
            );
          })}
        </div>

        {/* Active Department Details Card */}
        {activeDept && (
          <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  Department Scope
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mt-0.5">
                  {activeDept.name}
                </h3>
                <p className="text-xs text-slate-600 mt-1 max-w-2xl">
                  {activeDept.description}
                </p>
              </div>

              <div className="text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 shrink-0 self-start sm:self-auto">
                {deptRoles.length} Associated Role{deptRoles.length !== 1 ? 's' : ''} in Directory
              </div>
            </div>

            {/* In-demand Skills frequently relevant to this department */}
            <div>
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>Skills Frequently Relevant to {activeDept.name} Roles</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeDept.keySkills.map(skill => (
                  <div
                    key={skill}
                    className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 flex items-center gap-1.5 shadow-2xs"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Job Roles in this Department */}
            <div>
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
                <span>Common Job Roles in this Department</span>
              </div>

              {deptRoles.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {deptRoles.map(role => (
                    <div
                      key={role.id}
                      className="p-4 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/20 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                            {role.title}
                          </h4>
                          <span className="text-[11px] font-mono text-slate-400">
                            {role.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-2 mt-1.5 leading-relaxed">
                          {role.simpleExplanation}
                        </p>

                        {/* Top skills preview */}
                        <div className="mt-3 flex flex-wrap gap-1">
                          {role.technicalSkills.slice(0, 3).map(skill => (
                            <span
                              key={skill}
                              className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] text-slate-500">
                          Fresher Guide: {role.averageFresherSalaryGuide.split('|')[1]?.trim() || role.averageFresherSalaryGuide}
                        </span>
                        <button
                          onClick={() => onSelectRole(role.id)}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 cursor-pointer"
                        >
                          <span>Explore Role & Roadmap</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 text-center text-xs text-slate-500">
                  Specialized roles for this department include Senior Operations Lead, Account Executive, and HR Business Partner. Explore related technology and analytics roles in the directory.
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Educational Notice Banner */}
      <DisclaimerBanner />
    </div>
  );
};
