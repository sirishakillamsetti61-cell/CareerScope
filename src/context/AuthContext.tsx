import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile } from '../types';

interface SavedSkill {
  skillName: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  status: 'To Learn' | 'In Progress' | 'Mastered';
  addedAt: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserProfile | null;
  savedCompanyIds: string[];
  savedRoleIds: string[];
  savedSkills: SavedSkill[];
  recentlyViewedRoleIds: string[];
  completedChecklistIds: string[];
  login: (email: string, pass: string) => boolean;
  loginAsDemo: (persona: 'fresher' | 'switcher') => void;
  signup: (name: string, email: string, experience: UserProfile['experienceLevel'], targetRole: string) => void;
  logout: () => void;
  toggleSaveCompany: (companyId: string) => void;
  toggleSaveRole: (roleId: string) => void;
  toggleSaveSkill: (skillName: string, level?: 'Beginner' | 'Intermediate' | 'Advanced') => void;
  updateSkillStatus: (skillName: string, status: 'To Learn' | 'In Progress' | 'Mastered') => void;
  recordRoleView: (roleId: string) => void;
  toggleRoadmapChecklistItem: (itemId: string) => void;
  updateProfile: (updates: Partial<UserProfile>) => void;
  resetPassword: (email: string) => Promise<boolean>;
}

const DEMO_USER_FRESHER: UserProfile = {
  id: 'usr_alex_chen',
  name: 'Alex Chen',
  email: 'alex.chen@university.edu',
  experienceLevel: 'Student',
  targetIndustry: 'Technology',
  targetRole: 'Software Engineer',
  dreamCompanies: ['google', 'microsoft', 'amazon', 'uber']
};

const DEMO_USER_SWITCHER: UserProfile = {
  id: 'usr_priya_sharma',
  name: 'Priya Sharma',
  email: 'priya.sharma@example.com',
  experienceLevel: 'Career Switcher',
  targetIndustry: 'Consulting',
  targetRole: 'Data Analyst',
  dreamCompanies: ['deloitte', 'ey', 'jpmorgan']
};

const INITIAL_SAVED_COMPANIES = ['google', 'deloitte', 'aws', 'jpmorgan'];
const INITIAL_SAVED_ROLES = ['software-engineer', 'data-analyst', 'cloud-engineer'];
const INITIAL_SAVED_SKILLS: SavedSkill[] = [
  { skillName: 'Data Structures & Algorithms', level: 'Beginner', status: 'In Progress', addedAt: '2026-09-15' },
  { skillName: 'Python (Syntax & OOP)', level: 'Intermediate', status: 'Mastered', addedAt: '2026-09-10' },
  { skillName: 'SQL (Joins & Window Functions)', level: 'Intermediate', status: 'In Progress', addedAt: '2026-09-18' },
  { skillName: 'System Design Basics', level: 'Beginner', status: 'To Learn', addedAt: '2026-09-20' }
];

