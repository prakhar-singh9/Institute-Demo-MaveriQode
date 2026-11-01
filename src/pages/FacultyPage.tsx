import React, { useState } from 'react';
import { FacultyMember } from '../types.ts';
import { FACULTY_MEMBERS } from '../data/mockData.ts';
import { 
  Search, 
  MapPin, 
  Clock, 
  BookOpen, 
  Mail, 
  CheckCircle, 
  Calendar, 
  Sparkles,
  ExternalLink,
  X
} from 'lucide-react';

export const FacultyPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('All Departments');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalMember, setActiveModalMember] = useState<FacultyMember | null>(null);
  const [modalMode, setModalMode] = useState<'contact' | 'publications' | 'advising' | null>(null);
  const [advisingScheduled, setAdvisingScheduled] = useState(false);

  const departments = [
    'All Departments',
    'Computer Science',
    'Architecture',
    'Business School',
    'Life Sciences',
    'Design'
  ];

  const filteredFaculty = FACULTY_MEMBERS.filter((faculty) => {
    const matchesDept = 
      selectedDept === 'All Departments' || 
      faculty.department.toLowerCase() === selectedDept.toLowerCase();

    const matchesSearch = 
      faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faculty.researchFocus.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faculty.academicTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faculty.schoolName.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesDept && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* 1. DIRECTORY HEADER & STATS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Title & Description (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            • FACULTY & RESEARCH SCHOLARS DIRECTORY
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            World-Class Scholars, Researchers & Mentors
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Our distinguished faculty bridge speculative scientific inquiry and tangible industry leadership. Every scholar maintains an active laboratory, guiding students through discovery-driven exploration.
          </p>
        </div>

        {/* Right Metric Boxes (4 cols) */}
        <div className="lg:col-span-4 flex items-center gap-4">
          <div className="flex-1 bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs">
            <div className="text-3xl font-extrabold text-blue-600">9:1</div>
            <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mt-1">
              Student-Faculty Ratio
            </div>
          </div>

          <div className="flex-1 bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs">
            <div className="text-3xl font-extrabold text-slate-900">94%</div>
            <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mt-1">
              Hold Terminal Ph.D./M.Des.
            </div>
          </div>
        </div>

      </div>

      {/* 2. SEARCH & DEPARTMENT FILTER BAR */}
      <div className="space-y-4 pt-4 border-t border-slate-200/80">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, lab or discipline..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-100/80 hover:bg-slate-100 focus:bg-white rounded-xl border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-xs sm:text-sm text-slate-800 transition-all outline-none"
            />
          </div>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {departments.map((dept) => {
              const isActive = selectedDept === dept;
              return (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100/90 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                  }`}
                >
                  {dept}
                </button>
              );
            })}
          </div>

        </div>
      </div>

      {/* 3. FACULTY CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFaculty.map((faculty) => (
          <div
            key={faculty.id}
            className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6"
          >
            {/* Top row: Avatar + School Tag */}
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-slate-100 bg-slate-100 shadow-xs shrink-0">
                  <img
                    src={faculty.avatar}
                    alt={faculty.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-100 shrink-0">
                  {faculty.schoolName}
                </span>
              </div>

              {/* Scholar Details */}
              <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
                {faculty.name}
              </h3>
              <div className="text-xs text-blue-600 font-semibold mt-0.5">
                {faculty.degrees}
              </div>
              <div className="text-xs text-slate-600 mt-1 font-medium">
                {faculty.academicTitle}
              </div>

              {/* Research Focus Box */}
              <div className="mt-4 bg-slate-50/80 rounded-2xl p-3.5 border border-slate-100">
                <div className="text-[10px] font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Research Focus</span>
                </div>
                <div className="text-xs font-semibold text-slate-800 leading-snug">
                  {faculty.researchFocus}
                </div>
              </div>

              {/* Location & Office Hours */}
              <div className="mt-4 space-y-1.5 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{faculty.officeLocation}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Office Hours: {faculty.officeHours}</span>
                </div>
              </div>

            </div>

            {/* Bottom Actions: Publications & Contact */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  setActiveModalMember(faculty);
                  setModalMode('publications');
                }}
                className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                <span>Publications</span>
              </button>

              <button
                onClick={() => {
                  setActiveModalMember(faculty);
                  setModalMode('contact');
                }}
                className="py-2 px-3 rounded-xl bg-blue-50/80 hover:bg-blue-100 text-blue-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600" />
                <span>Contact</span>
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* 4. ADVISING & COLLOQUIUMS CALLOUT BANNER */}
      <div className="rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-indigo-900 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
        
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-blue-200 border border-white/20">
            <Calendar className="w-3 h-3" />
            <span>Direct Scholarly Mentorship</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Book Departmental Advising & Research Colloquiums
          </h2>

          <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
            Every undergraduate and graduate scholar is assigned a dedicated faculty advisor. Synchronize your thesis research, request laboratory rotations, or secure office hour advisory slots via the institutional portal.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={() => setModalMode('advising')}
            className="px-6 py-3 rounded-full text-xs font-bold bg-white text-blue-900 hover:bg-blue-50 transition-colors shadow-sm cursor-pointer"
          >
            Schedule Advising Slot
          </button>
          <button
            onClick={() => alert("Visiting Scholar Protocol: Submissions open twice annually to accredited researchers.")}
            className="px-6 py-3 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors cursor-pointer"
          >
            Visiting Scholar Guidelines
          </button>
        </div>

      </div>

      {/* MODAL: Faculty Contact or Publications */}
      {activeModalMember && modalMode && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-100 p-6 sm:p-8 relative">
            <button
              onClick={() => {
                setActiveModalMember(null);
                setModalMode(null);
              }}
              className="absolute top-5 right-5 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {modalMode === 'publications' ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src={activeModalMember.avatar}
                    alt={activeModalMember.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-slate-900">{activeModalMember.name}</h3>
                    <div className="text-xs text-blue-600">{activeModalMember.academicTitle}</div>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Recent Flagship Publications ({activeModalMember.publicationsCount} Indexed)
                  </h4>
                  <ul className="space-y-3 text-xs text-slate-600">
                    <li className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="font-semibold text-slate-800">
                        "Scalable Decentralized Alignment in Stochastic Multi-Agent Frameworks"
                      </div>
                      <div className="text-slate-400 text-[11px] mt-0.5">
                        IEEE Transactions on Robotics & Autonomous Systems (2024)
                      </div>
                    </li>
                    <li className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <div className="font-semibold text-slate-800">
                        "Thermodynamics of Carbon-Negative Envelopes in Sub-Tropical Environments"
                      </div>
                      <div className="text-slate-400 text-[11px] mt-0.5">
                        Nature Sustainable Engineering, Vol. 18 (2023)
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src={activeModalMember.avatar}
                    alt={activeModalMember.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-slate-900">{activeModalMember.name}</h3>
                    <div className="text-xs text-blue-600">{activeModalMember.contactEmail}</div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs space-y-2">
                  <div className="font-bold text-slate-800">Office Advisory Slots</div>
                  <div className="text-slate-600">{activeModalMember.officeLocation}</div>
                  <div className="text-slate-500">Regular hours: {activeModalMember.officeHours}</div>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert(`Message dispatched to ${activeModalMember.name}'s institutional mailbox.`);
                    setActiveModalMember(null);
                    setModalMode(null);
                  }}
                  className="space-y-3 text-xs"
                >
                  <label className="block text-slate-700 font-semibold">Your Message or Inquiry</label>
                  <textarea
                    rows={3}
                    placeholder="Introduce your thesis focus or inquiry..."
                    required
                    className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-800"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors cursor-pointer"
                  >
                    Send Direct Message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Advising Slot Modal */}
      {modalMode === 'advising' && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border border-slate-100 p-6 sm:p-8 relative">
            <button
              onClick={() => {
                setModalMode(null);
                setAdvisingScheduled(false);
              }}
              className="absolute top-5 right-5 p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {advisingScheduled ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Advising Slot Reserved</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Your advising confirmation and video link have been dispatched to your institutional email.
                </p>
                <button
                  onClick={() => {
                    setModalMode(null);
                    setAdvisingScheduled(false);
                  }}
                  className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-xl text-xs font-semibold"
                >
                  Return to Directory
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setAdvisingScheduled(true);
                }}
                className="space-y-4"
              >
                <h3 className="text-lg font-bold text-slate-900">Schedule Advising Slot</h3>
                <p className="text-xs text-slate-500">
                  Select your department and target week for departmental thesis or research advising.
                </p>

                <div className="space-y-1.5 text-xs">
                  <label className="font-semibold text-slate-700">Select Department</label>
                  <select className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-slate-800">
                    <option>School of Computing (CS & AI)</option>
                    <option>Built Environment (Sustainable Architecture)</option>
                    <option>Institute of Design (Interaction & XR)</option>
                    <option>School of Life Sciences (Genomics)</option>
                  </select>
                </div>

                <div className="space-y-1.5 text-xs">
                  <label className="font-semibold text-slate-700">Preferred Day & Time</label>
                  <input
                    type="date"
                    required
                    defaultValue="2025-11-15"
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800"
                  />
                </div>

                <div className="space-y-1.5 text-xs">
                  <label className="font-semibold text-slate-700">Your Student ID or Email</label>
                  <input
                    type="email"
                    required
                    placeholder="scholar.id@luminary.edu"
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Confirm Advising Reservation
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
