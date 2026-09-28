import React, { useState, useMemo } from 'react';
import { Search, Bookmark, BookmarkCheck, ArrowRight, Building2, Filter } from 'lucide-react';
import { ALL_COMPANIES, INDUSTRIES } from '../data/companies';
import { Industry, Company } from '../types';
import { CompanyLogo } from './CompanyLogo';
import { useAuth } from '../context/AuthContext';
import { DisclaimerBanner } from './DisclaimerBanner';

interface CompanyDirectoryProps {
  onSelectCompany: (companyId: string) => void;
  onExploreRole?: (roleId: string) => void;
}

export const CompanyDirectory: React.FC<CompanyDirectoryProps> = ({
  onSelectCompany
}) => {
  const { savedCompanyIds, toggleSaveCompany } = useAuth();
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCompanies = useMemo(() => {
    return ALL_COMPANIES.filter(company => {
      const matchesIndustry =
        selectedIndustry === 'all' || company.industry === selectedIndustry;
      const matchesSearch =
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.departments.some(d =>
          d.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesIndustry && matchesSearch;
    });
  }, [selectedIndustry, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Header and intro */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Company Directory
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Discover real companies hiring across 10 global industries. Explore their organizational structure, departments, common entry-level roles, and in-demand skills.
            </p>
          </div>
          <div className="text-xs font-mono text-slate-500 bg-white border border-slate-200 px-3 py-1.5 rounded-lg shrink-0 self-start md:self-auto">
            Showing <span className="font-bold text-slate-900">{filteredCompanies.length}</span> of {ALL_COMPANIES.length} companies
          </div>
        </div>

        {/* Search bar inside directory */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search companies by name, department, or keywords (e.g. Google, Cloud, Audit)..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 shadow-2xs placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Industry Filter Tabs (Interactive Segmented Buttons) */}
        <div className="mt-4 flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin">
          <button
            onClick={() => setSelectedIndustry('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
              selectedIndustry === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            All Industries ({ALL_COMPANIES.length})
          </button>
          {INDUSTRIES.map(industry => {
            const count = ALL_COMPANIES.filter(c => c.industry === industry).length;
            if (count === 0) return null;
            return (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                  selectedIndustry === industry
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 border border-slate-200 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {industry} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Company Cards */}
      {filteredCompanies.length === 0 ? (
        <div className="py-16 text-center bg-white rounded-xl border border-slate-200">
          <Building2 className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-slate-800">No companies found</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            We couldn't find any companies matching your current industry and search query. Try resetting your filter.
          </p>
          <button
            onClick={() => {
              setSelectedIndustry('all');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 text-xs font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors cursor-pointer"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCompanies.map(company => {
            const isSaved = savedCompanyIds.includes(company.id);

            return (
              <div
                key={company.id}
                className="bg-white border border-slate-200/90 rounded-xl p-5 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between group relative"
              >
                {/* Top Row: Logo, Name, Industry, and Bookmark */}
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <CompanyLogo
                        id={company.id}
                        name={company.name}
                        brandColor={company.brandColor}
                        size="md"
                      />
                      <div>
                        <h2 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {company.name}
                        </h2>
                        {/* Zero-pill metadata */}
                        <div className="flex items-center gap-1.5 text-xs text-slate-500">
                          <span>{company.industry}</span>
                          <span aria-hidden="true">·</span>
                          <span>{company.departments.length} Departments</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={e => {
                        e.stopPropagation();
                        toggleSaveCompany(company.id);
                      }}
                      className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                        isSaved
                          ? 'bg-amber-50 border-amber-200 text-amber-600'
                          : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                      }`}
                      title={isSaved ? 'Remove from saved' : 'Save company'}
                    >
                      {isSaved ? (
                        <BookmarkCheck className="w-4 h-4" />
                      ) : (
                        <Bookmark className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">
                    {company.description}
                  </p>

                  {/* Departments preview list */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Key Departments
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {company.departments.slice(0, 4).map(d => (
                        <span
                          key={d.id}
                          className="text-[11px] text-slate-700 bg-slate-100/90 px-2 py-0.5 rounded text-left font-medium"
                        >
                          {d.name}
                        </span>
                      ))}
                      {company.departments.length > 4 && (
                        <span className="text-[11px] text-slate-400 px-1 py-0.5">
                          +{company.departments.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-[11px] text-slate-400 truncate max-w-[170px]">
                    HQ: {company.headquarters.split(',')[0]}
                  </div>

                  <button
                    onClick={() => onSelectCompany(company.id)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 group-hover:text-indigo-700 cursor-pointer"
                  >
                    <span>Explore Structure</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Educational Notice Banner */}
      <DisclaimerBanner />
    </div>
  );
};
