import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  ArrowDown, 
  Sparkles, 
  Lightbulb, 
  BookOpen, 
  Wrench, 
  FolderGit2, 
  FileText, 
  Users, 
  SendHorizontal,
  BookmarkCheck,
  Bookmark
} from 'lucide-react';
import { ALL_ROLES } from '../data/roles';
import { useAuth } from '../context/AuthContext';
import { DisclaimerBanner } from './DisclaimerBanner';

interface RoadmapExplorerProps {
  initialRoleId?: string;
  onSelectRole: (roleId: string) => void;
}

export const RoadmapExplorer: React.FC<RoadmapExplorerProps> = ({
  initialRoleId = 'software-engineer',
  onSelectRole
}) => {
  const [selectedRoleId, setSelectedRoleId] = useState(initialRoleId);
  const { completedChecklistIds, toggleRoadmapChecklistItem, savedRoleIds, toggleSaveRole } = useAuth();

  const role = ALL_ROLES.find(r => r.id === selectedRoleId) || ALL_ROLES[0];
  const isSaved = savedRoleIds.includes(role.id);

  // Calculate overall progress across all steps of this role
  const totalItems = role.roadmap.reduce((acc, step) => acc + step.checklist.length, 0);
  const completedItems = role.roadmap.reduce((acc, step) => {
    return (
      acc +
      step.checklist.filter((_, idx) =>
        completedChecklistIds.includes(`${step.id}-${idx}`)
      ).length
    );
  }, 0);
  const percentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

  const stepIcons = [
    BookOpen,
    Wrench,
    FolderGit2,
    FileText,
    Users,
    SendHorizontal
  ];

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
              Visual Learning Blueprints
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Master Career Roadmaps
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              Step-by-step 6-stage roadmap designed for freshers and students: Fundamentals → Technical Skills → Projects → Resume → Mock Interviews → Applications.
            </p>
          </div>

          <button
            onClick={() => toggleSaveRole(role.id)}
            className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg border transition-colors cursor-pointer shrink-0 ${
              isSaved
                ? 'bg-amber-50 border-amber-300 text-amber-800'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
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
                <span>Save Roadmap</span>
              </>
            )}
          </button>
        </div>

        {/* Role Selector Tabs */}
        <div className="mt-5 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {ALL_ROLES.map(r => (
            <button
              key={r.id}
              onClick={() => setSelectedRoleId(r.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg whitespace-nowrap transition-all cursor-pointer shrink-0 border ${
                r.id === role.id
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {r.title}
            </button>
          ))}
        </div>
      </div>

      {/* Progress Overview Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Roadmap Completion Status
            </div>
            <h2 className="text-xl font-bold text-slate-900 mt-0.5">
              {role.title} Career Journey
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              You have completed <span className="font-bold text-slate-900">{completedItems}</span> of {totalItems} milestones.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-2xl font-extrabold text-indigo-600 font-mono">
                {percentage}%
              </span>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
                Finished
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-2.5 rounded-full mt-4 overflow-hidden">
          <div
            className="bg-indigo-600 h-full rounded-full transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* 6-STAGE VERTICAL ROADMAP DIAGRAM */}
      <div className="space-y-6 relative">
        {role.roadmap.map((step, idx) => {
          const Icon = stepIcons[idx] || Sparkles;
          const completedCount = step.checklist.filter((_, i) =>
            completedChecklistIds.includes(`${step.id}-${i}`)
          ).length;
          const isStepCompleted = completedCount === step.checklist.length;

          return (
            <div key={step.id} className="relative">
              {/* Connector line between steps */}
              {idx < role.roadmap.length - 1 && (
                <div className="absolute left-6 top-16 bottom-[-24px] w-0.5 bg-slate-200 -z-0" />
              )}

              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs relative z-10 hover:border-indigo-300 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-2xs ${
                      isStepCompleted
                        ? 'bg-emerald-500 text-white'
                        : 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-indigo-600 uppercase">
                          Stage 0{step.stepNumber}
                        </span>
                        <span className="text-slate-300">·</span>
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{step.estimatedDuration}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 mt-1">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed max-w-2xl">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-600 self-start">
                    {completedCount} / {step.checklist.length} done
                  </div>
                </div>

                {/* Checklist inside this roadmap step */}
                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Actionable Milestones (Check to Track)
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.checklist.map((item, itemIdx) => {
                      const itemId = `${step.id}-${itemIdx}`;
                      const isDone = completedChecklistIds.includes(itemId);

                      return (
                        <button
                          key={itemIdx}
                          onClick={() => toggleRoadmapChecklistItem(itemId)}
                          className={`p-3 rounded-lg border text-left transition-all flex items-start gap-2.5 cursor-pointer ${
                            isDone
                              ? 'bg-emerald-50/60 border-emerald-300 text-slate-700'
                              : 'bg-slate-50/60 hover:bg-white border-slate-200 text-slate-800 hover:border-indigo-300'
                          }`}
                        >
                          {isDone ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          ) : (
                            <Circle className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                          )}
                          <span className={`text-xs leading-relaxed ${isDone ? 'line-through text-slate-400' : 'font-medium'}`}>
                            {item}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Fresher Tip Callout */}
                <div className="mt-4 p-3 rounded-lg bg-amber-50/60 border border-amber-200/70 flex items-start gap-2 text-xs text-amber-900 leading-relaxed">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-semibold">Recruiter Insight:</strong> {step.fresherTips}
                  </span>
                </div>
              </div>

              {/* Downward indicator between cards */}
              {idx < role.roadmap.length - 1 && (
                <div className="py-2 flex justify-center">
                  <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 text-slate-400 flex items-center justify-center">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Educational Notice Banner */}
      <DisclaimerBanner />
    </div>
  );
};
