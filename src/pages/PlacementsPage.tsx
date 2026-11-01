import React, { useState } from 'react';
import { PLACEMENT_STORIES, SALARY_DATA } from '../data/mockData.ts';
import { 
  Download, 
  Briefcase, 
  TrendingUp, 
  CheckCircle2, 
  Award, 
  Building2, 
  Users, 
  Compass, 
  Calendar, 
  Mail, 
  Phone, 
  ChevronRight,
  ExternalLink,
  DollarSign,
  FileText,
  X
} from 'lucide-react';

export const PlacementsPage: React.FC = () => {
  const [selectedDeptKey, setSelectedDeptKey] = useState<string>('computing');
  const [showRecruiterModal, setShowRecruiterModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [recruiterSubmitted, setRecruiterSubmitted] = useState(false);

  const activeSalary = SALARY_DATA[selectedDeptKey] || SALARY_DATA['computing'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* 1. HERO SECTION & COHORT TRAJECTORY */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            • Career Outcomes & Corporate Relations • Class of 2024–2025
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Empowering Graduates to Lead Global Industry & Research
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Consistently ranked among the top global institutions for graduate employability, deep-tech research placement, and venture launch readiness.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => setShowReportModal(true)}
              className="px-5 py-3 rounded-full text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-sm flex items-center gap-2 cursor-pointer transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Employment Report 2024–25</span>
            </button>

            <button
              onClick={() => setShowRecruiterModal(true)}
              className="px-5 py-3 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-xs flex items-center gap-2 cursor-pointer transition-all"
            >
              <Briefcase className="w-3.5 h-3.5 text-slate-400" />
              <span>Hire from Luminary</span>
            </button>
          </div>

          <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>100% Verified Outcomes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-blue-600" />
              <span>QS Top 15 Employability</span>
            </div>
            <div className="flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-indigo-600" />
              <span>6-Month Track Record</span>
            </div>
          </div>
        </div>

        {/* Right Card: Career Destinations (5 cols) */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  CLASS COHORT TRAJECTORY
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  Career Destinations
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Live Metric
              </span>
            </div>

            {/* Trajectory Breakdown Rows */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-800">Deep-Tech & Frontier Software</span>
                  <span className="text-blue-600">46.2%</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full" style={{ width: '46.2%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-800">Bioengineering & Clinical Sciences</span>
                  <span className="text-purple-600">24.8%</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-purple-600 h-full rounded-full" style={{ width: '24.8%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-800">Quantitative Finance & Advisory</span>
                  <span className="text-indigo-600">17.5%</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-indigo-600 h-full rounded-full" style={{ width: '17.5%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-slate-800">Venture Incubation & Spin-Offs</span>
                  <span className="text-cyan-600">11.5%</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-cyan-600 h-full rounded-full" style={{ width: '11.5%' }}></div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                Audited by Global Registry
              </span>
              <button 
                onClick={() => alert("Audited by Bureau Veritas Academic Employment Registry under ISO 9001 standards.")}
                className="text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
              >
                Explore Methodologies ↗
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* 2. KEY INDICATORS: 4 MILESTONES */}
      <div>
        <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">
          KEY INDICATORS
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Exceptional Career Milestones
          </h2>
          <p className="text-xs text-slate-500 max-w-md">
            Measurable, resilient outcomes across multinational enterprises, elite research labs, and venture-backed accelerators.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                6 Mo. Window
              </span>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">98.4%</div>
            <div className="text-xs font-bold text-slate-800 mt-1">Placement & Fellowship</div>
            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
              Direct professional employment or prestigious doctoral appointments secured within six months of graduation.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <DollarSign className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                +14% YoY
              </span>
            </div>
            <div className="text-3xl font-extrabold text-purple-700 tracking-tight">$142,000</div>
            <div className="text-xs font-bold text-slate-800 mt-1">Average Base Starting Pay</div>
            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
              Industry leading starting compensation, excluding signing equity stipends and annual bonus allowances.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full">
                Peak Package
              </span>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">$285,000</div>
            <div className="text-xs font-bold text-slate-800 mt-1">Highest Recorded Offer</div>
            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
              Conferred in Autonomous Systems & Neural Hardware for an advanced research architect deployment.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full">
                Worldwide
              </span>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">450+</div>
            <div className="text-xs font-bold text-slate-800 mt-1">Global Recruiting Partners</div>
            <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
              Active enterprise and lab pipelines spanning 28 countries across North America, Europe, and the Asia-Pacific.
            </p>
          </div>

        </div>
      </div>

      {/* 3. EMPLOYER ECOSYSTEM: RECRUITED BY GROUNDBREAKING ORGANIZATIONS */}
      <div>
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">
            EMPLOYER ECOSYSTEM
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Recruited by Groundbreaking Organizations
          </h2>
          <p className="text-xs text-slate-500 mt-2">
            Our graduates are selected by premier organizations advancing computational science, deep biotechnology, systems infrastructure, and strategic design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Tech & AI */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                AI
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Tech & AI</h4>
                <div className="text-[10px] text-slate-400">Intelligent Systems</div>
              </div>
            </div>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center justify-between text-slate-700">
                <span className="font-semibold">Google DeepMind</span>
                <span className="text-[11px] text-slate-400">London / US</span>
              </li>
              <li className="flex items-center justify-between text-slate-700">
                <span className="font-semibold">Microsoft Research</span>
                <span className="text-[11px] text-slate-400">Redmond</span>
              </li>
              <li className="flex items-center justify-between text-slate-700">
                <span className="font-semibold">Apple</span>
                <span className="text-[11px] text-slate-400">Cupertino</span>
              </li>
              <li className="flex items-center justify-between text-slate-700">
                <span className="font-semibold">NVIDIA</span>
                <span className="text-[11px] text-slate-400">Santa Clara</span>
              </li>
              <li className="flex items-center justify-between text-slate-700">
                <span className="font-semibold">OpenAI</span>
                <span className="text-[11px] text-slate-400">San Francisco</span>
              </li>
            </ul>
          </div>

          {/* Biotech & Health */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xs">
                BIO
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Biotech & Health</h4>
                <div className="text-[10px] text-slate-400">Life Sciences</div>
              </div>
            </div>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center justify-between text-slate-700">
                <span className="font-semibold">Biogen</span>
                <span className="text-[11px] text-slate-400">Cambridge</span>
              </li>
              <li className="flex items-center justify-between text-slate-700">
                <span className="font-semibold">Moderna</span>
                <span className="text-[11px] text-slate-400">Boston</span>
              </li>
              <li className="flex items-center justify-between text-slate-700">
                <span className="font-semibold">Genentech</span>
                <span className="text-[11px] text-slate-400">S. San Francisco</span>
              </li>
              <li className="flex items-center justify-between text-slate-700">
                <span className="font-semibold">Illumina</span>
                <span className="text-[11px] text-slate-400">San Diego</span>
              </li>
              <li className="flex items-center justify-between text-slate-700">
                <span className="font-semibold">Vertex Pharma</span>
                <span className="text-[11px] text-slate-400">Boston</span>
              </li>
            </ul>
          </div>

          {/* Strategy & Finance */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xs">
                $$
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Strategy & Finance</h4>
                <div className="text-[10px] text-slate-400">Quantitative & Advisory</div>
              </div>
            </div>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center justify-between text-slate-700">
                <span className="font-semibold">McKinsey & Co.</span>
                <span className="text-[11px] text-slate-400">New York</span>
              </li>
              <li className="flex items-center justify-between text-slate-700">
                <span className="font-semibold">Goldman Sachs</span>
                <span className="text-[11px] text-slate-400">Global Hubs</span>
              </li>
              <li className="flex items-center justify-between text-slate-700">
                <span className="font-semibold">Bain & Company</span>
                <span className="text-[11px] text-slate-400">Boston</span>
              </li>
              <li className="flex items-center justify-between text-slate-700">
                <span className="font-semibold">Bridgewater</span>
                <span className="text-[11px] text-slate-400">Westport</span>
              </li>
              <li className="flex items-center justify-between text-slate-700">
                <span className="font-semibold">Jane Street</span>
                <span className="text-[11px] text-slate-400">New York</span>
              </li>
            </ul>
          </div>

          {/* Architecture & Eng */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <div className="w-8 h-8 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold text-xs">
                ARC
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm">Architecture & Eng.</h4>
                <div className="text-[10px] text-slate-400">Physical Infrastructure</div>
              </div>
            </div>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center justify-between text-slate-700">
                <span className="font-semibold">Foster + Partners</span>
                <span className="text-[11px] text-slate-400">London</span>
              </li>
              <li className="flex items-center justify-between text-slate-700">
                <span className="font-semibold">ARUP</span>
                <span className="text-[11px] text-slate-400">Singapore</span>
              </li>
              <li className="flex items-center justify-between text-slate-700">
                <span className="font-semibold">Tesla</span>
                <span className="text-[11px] text-slate-400">Austin</span>
              </li>
              <li className="flex items-center justify-between text-slate-700">
                <span className="font-semibold">Boston Dynamics</span>
                <span className="text-[11px] text-slate-400">Waltham</span>
              </li>
              <li className="flex items-center justify-between text-slate-700">
                <span className="font-semibold">SOM Architects</span>
                <span className="text-[11px] text-slate-400">Chicago</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* 4. STUDENT PLACEMENT SUCCESS STORIES */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">
              ALUMNI IMPACT
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Student Placement Success Stories
            </h2>
          </div>

          <button 
            onClick={() => alert("Portfolios: Accessing Luminary Alumni Monograph directory.")}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
          >
            <span>Read All Class Portfolios</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLACEMENT_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="aspect-16/10 relative overflow-hidden bg-slate-900">
                <img
                  src={story.avatar}
                  alt={story.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white tracking-wide">
                  {story.company}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{story.name}</h3>
                  <div className="text-xs text-blue-600 font-medium mt-0.5">{story.degreeTrack}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{story.currentRole}</div>

                  <p className="text-xs text-slate-600 mt-3 italic leading-relaxed">
                    {story.quote}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <span className="text-indigo-600 font-semibold">{story.badgeLabel}</span>
                  <button 
                    onClick={() => alert(`Opening verification dossier for ${story.name}`)}
                    className="text-blue-600 font-bold hover:underline cursor-pointer"
                  >
                    {story.linkAction}
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. CAREER DEVELOPMENT & INDUSTRY IMMERSION (4 PILLARS) */}
      <div>
        <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">
          PREPARATION FRAMEWORK
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Career Development & Industry Immersion
          </h2>
          <p className="text-xs text-slate-500 max-w-md">
            Structured four-pillar career pipeline embedded directly into every degree program, ensuring day-one readiness in high-stakes fields.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">1-on-1 Executive Mentorship</h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Every student is paired with a C-suite or senior principal research mentor from Fortune 100 scientific partners throughout their senior semesters.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-blue-600 pt-2 border-t border-slate-100">
              120+ Mentor Hours
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                <Briefcase className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Mandatory Paid Co-ops</h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Two accredited 6-month industry rotations with vetted global enterprises. 100% of Luminary students earn competitive professional wages while working on live production systems.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-purple-600 pt-2 border-t border-slate-100">
              100% Student Participation
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
                <Calendar className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Campus Career Fairs</h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Biannual Autumn and Spring invitation-only recruitment summits hosted in the Luminary Innovation Atrium, featuring exclusive on-site technical interviews and fast-track offers.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-indigo-600 pt-2 border-t border-slate-100">
              250+ Employers Per Session
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-3">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Venture Incubator Grants</h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                $50,000 non-dilutive equity grant pool for student-founded startups, combined with legal guidance, IP defense resources, and direct introduction to top-tier seed funds.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-cyan-600 pt-2 border-t border-slate-100">
              42 Ventures Funded Annually
            </div>
          </div>

        </div>
      </div>

      {/* 6. INTERACTIVE COMPENSATION MATRIX */}
      <div className="bg-slate-100/80 rounded-3xl p-8 border border-slate-200/90 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
              INTERACTIVE COMPENSATION MATRIX
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
              Explore Starting Salary Profiles by Department
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Data aggregated from the official 2024-2025 Career Accountability Census. Select a focus to visualize median and upper-quartile yields.
            </p>
          </div>

          {/* Department Selection Tabs */}
          <div className="flex flex-wrap gap-2">
            {[
              { key: 'computing', label: 'Computing & AI' },
              { key: 'biotech', label: 'Biotechnology' },
              { key: 'quant', label: 'Applied Math & Quant' },
              { key: 'arch', label: 'Architecture & Design' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedDeptKey(tab.key)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedDeptKey === tab.key
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Salary Data Display Box */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div>
            <div className="text-xs text-slate-400 font-medium">Median Base Starting Salary</div>
            <div className="text-3xl font-extrabold text-blue-600 mt-1">
              ${activeSalary.medianBaseSalary.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-500 mt-1">{activeSalary.note}</div>
          </div>

          <div>
            <div className="text-xs text-slate-400 font-medium">Top Quartile (90th Percentile)</div>
            <div className="text-3xl font-extrabold text-slate-900 mt-1">
              ${activeSalary.topQuartileSalary.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-500 mt-1">Specialized technical roles</div>
          </div>

          <div>
            <div className="text-xs text-slate-400 font-medium">Primary Cohort Recruiters</div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {activeSalary.recruiters.map((r, i) => (
                <span key={i} className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded-md text-xs font-semibold">
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 7. BRING LUMINARY PIONEERS TO YOUR ORGANIZATION (BANNER) */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-indigo-900 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-blue-200 border border-white/20">
            <Building2 className="w-3.5 h-3.5" />
            <span>Corporate Recruitment Partnerships</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Bring Luminary Pioneers to Your Organization
          </h2>

          <p className="text-blue-100 text-xs sm:text-sm leading-relaxed max-w-2xl">
            Partner with our Corporate Relations Office to host targeted on-campus recruitment, sponsor high-impact graduate capstones, and access pre-screened talent pools.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => setShowRecruiterModal(true)}
              className="px-6 py-3 rounded-full text-xs font-bold bg-white text-blue-900 hover:bg-blue-50 transition-colors shadow-sm cursor-pointer"
            >
              Schedule Recruiter Briefing
            </button>
            <button
              onClick={() => alert("Registration confirmed for Spring 2025 Career Fair delegation.")}
              className="px-6 py-3 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors cursor-pointer"
            >
              Register for Spring 2025 Career Fair
            </button>
          </div>
        </div>

        {/* Right Info Box */}
        <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 space-y-3">
          <h4 className="font-bold text-white text-sm">Recruiting Concierge</h4>
          <p className="text-[11px] text-blue-200">
            Connect directly with our dedicated talent relations leads for custom recruitment days.
          </p>
          <div className="space-y-2 text-xs text-white pt-2">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-blue-300" />
              <span>corporate.talent@luminary.edu</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-blue-300" />
              <span>+1 (617) 555-0144</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[11px] text-blue-100">Response within 24 Hours</span>
            </div>
          </div>
        </div>

      </div>

      {/* Recruiter Briefing Modal */}
      {showRecruiterModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => {
                setShowRecruiterModal(false);
                setRecruiterSubmitted(false);
              }}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {recruiterSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Briefing Request Received</h3>
                <p className="text-xs text-slate-500">
                  Our Corporate Relations Officer will contact you within 24 hours with custom cohort profiles and interview dates.
                </p>
                <button
                  onClick={() => {
                    setShowRecruiterModal(false);
                    setRecruiterSubmitted(false);
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setRecruiterSubmitted(true);
                }}
                className="space-y-4"
              >
                <h3 className="text-lg font-bold text-slate-900">Schedule Recruiter Briefing</h3>
                <p className="text-xs text-slate-500">
                  Access bespoke hiring pipelines from our graduating classes and co-op cohorts.
                </p>

                <div className="space-y-1 text-xs">
                  <label className="font-semibold text-slate-700">Company Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. DeepMind / Foster + Partners"
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800"
                  />
                </div>

                <div className="space-y-1 text-xs">
                  <label className="font-semibold text-slate-700">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="talent@company.com"
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800"
                  />
                </div>

                <div className="space-y-1 text-xs">
                  <label className="font-semibold text-slate-700">Target Disciplines</label>
                  <select className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-slate-800">
                    <option>Artificial Intelligence & Robotics</option>
                    <option>Sustainable Architecture & Climate BIM</option>
                    <option>Interaction Design & VisionOS XR</option>
                    <option>Genomics & Synthetic Biology</option>
                    <option>All Multidisciplinary Disciplines</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Submit Recruiter Request
                </button>
              </form>
            )}

          </div>
        </div>
      )}

      {/* Download Report Modal */}
      {showReportModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative text-center space-y-4">
            <button
              onClick={() => setShowReportModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto">
              <FileText className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-slate-900">
              Employment Report 2024–2025
            </h3>

            <p className="text-xs text-slate-500 leading-relaxed">
              The 64-page audited monograph contains complete compensation percentiles, geographical placement distributions, and venture spin-off capitalization.
            </p>

            <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 border border-slate-200 text-left space-y-1">
              <div>• Format: Verified PDF (Digital Watermark)</div>
              <div>• File Size: 14.2 MB</div>
              <div>• Scope: 1,840 Graduating Scholars</div>
            </div>

            <button
              onClick={() => {
                alert("Simulating PDF download: Luminary_Institute_Employment_Monograph_2024-2025.pdf");
                setShowReportModal(false);
              }}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Monograph Now</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
