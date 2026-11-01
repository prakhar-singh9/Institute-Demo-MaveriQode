import React, { useState } from 'react';
import { NavTab } from '../types.ts';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  BookOpen, 
  Share2, 
  Radio, 
  Lock, 
  CheckCircle2 
} from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenAdmin }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Column 1: Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-700 to-indigo-600 flex items-center justify-center text-white">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <span className="text-base font-bold text-slate-900 tracking-tight">
                Luminary Institute
              </span>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed pr-6">
              Pioneering advanced computational research, biomedical engineering, and institutional excellence across multidisciplinary frontiers.
            </p>

            <div className="space-y-2 text-xs text-slate-600 pt-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                <span>840 Academic Oval, Tech Crest Heights, MA 02138</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>+1 (617) 555-0198</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>admissions@luminary.edu</span>
              </div>
            </div>
          </div>

          {/* Column 2: Departments (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Departments
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <button 
                  onClick={() => onSelectTab('academics')}
                  className="hover:text-blue-600 transition-colors cursor-pointer text-left"
                >
                  Computer Science
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectTab('academics')}
                  className="hover:text-blue-600 transition-colors cursor-pointer text-left"
                >
                  Quantum Systems
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectTab('academics')}
                  className="hover:text-blue-600 transition-colors cursor-pointer text-left"
                >
                  Biotechnology
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectTab('academics')}
                  className="hover:text-blue-600 transition-colors cursor-pointer text-left"
                >
                  Applied Mathematics
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectTab('academics')}
                  className="hover:text-blue-600 transition-colors cursor-pointer text-left"
                >
                  Robotics & AI
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <button 
                  onClick={() => onSelectTab('events')} 
                  className="hover:text-blue-600 transition-colors cursor-pointer text-left"
                >
                  Academic Calendar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectTab('about')} 
                  className="hover:text-blue-600 transition-colors cursor-pointer text-left"
                >
                  Research Labs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectTab('faculty')} 
                  className="hover:text-blue-600 transition-colors cursor-pointer text-left"
                >
                  Campus Directory
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectTab('placements')} 
                  className="hover:text-blue-600 transition-colors cursor-pointer text-left"
                >
                  Student Outcomes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectTab('contact')} 
                  className="hover:text-blue-600 transition-colors cursor-pointer text-left"
                >
                  Financial Aid & Admissions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Academic Newsletter
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Subscribe for quarterly research publications, guest lecture notices, and departmental breakthroughs.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your institution email"
                  required
                  className="bg-white border border-slate-200 rounded-lg px-3.5 py-2 text-xs w-full focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-800 placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-4 py-2 rounded-lg shrink-0 transition-colors shadow-sm cursor-pointer"
                >
                  Subscribe
                </button>
              </div>

              {subscribed && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Subscription confirmed. Welcome to Luminary Dispatch.</span>
                </div>
              )}
            </form>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2 text-slate-400">
              <button title="Global Registry" className="hover:text-blue-600 transition-colors cursor-pointer">
                <Globe className="w-4 h-4" />
              </button>
              <button title="Open Access Library" className="hover:text-blue-600 transition-colors cursor-pointer">
                <BookOpen className="w-4 h-4" />
              </button>
              <button title="Academic Citation Graph" className="hover:text-blue-600 transition-colors cursor-pointer">
                <Share2 className="w-4 h-4" />
              </button>
              <button title="Colloquium Podcast" className="hover:text-blue-600 transition-colors cursor-pointer">
                <Radio className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © 2025 Luminary Institute of Technology & Sciences. Chartered for Academic Excellence.
          </div>

          <div className="flex items-center gap-6">
            <button className="hover:text-slate-600 transition-colors">Privacy Policy</button>
            <button className="hover:text-slate-600 transition-colors">Terms of Research</button>
            
            {/* Admin Portal Gateway */}
            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-blue-600 font-medium transition-colors bg-white px-2.5 py-1 rounded-md border border-slate-200/80 shadow-xs cursor-pointer"
            >
              <Lock className="w-3 h-3 text-slate-400 group-hover:text-blue-600" />
              <span>Admin Portal</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
