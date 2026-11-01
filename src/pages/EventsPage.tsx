import React, { useState, useEffect } from 'react';
import { ACADEMIC_EVENTS, EVENT_RECAPS } from '../data/mockData.ts';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Sparkles, 
  Bookmark, 
  Share2, 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink,
  PlusCircle,
  X
} from 'lucide-react';

interface EventsPageProps {
  onReservePass: (eventId: string) => void;
}

export const EventsPage: React.FC<EventsPageProps> = ({ onReservePass }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Disciplines');
  const [bookmarked, setBookmarked] = useState(false);
  const [showProposalModal, setShowProposalModal] = useState(false);
  const [proposalSubmitted, setProposalSubmitted] = useState(false);
  const [showArchiveModal, setShowArchiveModal] = useState(false);
  
  // Reservation modal state
  const [activeReservationEvent, setActiveReservationEvent] = useState<string | null>(null);
  const [passConfirmed, setPassConfirmed] = useState(false);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 42,
    hours: 14,
    minutes: 29,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const categories = [
    'All Disciplines',
    'Robotics & AI',
    'Urban Ecology',
    'Neuroscience',
    'Ventures'
  ];

  const filteredEvents = ACADEMIC_EVENTS.filter(event => {
    if (event.isFlagship) return false; // Flagship has its own top hero
    if (selectedCategory === 'All Disciplines') return true;
    return event.category === selectedCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* 1. PAGE HEADER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 space-y-3">
          <div className="flex items-center gap-3">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              📅 ACADEMIC CALENDAR 2025–2026
            </span>
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">
              • Curated Symposia • Updated Hourly
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Campus Life, Symposia & Global Summits
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Cross-disciplinary dialogues, international academic convocations, and boundary-pushing research showcases curated across Luminary's 14 research divisions.
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-col justify-end lg:items-end text-xs text-slate-500 space-y-1">
          <div className="font-semibold text-slate-700 uppercase tracking-wider text-[10px]">
            ACTIVE SERIES
          </div>
          <div className="font-medium text-slate-600">
            <span className="text-blue-600 font-bold">Quantum</span> • Bio-ethics • Venture Dynamics
          </div>
        </div>
      </div>

      {/* 2. FEATURED FLAGSHIP SYMPOSIUM HERO */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Info Panel (7 cols) */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-purple-50 text-purple-700 border border-purple-200">
                Flagship Symposium
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-blue-50 text-blue-700">
                Hybrid: In-Person & Holographic Keynote
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-slate-100 text-slate-600">
                💎 36 ECTS Accredited
              </span>
            </div>

            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              GLOBAL CONVENING 2025
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              2025 International Quantum & Ethical AI Symposium
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Uniting theoretical physicists, computational ethicists, and policy architects to reconcile quantum supremacy with planetary alignment paradigms. Featuring 48 keynote papers and 12 live interactive lab proofs.
            </p>

            {/* Quick Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
                <div className="text-[10px] text-slate-400 font-bold uppercase flex items-center gap-1">
                  <Clock className="w-3 h-3 text-blue-600" />
                  DATES
                </div>
                <div className="font-bold text-slate-800 text-xs mt-1">Nov 14–16</div>
                <div className="text-[10px] text-slate-500">3 Full Days • EDT</div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
                <div className="text-[10px] text-slate-400 font-bold uppercase flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-indigo-600" />
                  VENUE
                </div>
                <div className="font-bold text-slate-800 text-xs mt-1">Turing Grand</div>
                <div className="text-[10px] text-slate-500">Auditorium & Meta-Sphere</div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
                <div className="text-[10px] text-slate-400 font-bold uppercase flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-cyan-600" />
                  KEYNOTE SPEAKER
                </div>
                <div className="font-bold text-slate-800 text-xs mt-1">Dr. Aris Thorne</div>
                <div className="text-[10px] text-slate-500">Nobel Laureate in Physics</div>
              </div>
            </div>

          </div>

          {/* Bottom Countdown & Action Row */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            <div className="space-y-1">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                COUNTDOWN
              </div>
              <div className="text-xl font-extrabold text-slate-900 tracking-tight">
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
              </div>
              <div className="text-[11px] font-semibold text-rose-600">
                Remaining Passes: Only 38 in-person left
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveReservationEvent('quantum-symposium')}
                className="px-6 py-3 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 text-white shadow-md flex items-center gap-2 cursor-pointer transition-all"
              >
                <span>Reserve Academic Pass</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setBookmarked(!bookmarked)}
                className={`p-3 rounded-full border transition-colors cursor-pointer ${
                  bookmarked
                    ? 'bg-blue-50 border-blue-200 text-blue-600'
                    : 'border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50'
                }`}
                title="Bookmark Symposium"
              >
                <Bookmark className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Right Photo Column (5 cols) */}
        <div className="lg:col-span-5 relative bg-slate-900 min-h-[300px]">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80"
            alt="International Quantum & Ethical AI Symposium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6">
            <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 text-xs text-slate-800 flex items-center gap-2.5">
              <Users className="w-4 h-4 text-blue-600 shrink-0" />
              <div>
                <span className="font-bold">Co-sponsored by</span> CERN & Institute for Advanced Study
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 3. DEPARTMENTAL SCHEDULE / UPCOMING COLLOQUIA */}
      <div className="space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
              DEPARTMENTAL SCHEDULE
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mt-0.5">
              Upcoming Symposia & Colloquia
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Image */}
              <div className="aspect-16/10 relative overflow-hidden bg-slate-900">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-medium text-white">
                  {event.date}
                </div>
                <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-bold text-slate-800">
                  {event.time}
                </div>
                <div className="absolute bottom-2.5 right-2.5 bg-indigo-600/90 backdrop-blur-md px-2 py-0.5 rounded-md text-[9px] font-bold text-white uppercase tracking-wider">
                  {event.typeTag}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">
                    {event.category.toUpperCase()} DIVISION
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 space-y-3">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{event.venue}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-[11px] text-slate-400">
                      Seats: {event.seatsBooked} / {event.seatsTotal}
                    </span>
                    <button
                      onClick={() => setActiveReservationEvent(event.id)}
                      className="font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Register to Attend</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* 4. RECENT CONVOCATIONS & EVENT RECAPS */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">
              INSTITUTIONAL ARCHIVES
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Recent Convocations & Event Recaps
            </h2>
          </div>

          <button
            onClick={() => setShowArchiveModal(true)}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
          >
            <span>Explore Complete Digital Archive</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENT_RECAPS.map((recap) => (
            <div
              key={recap.id}
              className="rounded-3xl overflow-hidden aspect-[3/4] relative group shadow-md bg-slate-900 cursor-pointer"
              onClick={() => alert(`Accessing multimedia archive: ${recap.title}`)}
            >
              <img
                src={recap.image}
                alt={recap.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-between p-5 text-white">
                <div className="inline-block self-start px-2.5 py-1 rounded-md text-[10px] font-semibold bg-white/20 backdrop-blur-md">
                  {recap.dateBadge}
                </div>

                <div className="space-y-1.5">
                  <div className="text-[9px] font-bold tracking-widest text-blue-300 uppercase">
                    {recap.tag}
                  </div>
                  <h3 className="font-bold text-base leading-snug">{recap.title}</h3>
                  <p className="text-[11px] text-slate-300 line-clamp-2 leading-relaxed">
                    {recap.summary}
                  </p>
                  <div className="text-[11px] font-semibold text-blue-400 group-hover:text-blue-300 pt-1 flex items-center gap-1">
                    <span>{recap.linkText}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. CAMPUS MEDIA GALLERY */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">
              CAMPUS STORIES IN MOTION
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Event Media Gallery
            </h2>
            <p className="text-slate-600 text-sm mt-2 max-w-2xl leading-relaxed">
              Explore sample highlights from campus gatherings, research showcases, and student experiences.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4" />
            Demo media
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
            <video
              className="w-full aspect-video object-cover bg-slate-900"
              controls
              muted
              playsInline
              preload="metadata"
              poster="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80"
            >
              <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
              Your browser does not support the video element.
            </video>
            <div className="p-5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">EVENT HIGHLIGHTS</p>
              <h3 className="text-lg font-bold text-slate-900 mt-1">Campus Gathering & Community</h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">A sample video slot for event-day moments and campus celebrations.</p>
            </div>
          </article>

          <article className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
            <video
              className="w-full aspect-video object-cover bg-slate-900"
              controls
              muted
              playsInline
              preload="metadata"
              poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80"
            >
              <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" />
              Your browser does not support the video element.
            </video>
            <div className="p-5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">LEARNING & INNOVATION</p>
              <h3 className="text-lg font-bold text-slate-900 mt-1">Ideas, Discovery & Innovation</h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">A placeholder for lectures, demonstrations, and student project showcases.</p>
            </div>
          </article>

          <article className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
            <video
              className="w-full aspect-video object-cover bg-slate-900"
              controls
              muted
              playsInline
              preload="metadata"
              poster="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80"
            >
              <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" type="video/mp4" />
              Your browser does not support the video element.
            </video>
            <div className="p-5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">STUDENT EXPERIENCE</p>
              <h3 className="text-lg font-bold text-slate-900 mt-1">Life Beyond the Classroom</h3>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">A sample media card ready for real student-life and society footage.</p>
            </div>
          </article>

          <article className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80" alt="Students collaborating during a campus workshop" className="w-full aspect-video object-cover" loading="lazy" />
            <div className="p-5"><p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">CAMPUS COMMUNITY</p><h3 className="text-lg font-bold text-slate-900 mt-1">Collaboration in Action</h3><p className="text-sm text-slate-600 mt-2 leading-relaxed">A photo highlight from student workshops and collaborative campus activities.</p></div>
          </article>
          <article className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
            <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80" alt="Students celebrating at a university event" className="w-full aspect-video object-cover" loading="lazy" />
            <div className="p-5"><p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">STUDENT LIFE</p><h3 className="text-lg font-bold text-slate-900 mt-1">Moments to Remember</h3><p className="text-sm text-slate-600 mt-2 leading-relaxed">A sample photo from student celebrations, societies, and cultural events.</p></div>
          </article>
          <article className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80" alt="Speakers and participants at a conference" className="w-full aspect-video object-cover" loading="lazy" />
            <div className="p-5"><p className="text-[10px] font-bold uppercase tracking-wider text-blue-600">RESEARCH & IDEAS</p><h3 className="text-lg font-bold text-slate-900 mt-1">Conversations That Inspire</h3><p className="text-sm text-slate-600 mt-2 leading-relaxed">A sample image for guest lectures, conferences, and research presentations.</p></div>
          </article>
        </div>
      </section>

      {/* 6. SYNCHRONIZE CALENDAR & PROPOSE EVENT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left: Sync Calendar (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">
              <Sparkles className="w-3 h-3" />
              <span>REAL-TIME CALENDAR INTEGRATION</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              Synchronize Luminary Events With Your Academic Schedule
            </h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Never miss an institutional plenary, guest colloquium, or doctoral defense. Subscribe to our dynamic feed with tailored department filters directly in your favorite calendar application.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => alert("Downloading webcal feed for Apple iCal / Calendar...")}
              className="px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 flex items-center gap-2 cursor-pointer transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>Subscribe via Apple iCal</span>
            </button>

            <button
              onClick={() => alert("Generating Google Calendar feed link...")}
              className="px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 flex items-center gap-2 cursor-pointer transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              <span>Google Calendar Feed</span>
            </button>

            <button
              onClick={() => alert("RSS / WebCal feed copied to clipboard: https://luminary.edu/feed/events.ics")}
              className="px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 flex items-center gap-2 cursor-pointer transition-colors"
            >
              <Share2 className="w-3.5 h-3.5 text-indigo-600" />
              <span>WebCal / RSS</span>
            </button>
          </div>
        </div>

        {/* Right: Propose or Host an Event (5 cols) */}
        <div className="lg:col-span-5 bg-gradient-to-br from-indigo-50 to-blue-50/50 rounded-3xl p-8 border border-indigo-100 shadow-xs flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold">
                <PlusCircle className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-indigo-700 bg-indigo-100/70 px-2.5 py-1 rounded-full">
                Faculty & Student Groups
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-900">
              Propose or Host an Event
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed">
              Luminary departments and recognized research clusters can reserve spaces, request AV live-streaming services, and apply for institutional colloquium funding.
            </p>

            <div className="space-y-1.5 text-xs text-slate-600 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Auditorium, Atrium & Seminar Room Allocation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Global Virtual Keynote & Streaming Support</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowProposalModal(true)}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 text-white text-xs font-semibold shadow-xs transition-all cursor-pointer"
          >
            Submit Event Proposal
          </button>
        </div>

      </div>

      {/* Complete Digital Archive Modal */}
      {showArchiveModal && (
        <div className="fixed inset-0 z-[60] overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto p-5 sm:p-8 shadow-2xl relative">
            <button onClick={() => setShowArchiveModal(false)} aria-label="Close digital archive" className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer"><X className="w-5 h-5" /></button>
            <div className="pr-12 mb-7"><p className="text-[10px] font-bold uppercase tracking-widest text-blue-600">INSTITUTIONAL MEDIA LIBRARY</p><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Complete Digital Archive</h2><p className="text-sm text-slate-600 mt-2 max-w-2xl">Browse a larger collection of demo photographs from campus events, academic sessions, student activities, and research showcases.</p><span className="inline-flex mt-3 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-semibold">Sample archive · Demo content</span></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80", title: "International Symposium", category: "CONFERENCES" },
                { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80", title: "Student Collaboration", category: "CAMPUS LIFE" },
                { src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=80", title: "Campus Celebrations", category: "STUDENT EVENTS" },
                { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80", title: "Ideas & Innovation", category: "RESEARCH" },
                { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80", title: "Digital Learning", category: "ACADEMICS" },
                { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80", title: "University Gathering", category: "CAMPUS LIFE" },
                { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=80", title: "Guest Speaker Session", category: "LECTURES" },
                { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80", title: "Community Showcase", category: "EVENTS" }
              ].map((item) => (
                <article key={item.title} className="rounded-2xl overflow-hidden border border-slate-200 bg-white"><img src={item.src} alt={item.title} loading="lazy" className="w-full aspect-[4/3] object-cover" /><div className="p-4"><p className="text-[10px] font-bold tracking-wider text-blue-600">{item.category}</p><h3 className="font-bold text-slate-900 mt-1">{item.title}</h3></div></article>
              ))}
            </div>
            <div className="flex justify-end mt-7"><button onClick={() => setShowArchiveModal(false)} className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold cursor-pointer">Close archive</button></div>
          </div>
        </div>
      )}

      {/* Reservation Pass Modal */}
      {activeReservationEvent && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => {
                setActiveReservationEvent(null);
                setPassConfirmed(false);
              }}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {passConfirmed ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Pass Reserved Successfully</h3>
                <p className="text-xs text-slate-500">
                  Your digital holographic QR pass and auditorium seat assignment have been sent to your email.
                </p>
                <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 font-mono">
                  PASS CODE: LUM-SYM-2025-Q98
                </div>
                <button
                  onClick={() => {
                    setActiveReservationEvent(null);
                    setPassConfirmed(false);
                  }}
                  className="px-6 py-2 bg-blue-600 text-white rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setPassConfirmed(true);
                }}
                className="space-y-4"
              >
                <h3 className="text-lg font-bold text-slate-900">Reserve Academic Pass</h3>
                <p className="text-xs text-slate-500">
                  Complimentary admittance for all matriculated scholars, faculty, and accredited research fellows.
                </p>

                <div className="space-y-1 text-xs">
                  <label className="font-semibold text-slate-700">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Julian Vane"
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800"
                  />
                </div>

                <div className="space-y-1 text-xs">
                  <label className="font-semibold text-slate-700">Institutional Email</label>
                  <input
                    type="email"
                    required
                    placeholder="scholar@university.edu"
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800"
                  />
                </div>

                <div className="space-y-1 text-xs">
                  <label className="font-semibold text-slate-700">Attendance Format</label>
                  <select className="w-full p-2.5 rounded-xl border border-slate-200 bg-white text-slate-800">
                    <option>In-Person Seat (Turing Grand Auditorium)</option>
                    <option>Virtual Interactive Holographic Simulcast</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Confirm Pass Reservation
                </button>
              </form>
            )}

          </div>
        </div>
      )}

      {/* Propose Event Modal */}
      {showProposalModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => {
                setShowProposalModal(false);
                setProposalSubmitted(false);
              }}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {proposalSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Event Proposal Submitted</h3>
                <p className="text-xs text-slate-500">
                  The Curricular Governance Committee reviews colloquium submissions on rolling 72-hour intervals.
                </p>
                <button
                  onClick={() => {
                    setShowProposalModal(false);
                    setProposalSubmitted(false);
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
                  setProposalSubmitted(true);
                }}
                className="space-y-4"
              >
                <h3 className="text-lg font-bold text-slate-900">Submit Event Proposal</h3>
                <p className="text-xs text-slate-500">
                  Propose a student-faculty colloquium, visiting scholar talk, or hackathon.
                </p>

                <div className="space-y-1 text-xs">
                  <label className="font-semibold text-slate-700">Event Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Workshop on Quantum Error Correction"
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800"
                  />
                </div>

                <div className="space-y-1 text-xs">
                  <label className="font-semibold text-slate-700">Host Department or Student Guild</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Robotics Foundry / CS Guild"
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800"
                  />
                </div>

                <div className="space-y-1 text-xs">
                  <label className="font-semibold text-slate-700">Estimated Attendees</label>
                  <input
                    type="number"
                    required
                    defaultValue={60}
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-slate-800"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold cursor-pointer"
                >
                  Submit for Approval
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
