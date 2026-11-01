import React, { useState } from 'react';
import { AdminView, NavTab } from '../types.ts';
import { 
  LayoutDashboard, 
  Globe, 
  GraduationCap, 
  Users, 
  Calendar, 
  Briefcase, 
  FileCheck2, 
  Image as ImageIcon, 
  Settings, 
  LogOut, 
  Search, 
  Bell, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

interface AdminLayoutProps {
  currentView: AdminView;
  onSelectView: (view: AdminView) => void;
  onLogout: () => void;
  onGoToPublic: (tab?: NavTab) => void;
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  currentView,
  onSelectView,
  onLogout,
  onGoToPublic,
  children
}) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const sidebarLinks: { id: AdminView; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'programs', label: 'Programs', icon: GraduationCap },
    { id: 'applications', label: 'Applications', icon: FileCheck2 },
    { id: 'faculty', label: 'Faculty', icon: Users },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
      
      {/* 1. LEFT SIDEBAR */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 flex flex-col justify-between p-4 transition-transform duration-200
        ${mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg:static lg:w-64 shrink-0
      `}>
        {/* Brand Header */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                img
              </div>
              <div>
                <div className="font-bold text-slate-900 text-sm leading-tight">Luminary Core</div>
                <div className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">ADMIN WORKSPACE</div>
              </div>
            </div>

            <button
              onClick={() => setMobileSidebarOpen(false)}
              className="lg:hidden p-1 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="space-y-1">
            <div className="text-[10px] font-bold text-slate-400 tracking-wider uppercase px-3 mb-2">
              ADMINISTRATIVE NAVIGATION
            </div>

            {sidebarLinks.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectView(item.id);
                    setMobileSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:bg-slate-100/80 hover:text-slate-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}

            <button
              onClick={() => onGoToPublic('home')}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-slate-400" />
                <span>Website Pages</span>
              </div>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="space-y-3 pt-4 border-t border-slate-100">
          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 flex items-center justify-between text-[11px]">
            <span className="text-slate-500 font-medium">Academic Cycle</span>
            <span className="font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200/60">
              Fall '25 Active
            </span>
          </div>

          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Backdrop for mobile sidebar */}
      {mobileSidebarOpen && (
        <div 
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 bg-slate-900/40 z-40 lg:hidden"
        ></div>
      )}

      {/* 2. MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Navigation Bar */}
        <header className="h-16 bg-white border-b border-slate-200 px-4 sm:px-8 flex items-center justify-between gap-4 sticky top-0 z-30">
          
          <div className="flex items-center gap-3 flex-1 max-w-lg">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Global Admin Search Bar */}
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search records, faculty IDs, or applications..."
                className="w-full pl-9 pr-3 py-1.5 bg-slate-50 hover:bg-slate-100/70 focus:bg-white rounded-xl border border-slate-200/80 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Right Status & Dean Profile */}
          <div className="flex items-center gap-4">
            
            {/* System Status Pill */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>System Normal • 99.98%</span>
            </div>

            {/* Notifications */}
            <button
              onClick={() => alert("Notification Center: 3 pending faculty tenure dossiers and 12 waitlist reviews.")}
              className="relative p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 cursor-pointer"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500"></span>
            </button>

            {/* Profile Avatar Pill */}
            <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
                alt="Dr. Elena Vance"
                className="w-8 h-8 rounded-full object-cover border border-slate-200"
              />
              <div className="hidden md:block text-left">
                <div className="text-xs font-bold text-slate-900 leading-tight">Dr. Elena Vance</div>
                <div className="text-[10px] text-slate-400">Dean of Administration</div>
              </div>
            </div>

            {/* Back to Public Site button */}
            <button
              onClick={() => onGoToPublic('home')}
              className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-200/60"
            >
              <span>Public View</span>
              <ExternalLink className="w-3 h-3" />
            </button>

          </div>

        </header>

        {/* Dynamic Admin Body */}
        <main className="p-4 sm:p-8 flex-1 overflow-x-hidden">
          {children}
        </main>

      </div>

    </div>
  );
};
