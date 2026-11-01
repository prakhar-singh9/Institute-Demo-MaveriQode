import React, { useState } from 'react';
import { CandidateApplication, AdminView } from '../../types.ts';
import { 
  Users, 
  FileText, 
  Sparkles, 
  TrendingUp, 
  Plus, 
  Share2, 
  Download, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  AlertCircle, 
  RefreshCw, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Server,
  Layers,
  X
} from 'lucide-react';

interface AdminDashboardPageProps {
  applications: CandidateApplication[];
  onOpenNewProgram: () => void;
  onNavigateAdmin: (view: AdminView) => void;
  onUpdateAppStatus: (appId: string, status: CandidateApplication['status']) => void;
}

export const AdminDashboardPage: React.FC<AdminDashboardPageProps> = ({
  applications,
  onOpenNewProgram,
  onNavigateAdmin,
  onUpdateAppStatus
}) => {
  const [selectedApp, setSelectedApp] = useState<CandidateApplication | null>(null);
  const [exportNotice, setExportNotice] = useState(false);

  const handleExportCSV = () => {
    setExportNotice(true);
    setTimeout(() => setExportNotice(false), 4000);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      
      {/* 1. HERO TITLE & ACTION ROW */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
              • Live Cycle: Fall Admissions Active
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-slate-500 bg-slate-100">
              Session ID: LUM-2025-Q3
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Academic Year 2025–2026 Overview
          </h1>

          <p className="text-xs text-slate-500 max-w-2xl leading-relaxed">
            Real-time institutional diagnostics, applicant cohort momentum, and departmental research capital distribution across global faculties.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenNewProgram}
            className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>New Program</span>
          </button>

          <button
            onClick={() => alert("Post Notice: Institutional broadcast dispatched to all faculty members.")}
            className="px-4 py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Post Notice</span>
          </button>

          <button
            onClick={handleExportCSV}
            className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-slate-400" />
            <span>CSV Export</span>
          </button>
        </div>

      </div>

      {exportNotice && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Exporting Luminary_Admissions_Fall_2025_Registries.csv (3,892 verified entries).</span>
        </div>
      )}

      {/* 2. FOUR METRIC CARDS WITH SPARKLINES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1: Enrolled Scholars */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              ENROLLED SCHOLARS
            </span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
              14,240
            </div>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-semibold text-blue-600">+6.4% YoY</span>
              {/* Visual mini sparkline curve */}
              <svg className="w-20 h-5 text-blue-500 stroke-current" fill="none" strokeWidth="2">
                <path d="M 0,15 Q 10,8 20,12 T 40,8 T 60,4 T 80,2" />
              </svg>
            </div>
          </div>
        </div>

        {/* Card 2: Fall 2025 Portfolios */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              FALL 2025 PORTFOLIOS
            </span>
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
              3,892
            </div>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-semibold text-purple-600">84% under review</span>
              <svg className="w-20 h-5 text-purple-500 stroke-current" fill="none" strokeWidth="2">
                <path d="M 0,18 Q 15,14 30,12 T 60,6 T 80,3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Card 3: Faculty & Chairs */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              FACULTY & CHAIRS
            </span>
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
              342
            </div>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-semibold text-indigo-600">94% retention</span>
              <svg className="w-20 h-5 text-indigo-500 stroke-current" fill="none" strokeWidth="2">
                <path d="M 0,10 Q 20,12 40,8 T 60,6 T 80,4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Card 4: Grant Endowments */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              GRANT ENDOWMENTS
            </span>
            <div className="w-8 h-8 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">
              $48.6M
            </div>
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-semibold text-cyan-600">12 active laboratories</span>
              <svg className="w-20 h-5 text-cyan-500 stroke-current" fill="none" strokeWidth="2">
                <path d="M 0,16 Q 20,10 40,12 T 60,4 T 80,1" />
              </svg>
            </div>
          </div>
        </div>

      </div>

      {/* 3. MIDDLE SECTION: FUNNEL & CANDIDACY SUBMISSIONS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Application Funnel & Compliance (4.5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Application Funnel */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Application Funnel</h3>
                <div className="text-[11px] text-slate-400">Breakdown across 5 major schools</div>
              </div>
              <button className="text-slate-400 hover:text-slate-600">
                •••
              </button>
            </div>

            {/* Target Capacity Box */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center justify-between">
              <div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">
                  Target Enrollment Capacity
                </div>
                <div className="text-2xl font-extrabold text-slate-900 mt-0.5">
                  4,200 seats
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200">
                92.6% Target Reached
              </span>
            </div>

            {/* Progress Bars for 5 Tracks */}
            <div className="space-y-3.5">
              
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-700">Computer Science & Intelligence</span>
                  <span className="text-blue-600">38% • 1,478</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full" style={{ width: '38%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-700">Sustainable Architecture & Urbanism</span>
                  <span className="text-purple-600">22% • 856</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-purple-600 h-full rounded-full" style={{ width: '22%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-700">Interaction Design & HCI</span>
                  <span className="text-indigo-600">18% • 701</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-full rounded-full" style={{ width: '18%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-700">Bio-Genomics & Medical Devices</span>
                  <span className="text-cyan-600">14% • 545</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-cyan-600 h-full rounded-full" style={{ width: '14%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-700">Executive Tech MBA</span>
                  <span className="text-slate-600">8% • 312</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-slate-400 h-full rounded-full" style={{ width: '8%' }}></div>
                </div>
              </div>

            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Median Admissions Processing Time</span>
              <span className="font-bold text-slate-800">3.8 Business Days</span>
            </div>

          </div>

          {/* Institutional Compliance Box */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-xs">Institutional Compliance</h4>
                <div className="text-[10px] text-slate-400 font-medium">ABET & Global Accreditation</div>
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-relaxed">
              Annual digital syllabus verification is 98.2% completed for Fall semester. 6 syllabi pending deanery signature.
            </p>

            <button
              onClick={() => onNavigateAdmin('programs')}
              className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer pt-1"
            >
              <span>Review Audit Queue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Right Column: Recent Candidacy Submissions (7.5 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-bold text-slate-900 text-base">Recent Candidacy Submissions</h3>
              <p className="text-xs text-slate-400">
                Prioritized candidate evaluations awaiting department review
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => alert("Filter applied: All Degree Tracks")}
                className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs text-slate-600 bg-slate-50 font-medium flex items-center gap-1.5 cursor-pointer"
              >
                <span>Filter: All Degrees</span>
              </button>
              <button
                onClick={() => alert("Refreshed candidate registry")}
                className="px-3 py-1.5 rounded-xl border border-slate-200 text-xs text-slate-600 bg-slate-50 font-medium flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3 text-slate-400" />
                <span>Refresh</span>
              </button>
            </div>
          </div>

          {/* Submissions Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  <th className="pb-3 font-semibold">Applicant Profile</th>
                  <th className="pb-3 font-semibold">Degree Track</th>
                  <th className="pb-3 font-semibold">Evaluation Metric</th>
                  <th className="pb-3 font-semibold">Logged</th>
                  <th className="pb-3 font-semibold text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {applications.map((app) => (
                  <tr 
                    key={app.id} 
                    className="hover:bg-slate-50/80 transition-colors cursor-pointer group"
                    onClick={() => setSelectedApp(app)}
                  >
                    
                    {/* Applicant Profile */}
                    <td className="py-3.5 pr-3">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={app.avatar}
                          alt={app.applicantName}
                          className="w-8 h-8 rounded-full object-cover shrink-0"
                        />
                        <div>
                          <div className="font-bold text-slate-900 group-hover:text-blue-600">
                            {app.applicantName}
                          </div>
                          <div className="text-[10px] font-mono text-slate-400">
                            ID: {app.applicationCode}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Degree Track */}
                    <td className="py-3.5 pr-3 text-slate-700 font-medium max-w-[150px] truncate">
                      {app.degreeTrack}
                    </td>

                    {/* Metric */}
                    <td className="py-3.5 pr-3 text-slate-600 font-semibold">
                      {app.evaluationMetric}
                    </td>

                    {/* Logged */}
                    <td className="py-3.5 pr-3 text-slate-400 whitespace-nowrap">
                      {app.loggedTime}
                    </td>

                    {/* Status Pill */}
                    <td className="py-3.5 text-right whitespace-nowrap">
                      <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        app.status === 'Approved'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : app.status === 'Interview Scheduled'
                          ? 'bg-purple-50 text-purple-700 border border-purple-200'
                          : app.status === 'Waitlist Tier 1'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-blue-50 text-blue-700 border border-blue-200'
                      }`}>
                        {app.status}
                      </span>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer Pagination */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Showing {applications.length} of 3,892 candidate files</span>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => alert("Already on page 1.")}
                className="px-3 py-1 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer"
              >
                Previous
              </button>
              <button 
                onClick={() => alert("Page 2: Loading archived applicants.")}
                className="px-3 py-1 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 cursor-pointer"
              >
                Next Page
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* 4. BOTTOM 2 STATUS CARDS: Reviews, Cluster */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Tenure & Faculty Reviews */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-900 text-sm">Tenure & Faculty Reviews</h4>
            <span className="w-6 h-6 rounded-full bg-rose-50 text-rose-600 text-xs font-bold flex items-center justify-center">
              3
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-900">Dr. Aris Thorne • CS Chair</span>
                <span className="text-[10px] text-rose-600 font-bold">Due in 2 days</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Full Professorship Tenure Committee Voting Dossier open for submission.
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-900">Prof. Sarah Lindqvist</span>
                <span className="text-[10px] text-slate-400">Due in 5 days</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Mid-career research assessment & robotics grant oversight report.
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
              <div className="flex justify-between items-center">
                <span className="font-bold text-slate-900">Visiting Fellow Onboarding</span>
                <span className="text-[10px] text-blue-600 font-bold">Oct 18</span>
              </div>
              <p className="text-[11px] text-slate-500">
                Credential verification for 4 Oxford-Luminary exchange researchers.
              </p>
            </div>
          </div>
        </div>

        {/* Cluster & CMS Status */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-slate-900 text-sm">Cluster & CMS Status</h4>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Operational
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">Admissions API Gateway</span>
              <span className="font-semibold text-slate-800">18ms latency</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">Student Portal Edge Cache</span>
              <span className="font-semibold text-slate-800">99.98% Hit Rate</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100">
              <span className="text-slate-500">High-Performance Compute Cluster</span>
              <span className="font-semibold text-blue-600">76% Allocated</span>
            </div>
          </div>

          <div className="pt-2">
            <div className="text-[10px] font-bold text-slate-400 uppercase mb-2">
              QUICK MANAGEMENT
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button 
                onClick={() => alert("Website CMS: Page draft editor opened.")}
                className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-left cursor-pointer"
              >
                ✏️ Edit Pages
              </button>
              <button 
                onClick={() => onNavigateAdmin('programs')}
                className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-left cursor-pointer"
              >
                🎓 Degree Tracks
              </button>
              <button 
                onClick={() => alert("Media CDN: 12,400 assets indexed.")}
                className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-left cursor-pointer"
              >
                🖼 Media Assets
              </button>
              <button 
                onClick={() => alert("Admit Rules: Holistic committee weighting configured.")}
                className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 text-left cursor-pointer"
              >
                ⚙️ Admit Rules
              </button>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span>Sync Engine v4.12 • Zurich Mainframe</span>
            <button 
              onClick={() => alert("Cache purged successfully.")}
              className="text-blue-600 font-semibold hover:underline"
            >
              Purge Cache
            </button>
          </div>
        </div>

      </div>

      {/* Candidate Application Detail Modal */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-6">
            <button
              onClick={() => setSelectedApp(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <img
                src={selectedApp.avatar}
                alt={selectedApp.applicantName}
                className="w-14 h-14 rounded-full object-cover border border-slate-200"
              />
              <div>
                <h3 className="text-xl font-bold text-slate-900">{selectedApp.applicantName}</h3>
                <div className="text-xs text-blue-600 font-mono">Registry: {selectedApp.applicationCode}</div>
                <div className="text-xs text-slate-400">{selectedApp.email}</div>
              </div>
            </div>

            <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Degree Track:</span>
                <span className="font-semibold text-slate-900">{selectedApp.degreeTrack}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Academic Department:</span>
                <span className="font-semibold text-slate-900">{selectedApp.department}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Evaluation Metric:</span>
                <span className="font-semibold text-slate-900">{selectedApp.evaluationMetric}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Logged Time:</span>
                <span className="font-semibold text-slate-900">{selectedApp.loggedTime}</span>
              </div>
              {selectedApp.notes && (
                <div className="pt-2 border-t border-slate-200 text-slate-600">
                  <span className="font-bold text-slate-700 block mb-0.5">Deanery Evaluation Note:</span>
                  {selectedApp.notes}
                </div>
              )}
            </div>

            {/* Quick Status Update */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">
                Update Admissions Committee Status
              </label>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {(['Interview Scheduled', 'Approved', 'Under Review', 'Waitlist Tier 1'] as const).map((status) => (
                  <button
                    key={status}
                    onClick={() => {
                      onUpdateAppStatus(selectedApp.id, status);
                      setSelectedApp({ ...selectedApp, status });
                    }}
                    className={`p-2.5 rounded-xl border text-left font-semibold transition-all cursor-pointer ${
                      selectedApp.status === status
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedApp(null)}
                className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold cursor-pointer"
              >
                Close Dossier
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
