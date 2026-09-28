export type Industry = 
  | 'Technology'
  | 'Consulting'
  | 'Banking & Finance'
  | 'E-commerce'
  | 'Healthcare'
  | 'Automotive'
  | 'Telecommunications'
  | 'Manufacturing'
  | 'Media'
  | 'Education';

export interface SkillProgression {
  skillName: string;
  category: 'Technical' | 'Soft' | 'Tool';
  beginner: string;
  intermediate: string;
  advanced: string;
}

export interface RoadmapStep {
  id: string;
  stepNumber: number;
  title: string;
  shortDesc: string;
  description: string;
  checklist: string[];
  estimatedDuration: string;
  fresherTips: string;
}

export interface RoleDetail {
  id: string;
  title: string;
  category: string;
  departmentId: string;
  departmentName: string;
  simpleExplanation: string;
  responsibilities: string[];
  technicalSkills: string[];
  softSkills: string[];
  toolsAndPlatforms: string[];
  skillProgressions: SkillProgression[];
  careerProgression: {
    level: string;
    experience: string;
    focus: string;
  }[];
  roadmap: RoadmapStep[];
  hiringCompanies: string[]; // Company IDs
  averageFresherSalaryGuide: string;
  dayInTheLife: string;
}

export interface DepartmentInfo {
  id: string;
  name: string;
  description: string;
  commonRoles: string[]; // Role IDs
  keySkills: string[];
}

export interface Company {
  id: string;
  name: string;
  industry: Industry;
  headquarters: string;
  description: string;
  brandColor: string;
  accentBg: string;
  logoSvg: string; // SVG path or identifier
  departments: DepartmentInfo[];
  hiringFocusFresher: string;
  techStackHighlights: string[];
  websiteUrl: string;
  rolesAvailableCount: number;
}

export interface UserSavedData {
  savedCompanyIds: string[];
  savedRoleIds: string[];
  savedSkillIds: {
    skillName: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    status: 'To Learn' | 'In Progress' | 'Mastered';
  }[];
  recentlyViewedRoles: string[];
  completedRoadmapChecklistIds: string[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  experienceLevel: 'Student' | 'Fresher (0-1 yrs)' | 'Early Career (1-3 yrs)' | 'Career Switcher';
  targetIndustry: Industry;
  targetRole: string;
  dreamCompanies: string[];
}