const INITIAL_COMPLETED_CHECKLIST = ['se-1-0', 'se-1-1', 'da-1-0'];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('cs_auth') === 'true';
  });

  const [user, setUser] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('cs_user');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return DEMO_USER_FRESHER;
  });

  const [savedCompanyIds, setSavedCompanyIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('cs_saved_companies');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return INITIAL_SAVED_COMPANIES;
  });

  const [savedRoleIds, setSavedRoleIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('cs_saved_roles');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return INITIAL_SAVED_ROLES;
  });

  const [savedSkills, setSavedSkills] = useState<SavedSkill[]>(() => {
    const saved = localStorage.getItem('cs_saved_skills');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return INITIAL_SAVED_SKILLS;
  });

  const [recentlyViewedRoleIds, setRecentlyViewedRoleIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('cs_recent_roles');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return ['software-engineer', 'data-analyst', 'cloud-engineer', 'product-manager'];
  });

  const [completedChecklistIds, setCompletedChecklistIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('cs_checklist');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return INITIAL_COMPLETED_CHECKLIST;
  });

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('cs_auth', String(isAuthenticated));
    if (user) localStorage.setItem('cs_user', JSON.stringify(user));
    localStorage.setItem('cs_saved_companies', JSON.stringify(savedCompanyIds));
    localStorage.setItem('cs_saved_roles', JSON.stringify(savedRoleIds));
    localStorage.setItem('cs_saved_skills', JSON.stringify(savedSkills));
    localStorage.setItem('cs_recent_roles', JSON.stringify(recentlyViewedRoleIds));
    localStorage.setItem('cs_checklist', JSON.stringify(completedChecklistIds));
  }, [isAuthenticated, user, savedCompanyIds, savedRoleIds, savedSkills, recentlyViewedRoleIds, completedChecklistIds]);

  const login = (email: string, _pass: string) => {
    setIsAuthenticated(true);
    if (!user) {
      setUser({
        id: 'usr_' + Date.now(),
        name: email.split('@')[0],
        email,
        experienceLevel: 'Fresher (0-1 yrs)',
        targetIndustry: 'Technology',
        targetRole: 'Software Engineer',
        dreamCompanies: ['google', 'microsoft']
      });
    }
    return true;
  };

  const loginAsDemo = (persona: 'fresher' | 'switcher') => {
    setIsAuthenticated(true);
    if (persona === 'fresher') {
      setUser(DEMO_USER_FRESHER);
      setSavedCompanyIds(['google', 'amazon', 'uber', 'microsoft']);
      setSavedRoleIds(['software-engineer', 'cloud-engineer']);
    } else {
      setUser(DEMO_USER_SWITCHER);
      setSavedCompanyIds(['deloitte', 'ey', 'jpmorgan']);
      setSavedRoleIds(['data-analyst', 'technology-consultant']);
    }
  };

  const signup = (
    name: string,
    email: string,
    experienceLevel: UserProfile['experienceLevel'],
    targetRole: string
  ) => {
    const newUser: UserProfile = {
      id: 'usr_' + Date.now(),
      name,
      email,
      experienceLevel,
      targetIndustry: 'Technology',
      targetRole: targetRole || 'Software Engineer',
      dreamCompanies: ['google', 'microsoft']
    };
    setUser(newUser);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const toggleSaveCompany = (companyId: string) => {
    setSavedCompanyIds(prev =>
      prev.includes(companyId)
        ? prev.filter(id => id !== companyId)
        : [...prev, companyId]
    );
  };

  const toggleSaveRole = (roleId: string) => {
    setSavedRoleIds(prev =>
      prev.includes(roleId)
        ? prev.filter(id => id !== roleId)
        : [...prev, roleId]
    );
  };

  const toggleSaveSkill = (skillName: string, level: 'Beginner' | 'Intermediate' | 'Advanced' = 'Beginner') => {
    setSavedSkills(prev => {
      const exists = prev.find(s => s.skillName.toLowerCase() === skillName.toLowerCase());
      if (exists) {
        return prev.filter(s => s.skillName.toLowerCase() !== skillName.toLowerCase());
      } else {
        return [
          ...prev,
          {
            skillName,
            level,
            status: 'To Learn',
            addedAt: new Date().toISOString().split('T')[0]
          }
        ];
      }
    });
  };

  const updateSkillStatus = (skillName: string, status: 'To Learn' | 'In Progress' | 'Mastered') => {
    setSavedSkills(prev =>
      prev.map(s =>
        s.skillName.toLowerCase() === skillName.toLowerCase()
          ? { ...s, status }
          : s
      )
    );
  };

  const recordRoleView = (roleId: string) => {
    setRecentlyViewedRoleIds(prev => {
      const filtered = prev.filter(id => id !== roleId);
      return [roleId, ...filtered].slice(0, 8);
    });
  };

  const toggleRoadmapChecklistItem = (itemId: string) => {
    setCompletedChecklistIds(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const updateProfile = (updates: Partial<UserProfile>) => {
    setUser(prev => (prev ? { ...prev, ...updates } : null));
  };

  const resetPassword = async (_email: string): Promise<boolean> => {
    // Simulate real server reset email latency
    await new Promise(r => setTimeout(r, 600));
    return true;
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        savedCompanyIds,
        savedRoleIds,
        savedSkills,
        recentlyViewedRoleIds,
        completedChecklistIds,
        login,
        loginAsDemo,
        signup,
        logout,
        toggleSaveCompany,
        toggleSaveRole,
        toggleSaveSkill,
        updateSkillStatus,
        recordRoleView,
        toggleRoadmapChecklistItem,
        updateProfile,
        resetPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
