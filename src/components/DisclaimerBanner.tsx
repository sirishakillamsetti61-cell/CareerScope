import React from 'react';
import { Info } from 'lucide-react';

export const DisclaimerBanner: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`p-4 bg-slate-100/80 border border-slate-200/90 rounded-xl text-xs text-slate-600 ${className}`}>
      <div className="flex items-start gap-2.5">
        <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-semibold text-slate-800">
            Educational Career Guidance Notice:
          </span>{' '}
          All company, department, and role data is structured as general educational guidance to help students, freshers, and job seekers understand industry landscapes. Exact job descriptions, technical stacks, required qualifications, and interview processes vary by company branch, hiring team, seniority, and specific job requisition.
        </div>
      </div>
    </div>
  );
};
