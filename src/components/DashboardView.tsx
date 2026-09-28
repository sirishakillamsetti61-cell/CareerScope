import React, { useState, useMemo } from 'react';
import { 
  Bookmark, 
  Briefcase, 
  Building2, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  User, 
  LogOut, 
  ArrowRight, 
  Plus, 
  ExternalLink,
  Trash2,
  TrendingUp,
  Settings,
  Layers
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { ALL_COMPANIES } from '../data/companies';
import { ALL_ROLES } from '../data/roles';
import { CompanyLogo } from './CompanyLogo';
import { DisclaimerBanner } from './DisclaimerBanner';

interface DashboardViewProps {
  onSelectCompany: (companyId: string) => void;
  onSelectRole: (roleId: string) => void;
  onOpenRoadmap: (roleId: string) => void;
  onOpenAuth: () => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  onSelectCompany,
  onSelectRole,
  onOpenRoadmap,
  onOpenAuth
}) => {
  const {
    isAuthenticated,
    user,
    logout,
    savedCompanyIds,
    toggleSaveCompany,
    savedRoleIds,
    toggleSaveRole,
    savedSkills,
    toggleSaveSkill,
    updateSkillStatus,
    recentlyViewedRoleIds,
    completedChecklistIds,
    updateProfile
  } = useAuth();

  const [skillFilter, setSkillFilter] = useState<'All' | 'To Learn' | 'In Progress' | 'Mastered'>('All');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profileName, setProfileName] = useState(user?.name || '');
  const [profileRole, setProfileRole] = useState(user?.targetRole || 'Software Engineer');
  const [profileExp, setProfileExp] = useState(user?.experienceLevel || 'Student');

  // Hydrate saved companies
  const savedCompanies = useMemo(() => {
    return ALL_COMPANIES.filter(c => savedCompanyIds.includes(c.id));
  }, [savedCompanyIds]);

  // Hydrate saved roles
  const savedRoles = useMemo(() => {
    return ALL_ROLES.filter(r => savedRoleIds.includes(r.id));
  }, [savedRoleIds]);

  // Hydrate recently viewed roles
  const recentRoles = useMemo(() => {
    return recentlyViewedRoleIds
      .map(id => ALL_ROLES.find(r => r.id === id))
      .filter(Boolean) as typeof ALL_ROLES;
  }, [recentlyViewedRoleIds]);

  // Filtered skills
  const filteredSkills = useMemo(() => {
    if (skillFilter === 'All') return savedSkills;
    return savedSkills.filter(s => s.status === skillFilter);
  }, [savedSkills, skillFilter]);

  // Recommended Skills to Learn:
  // Derived from user's target role or saved roles that are not yet in savedSkills
  const recommendedSkills = useMemo(() => {
    const relevantRoles = savedRoles.length > 0 ? savedRoles : ALL_ROLES.slice(0, 3);
    const existingSkillNames = new Set(savedSkills.map(s => s.skillName.toLowerCase()));

    const candidates: string[] = [];
    relevantRoles.forEach(r => {
      r.technicalSkills.forEach(skill => {
        if (!existingSkillNames.has(skill.toLowerCase()) && !candidates.includes(skill)) {
          candidates.push(skill);
        }
      });
    });

    return candidates.slice(0, 6);
  }, [savedRoles, savedSkills]);

  // If not logged in, show prompt to sign in or explore as guest
  if (!isAuthenticated || !user) {
    return (
      <div className="max-w-2xl mx-auto py-16 text-center bg-white border border-slate-200 rounded-2xl p-8 shadow-xs space-y-4">
        <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
          <User className="w-6 h-6" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Sign In to Access Your Career Dashboard
        </h2>
        <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          Save companies, track job roles, maintain your personalized skill roadmap, and review recommended learning milestones.
        </p>
        <div className="pt-2">
          <button
            onClick={onOpenAuth}
            className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer shadow-xs inline-flex items-center gap-2"
          >
            <span>Sign In / Create Account</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({
      name: profileName,
      targetRole: profileRole,
      experienceLevel: profileExp as any
    });
    setIsEditingProfile(false);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      
      {/* Profile Header Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white font-extrabold text-xl flex items-center justify-center shadow-xs">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  {user.name}
                </h1>
                <span className="text-xs font-mono font-medium text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded">
                  {user.experienceLevel}
                </span>
              </div>
              <div className="text-xs text-slate-500 mt-1 flex flex-wrap items-center gap-2">
                <span>Target: <strong className="text-slate-800 font-semibold">{user.targetRole}</strong></span>
                <span aria-hidden="true">·</span>
                <span>{user.email}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => {
                setProfileName(user.name);
                setProfileRole(user.targetRole);
                setProfileExp(user.experienceLevel);
                setIsEditingProfile(true);
              }}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Edit Profile</span>
            </button>
            <button
              onClick={logout}
              className="px-3.5 py-1.5 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Profile Edit Drawer/Modal */}
        {isEditingProfile && (
          <form onSubmit={handleSaveProfile} className="mt-6 pt-6 border-t border-slate-100 p-4 bg-slate-50 rounded-xl space-y-4">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Update Profile Preferences
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={profileName}
                  onChange={e => setProfileName(e.target.value)}
                  className="w-full text-xs p-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-600"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Target Career Role
                </label>
                <input
                  type="text"
                  value={profileRole}
                  onChange={e => setProfileRole(e.target.value)}
                  className="w-full text-xs p-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-600"
                />
              </div>
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                  Experience Stage
                </label>
                <select
                  value={profileExp}
                  onChange={e => setProfileExp(e.target.value as any)}
                  className="w-full text-xs p-2 bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-indigo-600"
                >
                  <option value="Student">Student</option>
                  <option value="Fresher (0-1 yrs)">Fresher (0-1 yrs)</option>
                  <option value="Early Career (1-3 yrs)">Early Career (1-3 yrs)</option>
                  <option value="Career Switcher">Career Switcher</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsEditingProfile(false)}
                className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </form>
        )}

        {/* Metric Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-100">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <div className="text-[11px] font-semibold text-slate-500">Saved Companies</div>
            <div className="text-xl font-bold text-slate-900 font-mono mt-0.5">
              {savedCompanyIds.length}
            </div>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <div className="text-[11px] font-semibold text-slate-500">Target Roles</div>
            <div className="text-xl font-bold text-slate-900 font-mono mt-0.5">
              {savedRoleIds.length}
            </div>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <div className="text-[11px] font-semibold text-slate-500">Skills Tracked</div>
            <div className="text-xl font-bold text-slate-900 font-mono mt-0.5">
              {savedSkills.length}
            </div>
          </div>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <div className="text-[11px] font-semibold text-slate-500">Milestones Done</div>
            <div className="text-xl font-bold text-indigo-600 font-mono mt-0.5">
              {completedChecklistIds.length}
            </div>
          </div>
        </div>
      </div>

      {/* Grid: Favorite Companies & Favorite Roles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Favorite Companies */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-indigo-600" />
                <h2 className="text-base font-bold text-slate-900">Favorite Companies</h2>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {savedCompanies.length} saved
              </span>
            </div>

            {savedCompanies.length === 0 ? (
              <div className="py-10 text-center text-xs text-slate-500">
                You haven't saved any companies yet. Click the bookmark icon on any company to pin it here.
              </div>
            ) : (
              <div className="space-y-2 mt-4">
                {savedCompanies.map(c => (
                  <div
                    key={c.id}
                    className="p-3 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/20 transition-all flex items-center justify-between group"
                  >
                    <button
                      onClick={() => onSelectCompany(c.id)}
                      className="flex items-center gap-3 text-left cursor-pointer flex-1 min-w-0"
                    >
                      <CompanyLogo id={c.id} name={c.name} brandColor={c.brandColor} size="sm" />
                      <div className="truncate">
                        <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 truncate">
                          {c.name}
                        </div>
                        <div className="text-[11px] text-slate-500 truncate">
                          {c.industry} · {c.departments.length} Depts
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => toggleSaveCompany(c.id)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 rounded-md cursor-pointer transition-colors"
                      title="Remove from favorites"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Favorite Roles */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-indigo-600" />
                <h2 className="text-base font-bold text-slate-900">Favorite Roles</h2>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {savedRoles.length} saved
              </span>
            </div>

            {savedRoles.length === 0 ? (
              <div className="py-10 text-center text-xs text-slate-500">
                You haven't bookmarked any job roles yet. Save roles to track their blueprints.
              </div>
            ) : (
              <div className="space-y-2 mt-4">
                {savedRoles.map(r => (
                  <div
                    key={r.id}
                    className="p-3 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/20 transition-all flex items-center justify-between group"
                  >
                    <button
                      onClick={() => onSelectRole(r.id)}
                      className="text-left cursor-pointer flex-1 min-w-0 pr-2"
                    >
                      <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 truncate">
                        {r.title}
                      </div>
                      <div className="text-[11px] text-slate-500 truncate">
                        {r.departmentName} · {r.roadmap.length} Roadmap Stages
                      </div>
                    </button>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => onOpenRoadmap(r.id)}
                        className="text-[11px] font-semibold text-indigo-600 hover:underline px-2 py-1 cursor-pointer"
                      >
                        Roadmap →
                      </button>
                      <button
                        onClick={() => toggleSaveRole(r.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-600 rounded-md cursor-pointer transition-colors"
                        title="Remove role"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>

      {/* SAVED SKILLS TRACKER */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <h2 className="text-lg font-bold text-slate-900">
                My Skills Tracker & Progression
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Organize your technical & soft skills into To Learn, In Progress, and Mastered.
            </p>
          </div>

          {/* Status filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg self-start sm:self-auto">
            {(['All', 'To Learn', 'In Progress', 'Mastered'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setSkillFilter(tab)}
                className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  skillFilter === tab
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Skill list */}
        {filteredSkills.length === 0 ? (
          <div className="py-8 text-center text-xs text-slate-500">
            No skills found under "{skillFilter}". Add skills from any role's required skills section or from recommendations below.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredSkills.map(skill => (
              <div
                key={skill.skillName}
                className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      {skill.skillName}
                    </h4>
                    <span className="text-[10px] font-mono text-slate-500">
                      Level: {skill.level}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleSaveSkill(skill.skillName)}
                    className="text-slate-400 hover:text-rose-600 p-1 cursor-pointer"
                    title="Remove skill"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Status Toggle Selector */}
                <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[10px] text-slate-400 font-semibold uppercase">Status:</span>
                  <select
                    value={skill.status}
                    onChange={e => updateSkillStatus(skill.skillName, e.target.value as any)}
                    className="text-[11px] font-semibold bg-white border border-slate-200 rounded px-2 py-0.5 text-slate-700 cursor-pointer focus:outline-none"
                  >
                    <option value="To Learn">To Learn</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Mastered">Mastered</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Recommended Skills to Learn */}
        {recommendedSkills.length > 0 && (
          <div className="mt-6 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
              <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />
              <span>Recommended Skills to Learn (Based on Your Saved Roles)</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {recommendedSkills.map(skill => (
                <button
                  key={skill}
                  onClick={() => toggleSaveSkill(skill, 'Beginner')}
                  className="px-3 py-1.5 bg-white hover:bg-indigo-50 hover:text-indigo-600 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                >
                  <Plus className="w-3 h-3 text-indigo-600" />
                  <span>{skill}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* RECENTLY VIEWED ROLES */}
      {recentRoles.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-indigo-600" />
              <h2 className="text-base font-bold text-slate-900">Recently Viewed Roles</h2>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              {recentRoles.length} history items
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {recentRoles.map(role => (
              <button
                key={role.id}
                onClick={() => onSelectRole(role.id)}
                className="p-3 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/20 text-left transition-all cursor-pointer group"
              >
                <div className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 truncate">
                  {role.title}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 truncate">
                  {role.departmentName}
                </div>
                <div className="mt-2 text-[10px] font-semibold text-indigo-600 flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Educational Notice Banner */}
      <DisclaimerBanner />
    </div>
  );
};
