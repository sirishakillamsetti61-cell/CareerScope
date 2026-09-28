/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { Navbar, NavTab } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { AuthModal } from './components/AuthModal';
import { HomeHero } from './components/HomeHero';
import { CompanyDirectory } from './components/CompanyDirectory';
import { CompanyDetailView } from './components/CompanyDetailView';
import { RoleDetailView } from './components/RoleDetailView';
import { CompanyRoleExplorer } from './components/CompanyRoleExplorer';
import { RoleComparator } from './components/RoleComparator';
import { RoadmapExplorer } from './components/RoadmapExplorer';
import { DashboardView } from './components/DashboardView';
import { getCompanyById } from './data/companies';
import { getRoleById } from './data/roles';

function MainApp() {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Selected company and role views
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(null);
  const [selectedRoleId, setSelectedRoleId] = useState<string | null>(null);

  // Compare role state
  const [comparatorRoleA, setComparatorRoleA] = useState<string>('software-engineer');
  const [comparatorRoleB, setComparatorRoleB] = useState<string>('data-analyst');

  // Roadmap selected role
  const [roadmapRoleId, setRoadmapRoleId] = useState<string>('software-engineer');

  const { recordRoleView } = useAuth();

  // Navigation handlers
  const handleSelectCompany = (companyId: string) => {
    setSelectedCompanyId(companyId);
    setSelectedRoleId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectRole = (roleId: string) => {
    setSelectedRoleId(roleId);
    setSelectedCompanyId(null);
    recordRoleView(roleId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRoadmap = (roleId: string) => {
    setRoadmapRoleId(roleId);
    setActiveTab('roadmaps');
    setSelectedCompanyId(null);
    setSelectedRoleId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCompareWith = (roleId: string) => {
    setComparatorRoleA(roleId);
    setComparatorRoleB(roleId === 'software-engineer' ? 'data-analyst' : 'software-engineer');
    setActiveTab('compare');
    setSelectedCompanyId(null);
    setSelectedRoleId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    setSelectedCompanyId(null);
    setSelectedRoleId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* 3-Zone Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAuth={() => setIsAuthOpen(true)}
      />

      {/* Main Viewport Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* If a Company is currently selected, render Company Detail Page */}
        {selectedCompanyId ? (
          <CompanyDetailView
            company={getCompanyById(selectedCompanyId)!}
            onBack={() => setSelectedCompanyId(null)}
            onSelectRole={handleSelectRole}
          />
        ) : selectedRoleId ? (
          /* If a Role is currently selected, render Role Detail Page */
          <RoleDetailView
            role={getRoleById(selectedRoleId)!}
            onBack={() => setSelectedRoleId(null)}
            onSelectCompany={handleSelectCompany}
            onCompareWith={handleCompareWith}
          />
        ) : (
          /* Otherwise render based on current active tab */
          <>
            {activeTab === 'home' && (
              <HomeHero
                onOpenSearch={() => setIsSearchOpen(true)}
                onExploreCompanies={() => handleTabChange('companies')}
                onExploreRoleExplorer={() => handleTabChange('explorer')}
                onExploreCompare={() => handleTabChange('compare')}
                onExploreRoadmaps={() => handleTabChange('roadmaps')}
                onSelectCompany={handleSelectCompany}
                onSelectRole={handleSelectRole}
              />
            )}

            {activeTab === 'companies' && (
              <CompanyDirectory
                onSelectCompany={handleSelectCompany}
                onExploreRole={handleSelectRole}
              />
            )}

            {activeTab === 'explorer' && (
              <CompanyRoleExplorer
                onSelectCompanyFull={handleSelectCompany}
                onSelectRoleFull={handleSelectRole}
              />
            )}

            {activeTab === 'compare' && (
              <RoleComparator
                initialRoleAId={comparatorRoleA}
                initialRoleBId={comparatorRoleB}
                onSelectRole={handleSelectRole}
                onSelectCompany={handleSelectCompany}
              />
            )}

            {activeTab === 'roadmaps' && (
              <RoadmapExplorer
                initialRoleId={roadmapRoleId}
                onSelectRole={handleSelectRole}
              />
            )}

            {activeTab === 'dashboard' && (
              <DashboardView
                onSelectCompany={handleSelectCompany}
                onSelectRole={handleSelectRole}
                onOpenRoadmap={handleOpenRoadmap}
                onOpenAuth={() => setIsAuthOpen(true)}
              />
            )}
          </>
        )}

      </main>

      {/* Footer */}
      <Footer setActiveTab={handleTabChange} />

      {/* Search Modal (Ctrl/Cmd + K) */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCompany={handleSelectCompany}
        onSelectRole={handleSelectRole}
      />

      {/* Auth Modal (Login / Signup / Forgot Password) */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}
