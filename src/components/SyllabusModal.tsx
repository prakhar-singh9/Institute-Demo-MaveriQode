import React from 'react';
import { Program } from '../types.ts';
import { X, CheckCircle, GraduationCap, Clock, Award, Users, ArrowRight } from 'lucide-react';

interface SyllabusModalProps {
  program: Program | null;
  onClose: () => void;
  onApply: (programId: string) => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  program,
  onClose,
  onApply
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-slate-100 overflow-hidden transform transition-all animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-500/30 text-blue-200 border border-blue-400/30">
              {program.code}
            </span>
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/10 text-slate-200">
              {program.degreeLevel}
            </span>
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {program.accreditation}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            {program.title}
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
            {program.description}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-white/10 text-xs">
            <div>
              <div className="text-slate-400">Duration</div>
              <div className="font-semibold text-white mt-0.5 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                {program.duration}
              </div>
            </div>
            <div>
              <div className="text-slate-400">Department</div>
              <div className="font-semibold text-white mt-0.5 flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                {program.department}
              </div>
            </div>
            <div>
              <div className="text-slate-400">Cohort Cap</div>
              <div className="font-semibold text-white mt-0.5 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-cyan-400" />
                {program.enrolled} / {program.cohortCapacity} ({program.fillRatePercent}%)
              </div>
            </div>
            <div>
              <div className="text-slate-400">Faculty Chair</div>
              <div className="font-semibold text-white mt-0.5 truncate">
                {program.facultyChair.name}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Body: Focus Areas & Curriculum Breakdown */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
          
          {/* Core Focus Tags */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Core Competencies & Lab Tracks
            </h4>
            <div className="flex flex-wrap gap-2">
              {program.coreFocusAreas.map((focus, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-medium border border-slate-200"
                >
                  {focus}
                </span>
              ))}
            </div>
          </div>

          {/* Curricular Modules */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Official Curricular Syllabus Breakdown
            </h4>
            <div className="space-y-4">
              {program.syllabusOverview.map((term, tIdx) => (
                <div key={tIdx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4">
                  <div className="font-semibold text-slate-900 text-sm mb-2.5 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">
                      {tIdx + 1}
                    </span>
                    {term.term}
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {term.courses.map((course, cIdx) => (
                      <li key={cIdx} className="flex items-start gap-2 bg-white px-3 py-2 rounded-xl border border-slate-100">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                        <span className="font-medium text-slate-700">{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-slate-100 bg-slate-50/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            Fall 2025 Admissions Cohort • Rolling Application Reviews
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-full text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors w-full sm:w-auto cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onApply(program.id);
              }}
              className="px-6 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-sm transition-all flex items-center justify-center gap-1.5 w-full sm:w-auto cursor-pointer"
            >
              <span>Apply for this Degree Track</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
