import React from 'react';
import { NavTab, Program } from '../types.ts';
import { INITIAL_PROGRAMS } from '../data/mockData.ts';
import { 
  ArrowRight, 
  ExternalLink, 
  Award, 
  Users, 
  BookOpen, 
  Sparkles, 
  Compass, 
  Globe2, 
  Calendar, 
  TrendingUp,
  FlaskConical,
  GraduationCap,
  Building2,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

interface HomePageProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenSyllabus: (program: Program) => void;
  onReserveEvent: (eventId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onSelectTab,
  onOpenSyllabus,
  onReserveEvent
}) => {
  const featuredPrograms = INITIAL_PROGRAMS.slice(0, 3);

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 lg:pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Admissions Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/80">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              <span>ADMISSIONS OPEN • FALL 2025 CYCLE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Shaping Tomorrow’s <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500">
                Pioneers
              </span> in Science, Art <br />
              & Tech.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              At Luminary Institute, theoretical brilliance converges with high-impact applied research. We prepare inquisitive minds to orchestrate global breakthroughs across quantum systems, computational design, and ecological frontiers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onSelectTab('academics')}
                className="px-6 py-3.5 rounded-full font-semibold text-sm bg-gradient-to-r from-blue-700 to-indigo-600 text-white hover:from-blue-800 hover:to-indigo-700 shadow-md shadow-blue-500/15 flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onSelectTab('contact')}
                className="px-6 py-3.5 rounded-full font-semibold text-sm bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 shadow-xs flex items-center gap-2 transition-all cursor-pointer"
              >
                <span>Apply Now</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>

            {/* Accreditation tags */}
            <div className="pt-6 border-t border-slate-200/70 flex flex-wrap items-center gap-6 text-xs font-semibold text-slate-400 tracking-wider">
              <div className="flex items-center gap-1.5 text-slate-500">
                <Award className="w-4 h-4 text-blue-600" />
                <span>ABET & NECHE ACCREDITED</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-500">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>R1 RESEARCH TIER</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-500">
                <Globe2 className="w-4 h-4 text-cyan-600" />
                <span>68 PARTNER NATIONS</span>
              </div>
            </div>

          </div>

          {/* Right Image Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Top Floating Badge */}
              <div className="absolute -top-6 -left-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-sm">
                  #4
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Global Innovation Index</div>
                  <div className="text-[10px] text-slate-500">for Tech Universities</div>
                </div>
              </div>

              {/* Main Image Frame */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/5] relative group">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                  alt="Discovery Center for Quantum & Sensory Architectures"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-blue-300">
                    CENTRAL QUAD & ADVANCED PHOTONICS LAB
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">
                    Discovery Center for Quantum & Sensory Architectures
                  </h3>
                </div>
              </div>

              {/* Bottom Floating Badge */}
              <div className="absolute -bottom-6 -right-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-base font-extrabold text-slate-900 leading-tight">90.4%</div>
                  <div className="text-[10px] text-slate-500 font-medium">First-Year Career & Fellowship Placement</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 2. STATS ROW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
              <Users className="w-4 h-4" />
              <span>Scholars</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              14,200+
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Undergraduate & Postgraduates
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-2">
              <Award className="w-4 h-4" />
              <span>Career Trajectory</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-indigo-600 tracking-tight">
              98.4%
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Placement Within 6 Months
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-600 uppercase tracking-wider mb-2">
              <GraduationCap className="w-4 h-4" />
              <span>Researchers</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              340+
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Distinguished Global Faculty
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
              <FlaskConical className="w-4 h-4" />
              <span>Discovery</span>
            </div>
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">
              $48M+
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Annual Sponsored Research Grants
            </div>
          </div>

        </div>
      </section>

      {/* 3. PROVOST'S WELCOME & VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
              — Provost’s Welcome & Vision
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Bridging Theoretical Depth with Tangible Civilizational Impact.
            </h2>

            <p className="text-slate-600 text-base leading-relaxed italic border-l-2 border-blue-500 pl-4 py-1">
              “We reject the historical separation of technology from creative and humanistic inquiry. At Luminary, our classrooms operate as decentralized discovery engines where ethical contemplation is woven directly into algorithmic design, biotechnology, and spatial engineering.”
            </p>

            <div className="flex items-center gap-4 pt-2">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-slate-200 bg-slate-100 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                  alt="Dr. Eleanor Vance, Ph.D."
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-slate-900">Dr. Eleanor Vance, Ph.D.</div>
                <div className="text-xs text-slate-500">Provost & Vice Chancellor for Academic Exploration</div>
                <div className="text-[11px] text-blue-600 font-medium">Former Lead Investigator, Max Planck Institute</div>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-2 text-xs font-semibold">
              <button 
                onClick={() => onSelectTab('about')}
                className="text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
              >
                <span>Explore our century-long heritage</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => onSelectTab('about')}
                className="text-slate-500 hover:text-slate-800 cursor-pointer"
              >
                Read the 2035 Strategic Charter
              </button>
            </div>
          </div>

          {/* Right Visual Grid (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            
            {/* Top Left photo */}
            <div className="rounded-3xl overflow-hidden aspect-4/3 shadow-md bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                alt="Students collaborating"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Top Right Blue Stat Card */}
            <div className="bg-blue-600 rounded-3xl p-6 text-white flex flex-col justify-between shadow-md">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                Excellence Hub
              </div>
              <div>
                <div className="text-4xl font-extrabold tracking-tight">18:1</div>
                <div className="text-xs text-blue-100 mt-1">Students-to-Faculty Research Ratio</div>
              </div>
            </div>

            {/* Bottom Left Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="mt-4">
                <div className="text-sm font-bold text-slate-900">
                  800,000+ Volumes & Open Access Papers
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  Fully digitized institutional repository available to all matriculated scholars.
                </div>
              </div>
            </div>

            {/* Bottom Right photo */}
            <div className="rounded-3xl overflow-hidden aspect-4/3 shadow-md bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=600&q=80"
                alt="Campus architecture illuminated"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

          </div>

        </div>
      </section>

      {/* 4. CURRICULAR HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">
              Curricular Highlights
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Pioneering Fields of Study
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Transdisciplinary programs engineered in lockstep with international research consortiums.
            </p>
          </div>

          <button
            onClick={() => onSelectTab('academics')}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>View All 12 Degrees</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Featured Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredPrograms.map((program) => (
            <div
              key={program.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Image Banner */}
              <div className="aspect-16/10 bg-slate-100 relative overflow-hidden">
                <img
                  src={
                    program.id === 'cs-ai'
                      ? 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80'
                      : program.id === 'arch-sust'
                      ? 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80'
                      : 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80'
                  }
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-slate-700">
                  {program.degreeLevel}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-blue-600 mb-1.5">
                    <span>{program.school}</span>
                    <span>•</span>
                    <span className="text-slate-500">Cohort Cap: {program.cohortCapacity}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {program.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                    {program.description}
                  </p>
                </div>

                <div>
                  {/* Focus Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1 mb-4">
                    {program.coreFocusAreas.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Syllabus CTA */}
                  <button
                    onClick={() => onOpenSyllabus(program)}
                    className="w-full py-2.5 rounded-xl bg-blue-50/70 hover:bg-blue-100/80 text-blue-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>View Program Syllabus</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </section>

      {/* 5. THE LUMINARY ADVANTAGE */}
      <section className="bg-slate-100/70 border-y border-slate-200/80 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700 mb-3">
              DISTINCTIVE PEDAGOGY
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The Luminary Advantage
            </h2>
            <p className="text-slate-600 text-sm mt-3">
              An ecosystem architected from the foundation up to turn speculative curiosity into real-world technological mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <FlaskConical className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Pioneering Research Labs</h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Over 28 dedicated cleanrooms, high-performance computing clusters, and bio-fabrication chambers accessible to undergraduates.
                </p>
              </div>
              <button 
                onClick={() => onSelectTab('about')}
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 pt-2 cursor-pointer"
              >
                <span>Explore Facilities</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">World-Renowned Faculty</h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Learn directly under MacArthur Fellows, Turing laureates, and industry founders actively publishing in flagship journals.
                </p>
              </div>
              <button 
                onClick={() => onSelectTab('faculty')}
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 pt-2 cursor-pointer"
              >
                <span>Meet Faculty</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                <Globe2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Global Exchange Hubs</h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Reciprocal residency agreements with ETH Zurich, Oxford, NUS Singapore, and Tokyo Tech for immersive semester exchanges.
                </p>
              </div>
              <button 
                onClick={() => onSelectTab('about')}
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 pt-2 cursor-pointer"
              >
                <span>Global Campuses</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">100% Industry Immersion</h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Mandatory two-semester venture incubations or corporate co-ops built straight into degree pathways with verified venture funding.
                </p>
              </div>
              <button 
                onClick={() => onSelectTab('placements')}
                className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 pt-2 cursor-pointer"
              >
                <span>Incubator Track</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 6. LEADING SCHOLARS & INVESTIGATORS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
              Academic Mentorship
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Leading Scholars & Investigators
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Pioneers actively mentoring the next generation in foundational research.
            </p>
          </div>

          <button
            onClick={() => onSelectTab('faculty')}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 shrink-0 cursor-pointer"
          >
            <span>View All 340+ Faculty</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Scholar 1 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                alt="Dr. Julian Sterling"
                className="w-14 h-14 rounded-2xl object-cover border border-slate-200"
              />
              <div>
                <h4 className="font-bold text-slate-900">Dr. Julian Sterling</h4>
                <div className="text-xs text-blue-600 font-medium">Chair of Quantum Computing</div>
                <div className="text-[11px] text-slate-400">Ph.D., Cambridge University</div>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Lead author of topological fault-tolerant qubit modeling. Recipient of the IEEE Dirac Medal (2021) and founder of the Luminary Cryogenics Lab.
            </p>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>Course: QC 802 Advanced Qubits</span>
              <button 
                onClick={() => onSelectTab('faculty')}
                className="text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Scholar 2 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
                alt="Prof. Aris Thorne"
                className="w-14 h-14 rounded-2xl object-cover border border-slate-200"
              />
              <div>
                <h4 className="font-bold text-slate-900">Prof. Aris Thorne</h4>
                <div className="text-xs text-indigo-600 font-medium">Director of Synthetic Biology</div>
                <div className="text-[11px] text-slate-400">D.Phil., Oxford University</div>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pioneering enzyme synthesis for oceanic microplastic degradation. National Science Foundation Career Award recipient with 14 registered international patents.
            </p>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>Course: BIO 610 Synthetic Genomics</span>
              <button 
                onClick={() => onSelectTab('faculty')}
                className="text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Scholar 3 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                alt="Dr. Mei-Ling Chen"
                className="w-14 h-14 rounded-2xl object-cover border border-slate-200"
              />
              <div>
                <h4 className="font-bold text-slate-900">Dr. Mei-Ling Chen</h4>
                <div className="text-xs text-purple-600 font-medium">Lead, Sensory Human-AI Lab</div>
                <div className="text-[11px] text-slate-400">Ph.D., Stanford University</div>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Focuses on generative spatial interfaces and cognitive ergonomics. Former advisor to MIT Media Lab and keynote speaker at SIGGRAPH 2024.
            </p>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
              <span>Course: DES 541 Spatial Cognition</span>
              <button 
                onClick={() => onSelectTab('faculty')}
                className="text-blue-600 hover:text-blue-800"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </section>

      {/* 7. UPCOMING ACADEMIC EVENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
              Campus Life & Dialogues
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Upcoming Academic Events
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Conferences, keynote addresses, and cross-disciplinary hackathons.
            </p>
          </div>

          <button
            onClick={() => onSelectTab('events')}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 shrink-0 cursor-pointer"
          >
            <span>Explore Academic Calendar</span>
            <Calendar className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Event List Items */}
        <div className="space-y-4">
          
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-blue-400 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 flex flex-col items-center justify-center font-bold shrink-0">
                <span className="text-[10px] uppercase font-semibold text-blue-500">Sept</span>
                <span className="text-xl leading-none">14</span>
              </div>
              <div>
                <div className="flex items-center gap-2 text-[11px] font-semibold text-blue-600">
                  <span>Annual Symposium</span>
                  <span>•</span>
                  <span className="text-slate-400">Auditorium Magna & Virtual Simulcast</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mt-0.5">
                  Global Colloquium on Ethical Neural Systems & Sentience Governance
                </h3>
                <div className="text-xs text-slate-500 mt-1">
                  Keynote by 12 international delegates with student panel presentations.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 shrink-0 justify-between md:justify-end">
              <span className="text-xs text-slate-500 font-medium">09:00 - 17:30 EDT</span>
              <button
                onClick={() => onReserveEvent('quantum-symposium')}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Register Pass
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-blue-400 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-700 flex flex-col items-center justify-center font-bold shrink-0">
                <span className="text-[10px] uppercase font-semibold text-indigo-500">Sept</span>
                <span className="text-xl leading-none">22</span>
              </div>
              <div>
                <div className="flex items-center gap-2 text-[11px] font-semibold text-indigo-600">
                  <span>Hackathon</span>
                  <span>•</span>
                  <span className="text-slate-400">Hangar 7 Design Labs</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mt-0.5">
                  Luminary 48h Bio-Robotics Sprint: Oceanic Micro-Cleanup Prototypes
                </h3>
                <div className="text-xs text-slate-500 mt-1">
                  $150,000 Seed Grant pool sponsored by Ocean Discovery Ventures.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 shrink-0 justify-between md:justify-end">
              <span className="text-xs text-slate-500 font-medium">Weekend Sprint</span>
              <button
                onClick={() => onReserveEvent('robotics-hackathon')}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors cursor-pointer"
              >
                Join Cohort
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-blue-400 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-700 flex flex-col items-center justify-center font-bold shrink-0">
                <span className="text-[10px] uppercase font-semibold text-cyan-600">Oct</span>
                <span className="text-xl leading-none">03</span>
              </div>
              <div>
                <div className="flex items-center gap-2 text-[11px] font-semibold text-cyan-600">
                  <span>Distinguished Lecture</span>
                  <span>•</span>
                  <span className="text-slate-400">Kresge Hall</span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mt-0.5">
                  Commencement Prologue: Planetary Architecture & The Post-Carbon Era
                </h3>
                <div className="text-xs text-slate-500 mt-1">
                  Open public lecture followed by masterclass studio critique.
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 shrink-0 justify-between md:justify-end">
              <span className="text-xs text-slate-500 font-medium">18:00 - 20:00 EDT</span>
              <button
                onClick={() => onReserveEvent('urban-ecology')}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Reserve Seat
              </button>
            </div>
          </div>

        </div>

      </section>

      {/* 8. TRUSTED BY INDUSTRY PIONEERS GLOBALLY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Career Trajectories
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Industry Pioneers Globally
          </h2>
          <p className="text-slate-500 text-sm mt-2">
            Luminary alumni lead research groups, found venture-backed spin-outs, and build foundational infrastructures across the world.
          </p>
        </div>

        {/* Partner Logos Pill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {[
            { name: 'Google', sub: 'DeepMind & Cloud' },
            { name: 'Apple', sub: 'Special Projects' },
            { name: 'BioGen', sub: 'Therapeutics R&D' },
            { name: 'Tesla', sub: 'Optimus & Autopilot' },
            { name: 'McKinsey', sub: 'Quantum Practice' },
            { name: 'MIT Media', sub: 'Frontier Fellowships' }
          ].map((partner, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-4 text-center border border-slate-200/80 shadow-xs flex flex-col items-center justify-center"
            >
              <div className="font-bold text-slate-800 text-base">{partner.name}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">{partner.sub}</div>
            </div>
          ))}
        </div>

        {/* 2 Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-6">
            <p className="text-slate-600 text-sm leading-relaxed italic">
              “The autonomy I was granted in the autonomous systems lab during my junior year allowed me to publish my first IEEE paper and secure a research position at Google DeepMind before graduation.”
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                AK
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">Aria Kulkarni</div>
                <div className="text-xs text-slate-500">
                  Class of 2024 • B.S. Autonomous Robotics • Now at DeepMind London
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-6">
            <p className="text-slate-600 text-sm leading-relaxed italic">
              “Luminary’s multidisciplinary model enabled our studio to invent biodegradable structural composite materials that closed a $2.4M seed venture round directly out of the university incubator.”
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                MN
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">Mateo Navarro</div>
                <div className="text-xs text-slate-500">
                  Class of 2023 • Sustainable Architecture • Founder, Myceliform Labs
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* 9. BOTTOM CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-indigo-900 p-8 sm:p-14 text-white shadow-xl relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-200">
              Ready to Begin Your Voyage?
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Step Into the Laboratories of Tomorrow.
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Discover merit scholarships, international fellowships, and application deadlines for undergraduate, graduate, and doctoral admissions.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onSelectTab('contact')}
                className="px-6 py-3 rounded-full text-xs font-bold bg-white text-blue-900 hover:bg-blue-50 transition-colors shadow-sm cursor-pointer"
              >
                Start Application
              </button>

              <button
                onClick={() => onSelectTab('contact')}
                className="px-6 py-3 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors cursor-pointer"
              >
                Request Campus Tour
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
