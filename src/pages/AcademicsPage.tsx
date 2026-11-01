import React, { useState } from 'react';
import { Program, NavTab } from '../types.ts';
import { INITIAL_PROGRAMS } from '../data/mockData.ts';
import { 
  ArrowRight, 
  Sparkles, 
  Clock, 
  GraduationCap, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Award,
  Layers,
  ChevronRight
} from 'lucide-react';

interface AcademicsPageProps {
  onOpenSyllabus: (program: Program) => void;
  onNavigateTab: (tab: NavTab) => void;
}

export const AcademicsPage: React.FC<AcademicsPageProps> = ({
  onOpenSyllabus,
  onNavigateTab
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All Programs');

  const filterTabs = [
    'All Programs',
    'Engineering & AI',
    'Design & Media',
    'Humanities & Social Sciences',
    'Business & Analytics'
  ];

  const filteredPrograms = INITIAL_PROGRAMS.filter(program => {
    if (selectedFilter === 'All Programs') return true;
    return program.deptCategory === selectedFilter;
  });

  // Abstract SVG wireframe icon renderer matching the designs
  const renderWireframeGraphic = (programId: string) => {
    switch (programId) {
      case 'cs-ai':
        return (
          <svg className="w-24 h-24 text-blue-400/80 stroke-current" viewBox="0 0 100 100" fill="none" strokeWidth="1.5">
            <circle cx="50" cy="50" r="16" />
            <circle cx="50" cy="18" r="6" />
            <circle cx="50" cy="82" r="6" />
            <circle cx="18" cy="50" r="6" />
            <circle cx="82" cy="50" r="6" />
            <line x1="50" y1="34" x2="50" y2="24" />
            <line x1="50" y1="66" x2="50" y2="76" />
            <line x1="34" y1="50" x2="24" y2="50" />
            <line x1="66" y1="50" x2="76" y2="50" />
            <circle cx="50" cy="50" r="4" fill="currentColor" />
          </svg>
        );
      case 'arch-sust':
        return (
          <svg className="w-24 h-24 text-cyan-400/80 stroke-current" viewBox="0 0 100 100" fill="none" strokeWidth="1.5">
            <polygon points="50,15 85,80 15,80" />
            <polygon points="50,35 72,75 28,75" strokeDasharray="2,2" />
            <line x1="50" y1="15" x2="50" y2="80" />
            <circle cx="50" cy="55" r="5" />
          </svg>
        );
      case 'des-ia':
        return (
          <svg className="w-24 h-24 text-purple-400/80 stroke-current" viewBox="0 0 100 100" fill="none" strokeWidth="1.5">
            <rect x="25" y="25" width="50" height="50" rx="14" />
            <circle cx="50" cy="50" r="18" />
            <circle cx="50" cy="50" r="6" fill="currentColor" />
          </svg>
        );
      case 'mba-tech':
        return (
          <svg className="w-24 h-24 text-indigo-400/80 stroke-current" viewBox="0 0 100 100" fill="none" strokeWidth="1.5">
            <circle cx="50" cy="50" r="32" />
            <ellipse cx="50" cy="50" rx="32" ry="12" />
            <ellipse cx="50" cy="50" rx="12" ry="32" />
          </svg>
        );
      case 'bio-eng':
        return (
          <svg className="w-24 h-24 text-emerald-400/80 stroke-current" viewBox="0 0 100 100" fill="none" strokeWidth="1.5">
            <path d="M 30,20 Q 50,50 70,20" />
            <path d="M 70,80 Q 50,50 30,80" />
            <line x1="38" y1="35" x2="62" y2="35" />
            <line x1="38" y1="65" x2="62" y2="65" />
            <line x1="50" y1="20" x2="50" y2="80" strokeDasharray="3,3" />
          </svg>
        );
      default:
        return (
          <svg className="w-24 h-24 text-indigo-400/80 stroke-current" viewBox="0 0 100 100" fill="none" strokeWidth="1.5">
            <circle cx="50" cy="40" r="18" />
            <path d="M 35,75 Q 50,55 65,75" />
            <circle cx="50" cy="40" r="4" fill="currentColor" />
          </svg>
        );
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* 1. HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200">
          • Curricular Matrix • Academic Year 2025–2026
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          World-Class Academic Programs <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600">
            Designed for Impact
          </span>
        </h1>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Luminary Institute integrates transdisciplinary theory with rigorous research-driven practicums. Every pathway empowers pioneering minds to sculpt emerging technologies, ethical systems, and regenerative environments.
        </p>
      </div>

      {/* 2. FILTER PILLS */}
      <div className="flex justify-center">
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-100/90 rounded-full max-w-full">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedFilter === tab
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* 3. 6 PROGRAM CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPrograms.map((program) => (
          <div
            key={program.id}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
          >
            {/* Top Wireframe / Graphic Panel */}
            <div className="h-48 bg-gradient-to-b from-slate-50 to-indigo-50/40 p-4 flex flex-col justify-between relative border-b border-slate-100">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white shadow-xs text-purple-700 border border-purple-100">
                  {program.degreeLevel.split(' ')[0]}
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/80 text-slate-600 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400" />
                  {program.duration}
                </span>
              </div>

              {/* Centered abstract wireframe */}
              <div className="flex items-center justify-center py-2 group-hover:scale-105 transition-transform duration-300">
                {renderWireframeGraphic(program.id)}
              </div>

              <div className="text-right">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {program.school.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Bottom Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {program.title}
                </h3>

                <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                  {program.description}
                </p>
              </div>

              <div>
                {/* Core Focus Areas */}
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  CORE FOCUS AREAS
                </div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {program.coreFocusAreas.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-slate-100 text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Explore Program CTA */}
                <button
                  onClick={() => onOpenSyllabus(program)}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
                >
                  <span>Explore Program</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        ))}
      </div>

      {/* 4. INTERDISCIPLINARY LAB CO-ENROLLMENT STATS BANNER */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-base">Interdisciplinary Lab Co-Enrollment</h4>
            <p className="text-xs text-slate-500 mt-0.5">
              92% of students engage concurrently across computational and humanist labs.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-8 text-right shrink-0">
          <div>
            <div className="text-2xl font-extrabold text-slate-900">1:7</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase">Faculty-to-Fellow Ratio</div>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-blue-600">88.4%</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase">Funded Capstones</div>
          </div>
        </div>
      </div>

      {/* 5. READY TO SHAPE THE FUTURE OF INQUIRY CTA */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-lg space-y-6">
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              <Clock className="w-3.5 h-3.5" />
              <span>Priority Deadline: Fall 2025 Applications Close Dec 15th</span>
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Ready to Shape the Future of Inquiry?
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our admissions committee selects cohorts via holistic review, valuing creative portfolio rigor, computational ambition, and unconventional problem framing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Official Academic Transcripts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>2 Letters of Recommendation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Statement of Academic Purpose</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Technical / Creative Portfolio</span>
              </div>
            </div>
          </div>

          {/* Right Action & Cohort Capacity Progress */}
          <div className="lg:w-80 space-y-4 shrink-0">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-slate-600">Cohort Application Status</span>
                <span className="text-blue-600">Active Cycle</span>
              </div>
              <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full" style={{ width: '68%' }}></div>
              </div>
              <div className="text-[10px] text-slate-400 text-right">
                68% of capacity claimed
              </div>
            </div>

            <button
              onClick={() => onNavigateTab('contact')}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Start Your Application</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
