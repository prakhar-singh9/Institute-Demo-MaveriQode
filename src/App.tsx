import React, { useState } from 'react';
import { NavTab, AdminView, Program, CandidateApplication } from './types.ts';
import { INITIAL_PROGRAMS, INITIAL_CANDIDATE_APPLICATIONS } from './data/mockData.ts';

import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { SyllabusModal } from './components/SyllabusModal.tsx';
import { AdminLayout } from './components/AdminLayout.tsx';

import { HomePage } from './pages/HomePage.tsx';
import { AboutPage } from './pages/AboutPage.tsx';
import { AcademicsPage } from './pages/AcademicsPage.tsx';
import { FacultyPage } from './pages/FacultyPage.tsx';
import { EventsPage } from './pages/EventsPage.tsx';
import { PlacementsPage } from './pages/PlacementsPage.tsx';
import { ContactApplyPage } from './pages/ContactApplyPage.tsx';

import { AdminLoginPage } from './pages/admin/AdminLoginPage.tsx';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage.tsx';
import { AdminProgramsPage } from './pages/admin/AdminProgramsPage.tsx';

import { LayoutGrid, Layers, ShieldCheck, ArrowRight, Eye, CheckCircle2 } from 'lucide-react';

export default function App() {
  // Navigation State
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [isInAdmin, setIsInAdmin] = useState<boolean>(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);
  const [adminView, setAdminView] = useState<AdminView>('dashboard');

  // Shared Application State
  const [programs, setPrograms] = useState<Program[]>(INITIAL_PROGRAMS);
  const [applications, setApplications] = useState<CandidateApplication[]>(INITIAL_CANDIDATE_APPLICATIONS);
  
  // Modals
  const [syllabusProgram, setSyllabusProgram] = useState<Program | null>(null);
  const [preselectedProgramId, setPreselectedProgramId] = useState<string | undefined>(undefined);
  
  // Interactive screens navigator drawer / banner
  const [showScreensNavigator, setShowScreensNavigator] = useState<boolean>(false);

  // Handlers
  const handleSelectTab = (tab: NavTab) => {
    setIsInAdmin(false);
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenAdmin = () => {
    setIsInAdmin(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleApplyForProgram = (programId: string) => {
    setPreselectedProgramId(programId);
    handleSelectTab('contact');
  };

  const handleApplicationCreated = (newApp: CandidateApplication) => {
    setApplications(prev => [newApp, ...prev]);
  };

  const handleUpdateAppStatus = (appId: string, status: CandidateApplication['status']) => {
    setApplications(prev => prev.map(app => app.id === appId ? { ...app, status } : app));
  };

  const handleAddProgram = (newProg: Program) => {
    setPrograms(prev => [newProg, ...prev]);
  };

  const handleToggleProgramStatus = (progId: string) => {
    setPrograms(prev => prev.map(p => {
      if (p.id === progId) {
        return {
          ...p,
          status: p.status === 'Active' ? 'Archived' : 'Active'
        };
      }
      return p;
    }));
  };

  // Screen Quick Jumper metadata for all 10 attached screenshots
  const allScreens = [
    { id: 'home', label: '1. Home Page', type: 'public', tab: 'home' },
    { id: 'about', label: '2. About Us', type: 'public', tab: 'about' },
    { id: 'academics', label: '3. Academics', type: 'public', tab: 'academics' },
    { id: 'faculty', label: '4. Faculty Directory', type: 'public', tab: 'faculty' },
    { id: 'events', label: '5. Events & Symposia', type: 'public', tab: 'events' },
    { id: 'placements', label: '6. Placements & Careers', type: 'public', tab: 'placements' },
    { id: 'contact', label: '7. Admissions & Contact', type: 'public', tab: 'contact' },
    { id: 'admin-login', label: '8. Admin Login Portal', type: 'admin-login' },
    { id: 'admin-dash', label: '9. Admin Dashboard', type: 'admin', view: 'dashboard' },
    { id: 'admin-progs', label: '10. Curricula Management', type: 'admin', view: 'programs' },
  ];

  const handleQuickJump = (screen: typeof allScreens[0]) => {
    if (screen.type === 'public') {
      setIsInAdmin(false);
      setCurrentTab(screen.tab as NavTab);
    } else if (screen.type === 'admin-login') {
      setIsInAdmin(true);
      setIsAdminLoggedIn(false);
    } else if (screen.type === 'admin') {
      setIsInAdmin(true);
      setIsAdminLoggedIn(true);
      setAdminView(screen.view as AdminView);
    }
    setShowScreensNavigator(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Quick Screens Jumper Floating Badge (bottom right) */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowScreensNavigator(!showScreensNavigator)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white shadow-2xl backdrop-blur-md border border-white/20 text-xs font-semibold hover:scale-105 transition-all cursor-pointer"
        >
          <LayoutGrid className="w-4 h-4 text-blue-400" />
          <span>Screens Navigator (10/10)</span>
        </button>

        {showScreensNavigator && (
          <div className="absolute bottom-12 right-0 mb-2 w-72 bg-white rounded-3xl shadow-2xl border border-slate-200 p-4 space-y-2 z-50 animate-in fade-in slide-in-from-bottom-2 duration-150">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                All 10 Designed Screens
              </span>
              <button 
                onClick={() => setShowScreensNavigator(false)}
                className="text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                ✕
              </button>
            </div>

            <div className="max-h-80 overflow-y-auto space-y-1 text-xs">
              {allScreens.map((screen) => (
                <button
                  key={screen.id}
                  onClick={() => handleQuickJump(screen)}
                  className="w-full text-left px-3 py-2 rounded-xl text-slate-700 hover:bg-blue-50 hover:text-blue-700 font-medium flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span>{screen.label}</span>
                  <ArrowRight className="w-3 h-3 text-slate-400" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* RENDER VIEW: ADMIN OR PUBLIC */}
      {isInAdmin ? (
        !isAdminLoggedIn ? (
          <AdminLoginPage
            onLoginSuccess={() => setIsAdminLoggedIn(true)}
            onBackToPublic={() => setIsInAdmin(false)}
          />
        ) : (
          <AdminLayout
            currentView={adminView}
            onSelectView={(view) => setAdminView(view)}
            onLogout={() => {
              setIsAdminLoggedIn(false);
              setIsInAdmin(false);
            }}
            onGoToPublic={(tab) => {
              setIsInAdmin(false);
              if (tab) setCurrentTab(tab);
            }}
          >
            {adminView === 'dashboard' && (
              <AdminDashboardPage
                applications={applications}
                onOpenNewProgram={() => setAdminView('programs')}
                onNavigateAdmin={(v) => setAdminView(v)}
                onUpdateAppStatus={handleUpdateAppStatus}
              />
            )}

            {adminView === 'programs' && (
              <AdminProgramsPage
                programs={programs}
                onOpenSyllabus={(prog) => setSyllabusProgram(prog)}
                onAddProgram={handleAddProgram}
                onToggleStatus={handleToggleProgramStatus}
              />
            )}

            {adminView === 'applications' && (
              <AdminDashboardPage
                applications={applications}
                onOpenNewProgram={() => setAdminView('programs')}
                onNavigateAdmin={(v) => setAdminView(v)}
                onUpdateAppStatus={handleUpdateAppStatus}
              />
            )}

            {adminView === 'faculty' && (
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-900">Faculty & Chairs Governance</h2>
                  <button
                    onClick={() => handleSelectTab('faculty')}
                    className="text-xs font-semibold text-blue-600 hover:underline"
                  >
                    View Public Directory ↗
                  </button>
                </div>
                <p className="text-xs text-slate-500">
                  Manage tenure dossiers, laboratory allocations, and research grant stipends.
                </p>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-700">
                  342 Active Faculty Appointments recorded in the Luminary Academic Senate registry.
                </div>
              </div>
            )}

            {adminView === 'events' && (
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-slate-900">Colloquia & Symposia Dispatch</h2>
                  <button
                    onClick={() => handleSelectTab('events')}
                    className="text-xs font-semibold text-blue-600 hover:underline"
                  >
                    View Public Calendar ↗
                  </button>
                </div>
                <p className="text-xs text-slate-500">
                  Auditorium reservations, speaker holographic broadcasting, and academic pass registries.
                </p>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-700">
                  Flagship Convening: 2025 International Quantum & Ethical AI Symposium (412 / 450 Passes claimed).
                </div>
              </div>
            )}

            {adminView === 'settings' && (
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-xl font-bold text-slate-900">Institutional System Settings</h2>
                <p className="text-xs text-slate-500">
                  Authentication parameters, ISO 27001 audit controls, and admissions algorithm weighting.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="font-bold text-slate-900">FIDO2 Hardware Key Enforcement</div>
                    <div className="text-slate-500 text-[11px] mt-0.5">Strict Tier-1 Administrative Security</div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="font-bold text-slate-900">Turnaround Threshold</div>
                    <div className="text-slate-500 text-[11px] mt-0.5">3.8 Business Days SLA</div>
                  </div>
                </div>
              </div>
            )}

          </AdminLayout>
        )
      ) : (
        /* PUBLIC SITE */
        <div className="flex-1 flex flex-col justify-between">
          <Navbar
            currentTab={currentTab}
            onSelectTab={handleSelectTab}
            onOpenAdmin={handleOpenAdmin}
            isAdminLoggedIn={isAdminLoggedIn}
          />

          <main className="flex-1">
            {currentTab === 'home' && (
              <HomePage
                onSelectTab={handleSelectTab}
                onOpenSyllabus={(prog) => setSyllabusProgram(prog)}
                onReserveEvent={() => handleSelectTab('events')}
              />
            )}

            {currentTab === 'about' && (
              <AboutPage
                onNavigateTab={handleSelectTab}
              />
            )}

            {currentTab === 'academics' && (
              <AcademicsPage
                onOpenSyllabus={(prog) => setSyllabusProgram(prog)}
                onNavigateTab={handleSelectTab}
              />
            )}

            {currentTab === 'faculty' && (
              <FacultyPage />
            )}

            {currentTab === 'events' && (
              <EventsPage
                onReservePass={() => {}}
              />
            )}

            {currentTab === 'placements' && (
              <PlacementsPage />
            )}

            {currentTab === 'contact' && (
              <ContactApplyPage
                preselectedProgramId={preselectedProgramId}
                onApplicationCreated={handleApplicationCreated}
              />
            )}
          </main>

          <Footer
            onSelectTab={handleSelectTab}
            onOpenAdmin={handleOpenAdmin}
          />
        </div>
      )}

      {/* Global Interactive Syllabus Modal */}
      <SyllabusModal
        program={syllabusProgram}
        onClose={() => setSyllabusProgram(null)}
        onApply={handleApplyForProgram}
      />

    </div>
  );
}
