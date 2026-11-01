import React, { useState } from 'react';
import { Program } from '../../types.ts';
import { 
  Plus, 
  Upload, 
  Search, 
  BookOpen, 
  Edit3, 
  CheckCircle2, 
  Users, 
  Calendar, 
  Percent, 
  GraduationCap,
  Sparkles,
  ChevronRight,
  X,
  ExternalLink
} from 'lucide-react';

interface AdminProgramsPageProps {
  programs: Program[];
  onOpenSyllabus: (program: Program) => void;
  onAddProgram: (newProg: Program) => void;
  onToggleStatus: (progId: string) => void;
}

export const AdminProgramsPage: React.FC<AdminProgramsPageProps> = ({
  programs,
  onOpenSyllabus,
  onAddProgram,
  onToggleStatus
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('All Degrees');
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Form states for Create New Program
  const [newTitle, setNewTitle] = useState('');
  const [newCode, setNewCode] = useState('ENG-205');
  const [newSchool, setNewSchool] = useState('School of Computing');
  const [newDepartment, setNewDepartment] = useState('Computer Science');
  const [newDegreeLevel, setNewDegreeLevel] = useState('Undergraduate (4 Yrs)');
  const [newCapacity, setNewCapacity] = useState(60);
  const [newChairName, setNewChairName] = useState('Dr. Marcus Vance');
  const [newDescription, setNewDescription] = useState('');

  // Filters
  const filteredPrograms = programs.filter(prog => {
    const matchesSearch = 
      prog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.department.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (selectedFilter === 'All Degrees') return true;
    if (selectedFilter === 'Undergraduate') return prog.degreeLevel.includes('Undergraduate');
    if (selectedFilter === "Graduate & Master's") return prog.degreeLevel.includes('Graduate');
    if (selectedFilter === 'Executive') return prog.title.includes('M.B.A.') || prog.degreeLevel.includes('Executive');
    if (selectedFilter === 'Active') return prog.status === 'Active';
    if (selectedFilter === 'Archived') return prog.status === 'Archived';

    return true;
  });

  const totalCapacity = programs.reduce((acc, p) => acc + p.cohortCapacity, 0);
  const totalEnrolled = programs.reduce((acc, p) => acc + p.enrolled, 0);
  const overallFillRate = Math.round((totalEnrolled / totalCapacity) * 1000) / 10;

  const handleCreateProgram = (e: React.FormEvent) => {
    e.preventDefault();
    const newProg: Program = {
      id: `prog-${Date.now()}`,
      code: newCode,
      title: newTitle,
      department: newDepartment,
      deptCategory: 'Engineering & AI',
      degreeLevel: newDegreeLevel,
      duration: '4 Years',
      school: newSchool,
      cohortCapacity: newCapacity,
      enrolled: Math.floor(newCapacity * 0.9),
      fillRatePercent: 90,
      status: 'Active',
      facultyChair: {
        name: newChairName,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
        title: 'Associate Professor & Program Lead'
      },
      accreditation: 'ABET Candidate',
      description: newDescription || 'Advanced cross-disciplinary inquiry designed in partnership with research centers.',
      coreFocusAreas: ['Systems Architecture', 'Computational Rigor', 'Ethics in Design'],
      syllabusOverview: [
        {
          term: 'Term 1: Foundations',
          courses: ['CORE 101: Fundamental Methods', 'CORE 102: Computational Practicum']
        }
      ]
    };

    onAddProgram(newProg);
    setShowCreateModal(false);
    setNewTitle('');
    setNewDescription('');
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      
      {/* 1. HEADER & ACTION ROW */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider flex items-center gap-1.5 mb-1">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>CURRICULAR GOVERNANCE</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Academic Programs & Curricula Management
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage degree pathways, cohort capacities, syllabus revisions, and faculty chairs.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => alert("Bulk Curriculum XML/CSV parsed: 6 syllabi verified.")}
            className="px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
          >
            <Upload className="w-3.5 h-3.5 text-slate-400" />
            <span>Bulk Import Curriculum</span>
          </button>

          <button
            onClick={() => setShowCreateModal(true)}
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Program</span>
          </button>
        </div>
      </div>

      {/* 2. THREE STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Total Cohort Cap */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              TOTAL COHORT CAP
            </span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-slate-900">{totalCapacity}</span>
              <span className="text-xs text-slate-500 font-medium">Enrolled Cap</span>
              <span className="text-xs font-bold text-blue-600 ml-auto">+4.8% YoY</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-3">
              <div className="bg-blue-600 h-full rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>
        </div>

        {/* Overall Fill Rate */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              OVERALL FILL RATE
            </span>
            <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Percent className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-purple-700">{overallFillRate}%</span>
              <span className="text-xs text-slate-500 font-medium">
                {totalEnrolled} / {totalCapacity}
              </span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full ml-auto">
                Optimal
              </span>
            </div>
            <div className="text-[11px] text-slate-500 mt-2 flex items-center gap-1.5">
              <span className="text-purple-600 font-bold">↗</span>
              <span>12 Waitlist applicants across active pools</span>
            </div>
          </div>
        </div>

        {/* Next Syllabi Review */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              NEXT SYLLABI REVIEW
            </span>
            <div className="w-8 h-8 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-slate-900">January 2026</span>
              <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full ml-auto">
                In 18 mos
              </span>
            </div>
            <div className="text-[11px] text-slate-500 mt-1">Faculty Senate Board Cycle</div>
            <div className="text-[11px] text-slate-600 font-medium mt-2 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span>6 Accredited Programs in Good Standing</span>
            </div>
          </div>
        </div>

      </div>

      {/* 3. SEARCH & FILTER PILLS */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-6">
        
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Search by degree */}
          <div className="relative flex-1 max-w-sm">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by degree..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-blue-500 transition-all"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { key: 'All Degrees', label: `All Degrees (${programs.length})` },
              { key: 'Undergraduate', label: 'Undergraduate (3)' },
              { key: "Graduate & Master's", label: "Graduate & Master's (2)" },
              { key: 'Executive', label: 'Executive (1)' },
              { key: 'Active', label: '• Active' },
              { key: 'Archived', label: 'Archived' },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setSelectedFilter(f.key)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedFilter === f.key
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/60'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

        </div>

        {/* 4. PROGRAMS TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="pb-3 font-semibold">PROGRAM NAME & CODE</th>
                <th className="pb-3 font-semibold">DEPARTMENT</th>
                <th className="pb-3 font-semibold">DEGREE LEVEL</th>
                <th className="pb-3 font-semibold">COHORT CAPACITY</th>
                <th className="pb-3 font-semibold">FACULTY CHAIR</th>
                <th className="pb-3 font-semibold">STATUS</th>
                <th className="pb-3 font-semibold text-right">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredPrograms.map((prog) => (
                <tr key={prog.id} className="hover:bg-slate-50/80 transition-colors">
                  
                  {/* Name & Code */}
                  <td className="py-4 pr-3">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <GraduationCap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 hover:text-blue-600 transition-colors">
                          {prog.title}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded font-mono text-[10px] font-bold">
                            {prog.code}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            • {prog.accreditation}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Department */}
                  <td className="py-4 pr-3 font-medium text-slate-700">
                    <div>{prog.school}</div>
                  </td>

                  {/* Degree Level */}
                  <td className="py-4 pr-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-purple-50 text-purple-700">
                      {prog.degreeLevel}
                    </span>
                  </td>

                  {/* Cohort Capacity with Bar */}
                  <td className="py-4 pr-3 min-w-[150px]">
                    <div className="flex items-center justify-between text-[11px] font-semibold mb-1">
                      <span className="text-slate-800">
                        {prog.enrolled} / {prog.cohortCapacity}
                        {prog.fillRatePercent === 100 && ' (Cap)'}
                      </span>
                      <span className={prog.fillRatePercent === 100 ? 'text-rose-600 font-bold' : 'text-blue-600'}>
                        {prog.fillRatePercent}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${prog.fillRatePercent === 100 ? 'bg-rose-500' : 'bg-blue-600'}`}
                        style={{ width: `${Math.min(prog.fillRatePercent, 100)}%` }}
                      ></div>
                    </div>
                  </td>

                  {/* Faculty Chair */}
                  <td className="py-4 pr-3">
                    <div className="flex items-center gap-2">
                      <img
                        src={prog.facultyChair.avatar}
                        alt={prog.facultyChair.name}
                        className="w-7 h-7 rounded-full object-cover border border-slate-200 shrink-0"
                      />
                      <span className="font-semibold text-slate-800 whitespace-nowrap">
                        {prog.facultyChair.name}
                      </span>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="py-4 pr-3 whitespace-nowrap">
                    <button
                      onClick={() => onToggleStatus(prog.id)}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold cursor-pointer ${
                        prog.status === 'Active'
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${prog.status === 'Active' ? 'bg-blue-600' : 'bg-slate-400'}`}></span>
                      <span>{prog.status}</span>
                    </button>
                  </td>

                  {/* Actions */}
                  <td className="py-4 text-right whitespace-nowrap space-x-1">
                    <button
                      onClick={() => onOpenSyllabus(prog)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
                      title="View Syllabus"
                    >
                      <BookOpen className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => alert(`Edit Curricular Architecture for ${prog.title}`)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                      title="Edit Curricular Architecture"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Pagination */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Showing {filteredPrograms.length} of {programs.length} Active Academic Programs</span>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => alert("Previous page: You are at page 1.")}
              className="px-3 py-1 rounded-lg border border-slate-200 text-slate-400 cursor-not-allowed"
            >
              Previous
            </button>
            <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center">
              1
            </span>
            <button 
              onClick={() => alert("Next page: All programs currently shown.")}
              className="px-3 py-1 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>

      </div>

      {/* CREATE NEW PROGRAM MODAL */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6">
            <button
              onClick={() => setShowCreateModal(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <h3 className="text-xl font-bold text-slate-900">Create New Academic Program</h3>
              <p className="text-xs text-slate-500 mt-1">
                Establish a new degree pathway under the Curricular Governance board.
              </p>
            </div>

            <form onSubmit={handleCreateProgram} className="space-y-4 text-xs">
              
              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Program Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. M.Sc. Quantum Computing Systems"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Program Code</label>
                  <input
                    type="text"
                    required
                    value={newCode}
                    onChange={(e) => setNewCode(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Cohort Capacity</label>
                  <input
                    type="number"
                    required
                    value={newCapacity}
                    onChange={(e) => setNewCapacity(Number(e.target.value))}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">School</label>
                  <select
                    value={newSchool}
                    onChange={(e) => setNewSchool(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 bg-white"
                  >
                    <option>School of Computing</option>
                    <option>Built Environment</option>
                    <option>Institute of Design</option>
                    <option>Management School</option>
                    <option>School of Life Sciences</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-semibold text-slate-700">Degree Level</label>
                  <select
                    value={newDegreeLevel}
                    onChange={(e) => setNewDegreeLevel(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 bg-white"
                  >
                    <option>Undergraduate (4 Yrs)</option>
                    <option>Graduate (2 Yrs)</option>
                    <option>Executive (1 Yr)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-semibold text-slate-700">Program Description</label>
                <textarea
                  rows={3}
                  placeholder="Outline core philosophical and technical objectives..."
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold cursor-pointer"
                >
                  Ratify Program
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};
