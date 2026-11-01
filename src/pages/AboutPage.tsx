import React, { useState } from 'react';
import { NavTab } from '../types.ts';
import { HISTORY_MILESTONES } from '../data/mockData.ts';
import { 
  ArrowRight, 
  Award, 
  Globe2, 
  Sparkles, 
  BookOpen, 
  Compass, 
  ShieldCheck, 
  Building2, 
  Leaf, 
  Scale, 
  ChevronRight,
  ExternalLink,
  Users
} from 'lucide-react';

interface AboutPageProps {
  onNavigateTab: (tab: NavTab) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateTab }) => {
  const [activeMilestoneId, setActiveMilestoneId] = useState<string>('m1');

  const activeMilestone = HISTORY_MILESTONES.find(m => m.id === activeMilestoneId) || HISTORY_MILESTONES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      
      {/* 1. HERO SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left text (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            • ESTABLISHED 1954 • BOSTON & CAMBRIDGE AXIS
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Pioneering Human Potential for Over{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600">
              Seven Decades.
            </span>
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Luminary Institute bridges uncompromising computational precision with humanist enquiry. We do not simply observe tectonic civilizational shifts—we equip leaders to architect them ethically.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => {
                const el = document.getElementById('milestones-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-sm flex items-center gap-2 cursor-pointer transition-colors"
            >
              <span>Explore Our Heritage</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => {
                const el = document.getElementById('values-section');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 shadow-xs cursor-pointer transition-colors"
            >
              Charter & Values ↗
            </button>
          </div>

          <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <div className="text-2xl font-extrabold text-slate-900">70+</div>
              <div className="text-slate-500 font-medium mt-0.5">Years of Academic Mastery</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-blue-600">94%</div>
              <div className="text-slate-500 font-medium mt-0.5">Sponsored Research Ratio</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-indigo-600">14:1</div>
              <div className="text-slate-500 font-medium mt-0.5">Student-Faculty Proximity</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-emerald-600">Tier-1</div>
              <div className="text-slate-500 font-medium mt-0.5">Continuous Citation Impact</div>
            </div>
          </div>
        </div>

        {/* Right Photo (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/5] relative group">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
              alt="The Helix Pavilion for Autonomous Inquiry"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6">
              <div className="text-[10px] font-bold uppercase tracking-wider text-blue-300">
                CAMBRIDGE RESEARCH QUAD
              </div>
              <h3 className="text-lg font-bold text-white mt-1">
                The Helix Pavilion for Autonomous Inquiry
              </h3>
            </div>
          </div>
        </div>

      </div>

      {/* 2. HISTORICAL GENESIS FEATURE */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Archival Photo & Quote (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-2xl overflow-hidden aspect-4/3 bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=600&q=80"
              alt="Founding Charter 1954"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs italic text-slate-600">
            <span className="font-bold text-slate-900 not-italic block mb-1">
              FOUNDING CHARTER MANIFESTO • OCT 1954
            </span>
            “Knowledge without ethical gravity is mechanical folly; scholarship divorced from human consequence is self-indulgence.”
          </div>
        </div>

        {/* Narrative & Stats (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
            OUR GENESIS
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            From Cold War Computing Pioneers to Transdisciplinary Vanguard.
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <p>
              In Autumn 1954, six visionary mathematicians and social philosophers converged in Massachusetts with a single radical postulate: that the impending information age would demand scholars equally proficient in algebraic rigor and ethical discernment.
            </p>
            <p>
              Over the successive seven decades, Luminary evolved from a specialized post-graduate think-tank into an internationally revered research citadel. Today, over 14,000 students across 68 countries collaborate under ten faculties—fusing advanced artificial intelligence, synthetic biology, climate engineering, and speculative humanities.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
            <div>
              <div className="text-2xl font-extrabold text-slate-900">1954</div>
              <div className="text-xs text-slate-500 mt-0.5">Charter Signed</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-blue-600">10</div>
              <div className="text-xs text-slate-500 mt-0.5">Academic Schools</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-indigo-600">64,000+</div>
              <div className="text-xs text-slate-500 mt-0.5">Global Alumni</div>
            </div>
          </div>
        </div>

      </div>

      {/* 3. INTERACTIVE MILESTONES SELECTOR */}
      <div id="milestones-section" className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">
              CHRONICLE OF IMPACT
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Milestones That Defined Our Arc
            </h2>
          </div>
          <p className="text-xs text-slate-500">
            Select a milestone node to inspect critical institutional inflection points.
          </p>
        </div>

        {/* Milestone Selection Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {HISTORY_MILESTONES.map((m) => {
            const isActive = m.id === activeMilestoneId;
            return (
              <button
                key={m.id}
                onClick={() => setActiveMilestoneId(m.id)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                    : 'bg-white text-slate-700 border-slate-200/90 hover:bg-slate-50'
                }`}
              >
                <div className={`text-[10px] font-bold uppercase ${isActive ? 'text-blue-200' : 'text-slate-400'}`}>
                  {m.tabNumber} • {m.year}
                </div>
                <div className="text-sm font-bold mt-1 truncate">
                  {m.tabLabel}
                </div>
              </button>
            );
          })}
        </div>

        {/* Milestone Detail Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold bg-blue-50 text-blue-700">
              📅 {activeMilestone.year}
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              {activeMilestone.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {activeMilestone.description}
            </p>
            <div className="space-y-2 pt-2 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span>{activeMilestone.bullet1}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span>{activeMilestone.bullet2}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-16/10 bg-slate-900 shadow-md">
            <img
              src={activeMilestone.image}
              alt={activeMilestone.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

      {/* 4. VISION & MISSION DUAL CARDS */}
      <div id="values-section" className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">
            INSTITUTIONAL GUIDING STARS
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Vision & Mission
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            The dual compass guiding our faculty appointments, curricula development, and public-benefit scientific patents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                OUR HORIZON
              </div>
              <h3 className="text-xl font-bold text-slate-900">Institutional Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To empower globally conscious thinkers who engineer ethical, breakthrough solutions to humanity's most complex existential predicaments. We envision an educational continuum where scientific audacity is married inherently to moral clarity—graduating luminaries who view technological mastery not as self-enrichment, but as a public trust.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-400">Strategic Target: 2035 Horizon</span>
              <span className="text-blue-600 font-semibold">Active Focus ↗</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-[10px] font-bold text-purple-600 uppercase tracking-wider">
                OUR MANDATE
              </div>
              <h3 className="text-xl font-bold text-slate-900">Institutional Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Delivering rigorous multidisciplinary pedagogy, fostering fearless innovation, and cultivating compassionate leadership across all disciplines. We achieve this through low student-to-faculty intimacy, zero-barrier laboratory immersion for undergraduates, and sustained commitment to open-science publishing across civic networks.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-400">Charter Compliance: Triennial Audit</span>
              <span className="text-purple-600 font-semibold">Exemplary Rating 🎖</span>
            </div>
          </div>

        </div>
      </div>

      {/* 5. GUIDING CORE VALUES */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">
            ETHICAL FOUNDATION
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Guiding Core Values
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            The non-negotiable axioms embedded across our admission rubric, research charters, and community life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold">
              01
            </div>
            <div className="text-[10px] font-bold text-slate-400 uppercase">VALUE 01</div>
            <h4 className="font-bold text-slate-900 text-sm">Intellectual Rigor</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Refusing superficial consensus. Every hypothesis is scrutinized with unyielding quantitative diligence, reproducible metrics, and transparent peer evaluation.
            </p>
            <div className="text-[11px] font-semibold text-blue-600 pt-2 border-t border-slate-100">
              Excellence in Critique
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xs font-bold">
              02
            </div>
            <div className="text-[10px] font-bold text-slate-400 uppercase">VALUE 02</div>
            <h4 className="font-bold text-slate-900 text-sm">Radical Inclusivity</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              True breakthroughs germinate at demographic and disciplinary intersections. We cultivate a community where unconventional perspectives are sought and cherished.
            </p>
            <div className="text-[11px] font-semibold text-purple-600 pt-2 border-t border-slate-100">
              Need-Blind Admissions
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-bold">
              03
            </div>
            <div className="text-[10px] font-bold text-slate-400 uppercase">VALUE 03</div>
            <h4 className="font-bold text-slate-900 text-sm">Ethical Stewardship</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Science is never neutral. We demand that inventors weigh the long-term societal, environmental, and planetary ramifications of their algorithms and inventions.
            </p>
            <div className="text-[11px] font-semibold text-emerald-600 pt-2 border-t border-slate-100">
              Planetary Responsibility
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-3">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xs font-bold">
              04
            </div>
            <div className="text-[10px] font-bold text-slate-400 uppercase">VALUE 04</div>
            <h4 className="font-bold text-slate-900 text-sm">Limitless Curiosity</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Encouraging fearless intellectual exploration into the unmapped. We reward bold inquiries that challenge established doctrine and forge uncharted disciplines.
            </p>
            <div className="text-[11px] font-semibold text-indigo-600 pt-2 border-t border-slate-100">
              Unbounded Inquiry
            </div>
          </div>

        </div>
      </div>

      {/* 6. INSTITUTIONAL BENCHMARKS */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">
              MEASURED EXCELLENCE
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Institutional Benchmarks
            </h2>
          </div>
          <p className="text-xs text-slate-500 max-w-sm">
            Independent accreditation and tangible achievements that confirm Luminary's international position.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs">
            <div className="text-3xl font-extrabold text-slate-900">
              R1 <span className="text-xs font-semibold text-blue-600 uppercase">Tier</span>
            </div>
            <div className="font-bold text-slate-800 text-sm mt-1">Carnegie Classification</div>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Ranked among the top tier of doctoral research universities distinguished by very high research activity and annual expenditures.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs">
            <div className="text-3xl font-extrabold text-blue-600">
              32 <span className="text-xs font-semibold text-slate-400 uppercase">Honorees</span>
            </div>
            <div className="font-bold text-slate-800 text-sm mt-1">Rhodes & Fulbright Scholars</div>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Luminary graduates consistently secure world-renowned post-graduate fellowships in global health, quantum physics, and jurisprudence.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs">
            <div className="text-3xl font-extrabold text-indigo-600">
              180+ <span className="text-xs font-semibold text-slate-400 uppercase">Filed</span>
            </div>
            <div className="font-bold text-slate-800 text-sm mt-1">Scientific Patents</div>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Groundbreaking discoveries spanning targeted nanodrug delivery, error-corrected qubits, and grid-scale ionic energy storage.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs">
            <div className="text-3xl font-extrabold text-emerald-600">
              100% <span className="text-xs font-semibold text-slate-400 uppercase">Net-Zero</span>
            </div>
            <div className="font-bold text-slate-800 text-sm mt-1">Carbon-Neutral Campus</div>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Achieved four years ahead of schedule via on-site deep-borehole geothermal circuits, passive-envelope buildings, and smart microgrids.
            </p>
          </div>

        </div>
      </div>

      {/* 7. GOVERNED BY THINKERS, GUIDED BY ETHICISTS */}
      <div className="bg-slate-100/80 rounded-3xl p-8 sm:p-12 border border-slate-200/90 space-y-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
              INSTITUTIONAL STEWARDSHIP
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Governed by Thinkers, Guided by Ethicists.
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              The Board of Regents and Office of the Provost maintain complete intellectual autonomy. Over 40% of institutional governance seats are held by actively teaching faculty and student fellowship representatives.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
                  alt="Dr. Aurelia Vance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm">Dr. Aurelia Vance, Ph.D.</div>
                <div className="text-xs text-slate-500">President & Regents Professor of Cognitive Architecture</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
              <div className="text-[10px] font-bold text-blue-600 uppercase">SCHOOL OF APPLIED SCIENCES</div>
              <h4 className="font-bold text-slate-900 text-xs">Center for Molecular Cybernetics</h4>
              <p className="text-[11px] text-slate-500">
                Spearheading synthetic biocircuits and nano-targeted pharmaceuticals with 4 active clinical trials.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
              <div className="text-[10px] font-bold text-purple-600 uppercase">SCHOOL OF HUMANITIES & LAW</div>
              <h4 className="font-bold text-slate-900 text-xs">Algorithmic Ethics & Jurisprudence</h4>
              <p className="text-[11px] text-slate-500">
                Drafting modern governance frameworks adopted by supranational bodies and human rights organizations.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
              <div className="text-[10px] font-bold text-emerald-600 uppercase">URBAN ECOLOGY & DESIGN</div>
              <h4 className="font-bold text-slate-900 text-xs">Climate Resilience Infrastructure</h4>
              <p className="text-[11px] text-slate-500">
                Designing responsive coastal mitigation architecture deployed in 14 vulnerable worldwide metros.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs space-y-1">
              <div className="text-[10px] font-bold text-indigo-600 uppercase">MATHEMATICS & COMPUTATION</div>
              <h4 className="font-bold text-slate-900 text-xs">Quantum Cryptography Lab</h4>
              <p className="text-[11px] text-slate-500">
                Pioneering post-quantum lattice security architectures protecting global civic communications.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* 8. CTA BANNER: BECOME A CO-AUTHOR */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-indigo-900 p-8 sm:p-14 text-white shadow-xl relative overflow-hidden">
        <div className="max-w-2xl space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-200">
            JOIN THE ACADEMIC ASSEMBLY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Become a Co-Author of the Next Epoch.
          </h2>
          <p className="text-blue-100 text-sm leading-relaxed">
            Whether you are an aspiring researcher seeking laboratory fellowships, an undergraduate questioning tomorrow, or a partner institution looking to collaborate—Luminary welcomes your mind.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => onNavigateTab('contact')}
              className="px-6 py-3 rounded-full text-xs font-bold bg-white text-blue-900 hover:bg-blue-50 transition-colors shadow-sm cursor-pointer"
            >
              Apply for Admission
            </button>
            <button
              onClick={() => onNavigateTab('faculty')}
              className="px-6 py-3 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors cursor-pointer"
            >
              Review Faculty Directory ↗
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
