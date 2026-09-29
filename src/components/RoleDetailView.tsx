import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Bookmark, 
  BookmarkCheck, 
  CheckCircle2, 
  Circle, 
  Clock, 
  Briefcase, 
  Sparkles, 
  Building2, 
  TrendingUp, 
  Lightbulb, 
  ArrowRight,
  Code,
  Terminal,
  Cpu
} from 'lucide-react';
import { RoleDetail } from '../types';
import { ALL_COMPANIES } from '../data/companies';
import { CompanyLogo } from './CompanyLogo';
import { useAuth } from '../context/AuthContext';
import { DisclaimerBanner } from './DisclaimerBanner';
import { openCareerScopeChat } from '../utils/chatTrigger';

interface RoleDetailViewProps {
  role: RoleDetail;
  onBack: () => void;
  onSelectCompany: (companyId: string) => void;
  onCompareWith?: (roleId: string) => void;
}

export const RoleDetailView: React.FC<RoleDetailViewProps> = ({
  role,
  onBack,
  onSelectCompany,
  onCompareWith
}) => {
  const { 
    savedRoleIds, 
    toggleSaveRole, 
    savedSkills, 
    toggleSaveSkill, 
    updateSkillStatus,
    completedChecklistIds,
    toggleRoadmapChecklistItem
  } = useAuth();

  const isSaved = savedRoleIds.includes(role.id);
  const [activeRoadmapStep, setActiveRoadmapStep] = useState<number>(1);

  // Hiring companies list
  const hiringCompanies = ALL_COMPANIES.filter(c => role.hiringCompanies.includes(c.id));

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Top back button and navigation breadcrumb */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          <span>Back</span>
        </button>

        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span>Roles</span>
          <span aria-hidden="true">/</span>
          <span>{role.departmentName}</span>
          <span aria-hidden="true">/</span>
          <span className="font-semibold text-slate-900">{role.title}</span>
        </div>
      </div>

      {/* Hero Header Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
              {role.departmentName} · {role.category}
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
              {role.title}
            </h1>
            
            {/* Zero-pill clean unboxed metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mt-2">
              <span>Fresher Benchmark: {role.averageFresherSalaryGuide}</span>
              <span aria-hidden="true">·</span>
              <span>{role.roadmap.length} Roadmap Stages</span>
              <span aria-hidden="true">·</span>
              <span>{hiringCompanies.length} Top Recruiters</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 self-start">
            <button
              onClick={() => openCareerScopeChat(`Tell me about the career roadmap, interview expectations, and recommended skill breakdown for a ${role.title}.`)}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 rounded-lg transition-colors cursor-pointer shadow-2xs"
              title={`Ask n8n AI about ${role.title}`}
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Ask AI</span>
            </button>

            {onCompareWith && (
              <button
                onClick={() => onCompareWith(role.id)}
                className="px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
              >
                Compare Role
              </button>
            )}

            <button
              onClick={() => toggleSaveRole(role.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
                isSaved
                  ? 'bg-amber-50 border-amber-300 text-amber-800'
                  : 'bg-slate-900 text-white hover:bg-slate-800 border-slate-900'
              }`}
            >
              {isSaved ? (
                <>
                  <BookmarkCheck className="w-4 h-4 text-amber-600" />
                  <span>Saved to Dashboard</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-4 h-4" />
                  <span>Save Role</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* "What does this role do?" - Simple explanation */}
        <div className="mt-6 p-4 rounded-xl bg-indigo-50/60 border border-indigo-100">
          <div className="text-xs font-bold text-indigo-950 uppercase tracking-wider mb-1 flex items-center gap-1.5">
            <Lightbulb className="w-3.5 h-3.5 text-indigo-600" />
            <span>What does this role do?</span>
          </div>
          <p className="text-sm font-medium text-slate-800 leading-relaxed">
            {role.simpleExplanation}
          </p>
        </div>

        {/* Day in the life summary */}
        <div className="mt-4 text-xs text-slate-600 leading-relaxed">
          <span className="font-semibold text-slate-800">A Day in the Life:</span> {role.dayInTheLife}
        </div>
      </div>

      {/* Two Column Layout: Responsibilities & Required Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Responsibilities */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
              <Briefcase className="w-4 h-4 text-indigo-600" />
              <h2>Key Responsibilities</h2>
            </div>
            <ul className="mt-4 space-y-3">
              {role.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0 mt-1.5" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Primary Tools & Platforms
            </div>
            <div className="flex flex-wrap gap-1.5">
              {role.toolsAndPlatforms.map(tool => (
                <span
                  key={tool}
                  className="text-xs font-mono bg-slate-100 text-slate-700 px-2.5 py-1 rounded"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Required Skills (Technical + Soft Skills) */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <h2>Required Skills</h2>
            </div>

            {/* Technical Skills */}
            <div className="mt-4">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Technical Skills
              </div>
              <div className="space-y-2">
                {role.technicalSkills.map(skill => {
                  const saved = savedSkills.find(s => s.skillName.toLowerCase() === skill.toLowerCase());
                  return (
                    <div
                      key={skill}
                      className="p-2.5 rounded-lg border border-slate-100 bg-slate-50/70 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <Code className="w-3.5 h-3.5 text-indigo-600" />
                        <span className="text-xs font-semibold text-slate-800">{skill}</span>
                      </div>
                      <button
                        onClick={() => toggleSaveSkill(skill, 'Beginner')}
                        className={`text-[11px] font-medium cursor-pointer transition-colors ${
                          saved ? 'text-amber-600 font-bold' : 'text-slate-500 hover:text-indigo-600'
                        }`}
                      >
                        {saved ? 'Saved ✓' : '+ Save Skill'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="mt-5">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                Soft Skills
              </div>
              <div className="flex flex-wrap gap-1.5">
                {role.softSkills.map(skill => (
                  <span
                    key={skill}
                    className="text-xs text-slate-700 bg-slate-100/90 border border-slate-200/80 px-2.5 py-1 rounded-md font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] text-slate-500">
            Click "+ Save Skill" to track individual competencies on your personalized dashboard.
          </div>
        </div>

      </div>

      {/* SKILL LEVEL PROGRESSION SECTION: Beginner → Intermediate → Advanced */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
        <div>
          <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
            Detailed Competency Breakdown
          </div>
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight mt-0.5">
            Skill Progression: Beginner → Intermediate → Advanced
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Understand how expectations evolve from student/entry-level to senior roles across each core competency.
          </p>
        </div>

        <div className="space-y-4 pt-2">
          {role.skillProgressions.map((prog, idx) => (
            <div
              key={idx}
              className="border border-slate-200/80 rounded-xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-900">{prog.skillName}</span>
                <span className="text-[11px] font-mono text-slate-500">{prog.category}</span>
              </div>

              {/* 3 Columns: Beginner, Intermediate, Advanced */}
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 text-xs">
                
                {/* Beginner */}
                <div className="p-4 bg-emerald-50/20">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-800 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>Beginner (Student / Fresher)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {prog.beginner}
                  </p>
                </div>

                {/* Intermediate */}
                <div className="p-4 bg-blue-50/20">
                  <div className="flex items-center gap-1.5 font-bold text-blue-800 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span>Intermediate (1 - 3 Years)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {prog.intermediate}
                  </p>
                </div>

                {/* Advanced */}
                <div className="p-4 bg-purple-50/20">
                  <div className="flex items-center gap-1.5 font-bold text-purple-800 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    <span>Advanced (Senior / Lead)</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {prog.advanced}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CAREER ROADMAP SECTION */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
            Step-by-Step Path
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-0.5">
            Interactive Career Roadmap for {role.title}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Follow this 6-stage blueprint from initial basics to securing full-time offers. Check off milestones as you complete them!
          </p>
        </div>

        {/* Visual Roadmap Flow Bar (6 steps) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-2">
          {role.roadmap.map(step => {
            const isActive = step.stepNumber === activeRoadmapStep;
            const completedCount = step.checklist.filter((_, idx) =>
              completedChecklistIds.includes(`${step.id}-${idx}`)
            ).length;
            const isAllCompleted = completedCount === step.checklist.length;

            return (
              <button
                key={step.id}
                onClick={() => setActiveRoadmapStep(step.stepNumber)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm ring-2 ring-indigo-600/20'
                    : isAllCompleted
                    ? 'bg-emerald-50/60 border-emerald-300 text-slate-800'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100/80'
                }`}
              >
                <div>
                  <div className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? 'text-indigo-200' : 'text-slate-400'}`}>
                    Step {step.stepNumber}
                  </div>
                  <div className={`text-xs font-bold mt-1 line-clamp-1 ${isActive ? 'text-white' : 'text-slate-900'}`}>
                    {step.title}
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[10px]">
                  <span className={isActive ? 'text-indigo-200' : 'text-slate-500'}>
                    {step.estimatedDuration}
                  </span>
                  {isAllCompleted ? (
                    <CheckCircle2 className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-emerald-600'}`} />
                  ) : (
                    <span className={`font-mono ${isActive ? 'text-indigo-200' : 'text-slate-400'}`}>
                      {completedCount}/{step.checklist.length}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Roadmap Step Details Card */}
        {(() => {
          const currentStep = role.roadmap.find(s => s.stepNumber === activeRoadmapStep) || role.roadmap[0];
          return (
            <div className="mt-6 p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/80 pb-4">
                <div>
                  <div className="text-xs font-mono text-indigo-600 font-bold uppercase">
                    Stage {currentStep.stepNumber} of 6
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                    {currentStep.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                    {currentStep.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-auto">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-xs font-medium text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded-md">
                    Estimated: {currentStep.estimatedDuration}
                  </span>
                </div>
              </div>

              {/* Checklist */}
              <div>
                <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2.5">
                  Milestone Checklist (Click to Mark Done)
                </div>
                <div className="space-y-2">
                  {currentStep.checklist.map((item, idx) => {
                    const itemId = `${currentStep.id}-${idx}`;
                    const isDone = completedChecklistIds.includes(itemId);

                    return (
                      <button
                        key={idx}
                        onClick={() => toggleRoadmapChecklistItem(itemId)}
                        className={`w-full p-3 rounded-lg border text-left transition-all flex items-start gap-3 cursor-pointer ${
                          isDone
                            ? 'bg-emerald-50/70 border-emerald-300 text-slate-700'
                            : 'bg-white border-slate-200 text-slate-800 hover:border-indigo-300'
                        }`}
                      >
                        {isDone ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        ) : (
                          <Circle className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                        )}
                        <span className={`text-xs leading-relaxed ${isDone ? 'line-through text-slate-500' : 'font-medium'}`}>
                          {item}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Fresher Insider Tip */}
              <div className="p-3.5 rounded-lg bg-amber-50/70 border border-amber-200/80 flex items-start gap-2.5">
                <Lightbulb className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900 leading-relaxed">
                  <span className="font-bold">Fresher Strategy Tip:</span> {currentStep.fresherTips}
                </div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Career Progression Ladder */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-base font-bold text-slate-900">
          <TrendingUp className="w-4 h-4 text-indigo-600" />
          <h2>Career Progression & Promotion Track</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          {role.careerProgression.map((tier, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200/90 bg-slate-50/50 flex flex-col justify-between"
            >
              <div>
                <div className="text-[11px] font-mono text-indigo-600 font-semibold">
                  {tier.experience}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mt-1">
                  {tier.level}
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {tier.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Companies Hiring for this Role */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-base font-bold text-slate-900">
            <Building2 className="w-4 h-4 text-indigo-600" />
            <h2>Top Companies Hiring {role.title}s</h2>
          </div>
          <span className="text-xs text-slate-500 font-mono">
            {hiringCompanies.length} Verified Employers
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
          {hiringCompanies.map(c => (
            <button
              key={c.id}
              onClick={() => onSelectCompany(c.id)}
              className="p-3 bg-slate-50 hover:bg-indigo-50/50 border border-slate-200 rounded-xl flex items-center gap-3 text-left transition-all cursor-pointer group"
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

      {/* Educational Notice Banner */}
      <DisclaimerBanner />
    </div>
  );
};
