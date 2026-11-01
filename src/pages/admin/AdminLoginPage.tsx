import React, { useState } from 'react';
import { 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  Server,
  RefreshCw,
  Building
} from 'lucide-react';

interface AdminLoginPageProps {
  onLoginSuccess: () => void;
  onBackToPublic: () => void;
}

export const AdminLoginPage: React.FC<AdminLoginPageProps> = ({
  onLoginSuccess,
  onBackToPublic
}) => {
  const [email, setEmail] = useState('admin.user@luminary.edu');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberDevice, setRememberDevice] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      onLoginSuccess();
    }, 400);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50/40 to-indigo-100/50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
      
      {/* Main Split Authentication Card */}
      <div className="bg-white rounded-[32px] shadow-2xl border border-slate-200/90 max-w-5xl w-full overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
        
        {/* Left Form Column (6.5 cols) */}
        <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-8">
          
          {/* Brand & Heading */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-indigo-600 to-cyan-500 p-0.5 shadow-sm">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              </div>
              <div>
                <div className="font-bold text-slate-900 text-base tracking-tight leading-tight">
                  Luminary Institute
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  ACADEMIC ADMINISTRATION
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Welcome Back
              </h1>
              <p className="text-xs text-slate-500">
                Enter your institutional credentials to access the academic management portal.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-700">
                Institutional Identity / Email
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs">
                  @
                </span>
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 font-mono transition-all"
                  placeholder="admin.user@luminary.edu"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-semibold text-slate-700">
                Security Passphrase
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                  <Lock className="w-3.5 h-3.5" />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  placeholder="Enter passphrase"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Checkbox & Forgot link */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-slate-600 font-medium">
                <input
                  type="checkbox"
                  checked={rememberDevice}
                  onChange={(e) => setRememberDevice(e.target.checked)}
                  className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer"
                />
                <span>Remember device for 14 days</span>
              </label>

              <button
                type="button"
                onClick={() => alert("SSO Reset: Hardware security key prompt dispatched to institutional email.")}
                className="text-blue-600 font-semibold hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* Sign in Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <span>Sign In to Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Quick Demo Autofill Notice */}
            <div className="text-[11px] text-center text-slate-400 pt-1">
              Demo Credentials loaded: Click "Sign In to Portal" to enter directly.
            </div>

          </form>

          {/* Enterprise SSO Enforced Box */}
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200/80 flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-800">Enterprise SSO Enforced</div>
              <div className="text-[10px] text-slate-500">Hardware FIDO2 Token & Duo Mobile Ready</div>
            </div>
          </div>

          {/* Bottom Back link & version */}
          <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
            <button
              onClick={onBackToPublic}
              className="hover:text-blue-600 flex items-center gap-1.5 font-medium transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Public Website</span>
            </button>
            <span className="font-mono text-[10px]">v4.8.2-rc</span>
          </div>

        </div>

        {/* Right Visual Panel (5.5 cols) */}
        <div className="lg:col-span-6 bg-gradient-to-br from-indigo-50/50 to-blue-50 p-8 sm:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-200/70 relative">
          
          {/* Top Status badges */}
          <div className="flex flex-wrap items-center gap-2 justify-end">
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white text-emerald-700 border border-emerald-200 shadow-xs flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              99.98% System Uptime
            </span>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-white text-slate-700 border border-slate-200 shadow-xs">
              📅 Fall 2025 Cycle
            </span>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-white text-slate-700 border border-slate-200 shadow-xs">
              🛡 ISO 27001 & FERPA
            </span>
          </div>

          {/* Center Architectural Image & Synced Badge */}
          <div className="my-auto space-y-4 pt-4">
            <div className="rounded-2xl overflow-hidden aspect-16/10 shadow-lg relative bg-slate-900 border-2 border-white">
              <img
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80"
                alt="Vance Center for Advanced Cognition"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-4">
                <div className="text-white font-bold text-sm">
                  Vance Center for Advanced Cognition
                </div>
                <div className="text-[10px] text-slate-300">
                  North Quad • District IV • Dedicated 2024
                </div>
              </div>
            </div>

            {/* Synced Cohort Badge */}
            <div className="bg-white rounded-2xl p-3.5 shadow-md border border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Active Cohort Records</div>
                  <div className="text-[10px] text-slate-500">14,892 verified student credentials</div>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-blue-50 text-blue-700 flex items-center gap-1">
                <RefreshCw className="w-3 h-3 text-blue-600" />
                Synced
              </span>
            </div>
          </div>

          {/* Bottom Quote by Provost */}
          <div className="pt-4 space-y-3">
            <p className="text-slate-800 text-sm font-semibold italic leading-relaxed">
              “Governing the future of transdisciplinary education with uncompromising precision and luminous clarity.”
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                EV
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Dr. Elena Vance</div>
                <div className="text-[10px] text-slate-500">Dean of Academic Informatics & Provost</div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
