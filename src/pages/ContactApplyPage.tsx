import React, { useState } from 'react';
import { FAQS } from '../data/mockData.ts';
import { CandidateApplication } from '../types.ts';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  MapPin, 
  Upload, 
  Lock, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  Compass, 
  Train, 
  ShieldCheck, 
  Send,
  Building,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ContactApplyPageProps {
  onApplicationCreated: (newApp: CandidateApplication) => void;
  preselectedProgramId?: string;
}

export const ContactApplyPage: React.FC<ContactApplyPageProps> = ({
  onApplicationCreated,
  preselectedProgramId
}) => {
  // Enquiry form state
  const [enquiryName, setEnquiryName] = useState('');
  const [enquiryEmail, setEnquiryEmail] = useState('');
  const [enquiryPhone, setEnquiryPhone] = useState('');
  const [enquiryProgram, setEnquiryProgram] = useState(preselectedProgramId || 'cs-ai');
  const [enquiryMessage, setEnquiryMessage] = useState('');
  const [enquirySent, setEnquirySent] = useState(false);

  // Application form state
  const [firstName, setFirstName] = useState('Julian');
  const [lastName, setLastName] = useState('Vane');
  const [dob, setDob] = useState('2001-04-18');
  const [country, setCountry] = useState('United States');
  const [degreeLevel, setDegreeLevel] = useState("Master's Program (M.Sc. / M.Des.)");
  const [department, setDepartment] = useState('Artificial Intelligence & Robotics');
  const [priorQualification, setPriorQualification] = useState('B.S. in Computer Science');
  const [gpa, setGpa] = useState('3.88 / 4.0');
  const [uploadedFiles, setUploadedFiles] = useState<string[]>(['Transcript_Verified_2024.pdf', 'Statement_of_Purpose_Vane.pdf']);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [submittedCode, setSubmittedCode] = useState('');

  // Accordion FAQ state
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySent(true);
    setTimeout(() => setEnquirySent(false), 5000);
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const appCode = `APP-${Math.floor(10000 + Math.random() * 90000)}`;
    setSubmittedCode(appCode);
    setApplicationSubmitted(true);

    const newApp: CandidateApplication = {
      id: `app-${Date.now()}`,
      applicationCode: appCode,
      applicantName: `${firstName} ${lastName}`.trim(),
      degreeTrack: `${degreeLevel.split(' ')[0]} ${department}`,
      evaluationMetric: `${gpa} (${uploadedFiles.length} Documents)`,
      gpa: gpa,
      loggedTime: 'Just Now',
      status: 'Under Review',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      department: department,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@outlook.com`,
      notes: `Direct candidate application for ${degreeLevel} in ${department}.`
    };

    onApplicationCreated(newApp);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* 1. PAGE HEADER */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
          • Admissions Advisory & Visitor Desk 2025–2026
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Connect with Admissions & Campus Administration
        </h1>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          We are here to assist prospective students, academic collaborators, and visitors. Reach our dedicated departmental officers or begin your direct candidacy.
        </p>
      </div>

      {/* 2. FOUR CONTACT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Telephone */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
              <Phone className="w-5 h-5" />
            </div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              DIRECT TELEPHONE
            </div>
            <div className="text-base font-extrabold text-slate-900 mt-0.5">
              +1 (617) 555-0198
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Mon–Fri: 8:00 AM – 5:00 PM EST
            </div>
          </div>
          <button 
            onClick={() => alert("Initiating telephone bridge to Admissions Desk: +1 (617) 555-0198")}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer pt-2 border-t border-slate-100"
          >
            <span>Call now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Email */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              ADMISSIONS DESK
            </div>
            <div className="text-base font-extrabold text-slate-900 mt-0.5 truncate">
              admissions@luminary....
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Guaranteed reply within 24 business hours
            </div>
          </div>
          <button 
            onClick={() => alert("Composing direct institutional email dispatch to admissions@luminary.edu")}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer pt-2 border-t border-slate-100"
          >
            <span>Compose email</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* WhatsApp */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              INSTANT WHATSAPP
            </div>
            <div className="text-base font-extrabold text-slate-900 mt-0.5">
              +1 (617) 555-0199
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Direct Academic Counselor messaging
            </div>
          </div>
          <button 
            onClick={() => alert("Launching WhatsApp secure messaging with Academic Counselor...")}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer pt-2 border-t border-slate-100"
          >
            <span>Start chat</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Campus Address */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between space-y-4">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-3">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              CAMPUS ADDRESS
            </div>
            <div className="text-base font-extrabold text-slate-900 mt-0.5">
              840 Academic Oval
            </div>
            <div className="text-xs text-slate-500 mt-1">
              Tech Crest Heights, MA 02138
            </div>
          </div>
          <div className="text-xs font-semibold text-slate-600 pt-2 border-t border-slate-100 flex items-center gap-1">
            <span>Building B, Room 102</span>
            <Building className="w-3.5 h-3.5 text-slate-400" />
          </div>
        </div>

      </div>

      {/* 3. TWO COLUMNS: ENQUIRY FORM & FULL CANDIDACY APPLICATION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Admission Enquiry (4.5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              IMMEDIATE ASSISTANCE
            </div>
            <span className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
              Info Pack
            </span>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900">Admission Enquiry</h2>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Have questions regarding curricula, faculty labs, or tuition fee waivers? Send an inquiry and receive our comprehensive syllabus package.
            </p>
          </div>

          {enquirySent ? (
            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <div className="font-bold text-emerald-900 text-sm">Enquiry Dispatched</div>
              <p className="text-xs text-emerald-700">
                Our admissions advisor has received your query and sent syllabus materials to your email.
              </p>
            </div>
          ) : (
            <form onSubmit={handleEnquirySubmit} className="space-y-4 text-xs">
              
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Full Name</label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. Elena Rostova"
                    value={enquiryName}
                    onChange={(e) => setEnquiryName(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500 text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Institutional / Personal Email</label>
                <input
                  type="email"
                  required
                  placeholder="e.rostova@cantab.net"
                  value={enquiryEmail}
                  onChange={(e) => setEnquiryEmail(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500 text-slate-800"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Phone Number (with country code)</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 012-3456"
                  value={enquiryPhone}
                  onChange={(e) => setEnquiryPhone(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500 text-slate-800"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Program of Interest</label>
                <select
                  value={enquiryProgram}
                  onChange={(e) => setEnquiryProgram(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500 text-slate-800"
                >
                  <option value="cs-ai">B.S. Artificial Intelligence & Autonomous Robotics</option>
                  <option value="arch-sust">M.S. Sustainable Architecture & Regenerative Habitats</option>
                  <option value="des-ia">B.Des. Interaction Design & Human Experience</option>
                  <option value="mba-tech">M.B.A. Technology & Global Enterprise</option>
                  <option value="bio-eng">B.S. Biomedical Engineering & Genomics</option>
                  <option value="cog-phil">B.A. Cognitive Science & Philosophy</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">Message / Question</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your background, prerequisites, or specific lab interests..."
                  value={enquiryMessage}
                  onChange={(e) => setEnquiryMessage(e.target.value)}
                  required
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500 text-slate-800"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Submit Enquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>

            </form>
          )}

        </div>

        {/* Right Column: Start Your Degree Application (7.5 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-blue-500 shadow-xl space-y-8 relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                FALL 2025 ADMISSIONS COHORT
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-0.5">
                Start Your Degree Application
              </h2>
            </div>
            <span className="self-start sm:self-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              • Rolling Deadlines
            </span>
          </div>

          <p className="text-xs text-slate-500 leading-relaxed">
            Submit your academic candidacy directly to the Luminary Registry. All submissions are verified via end-to-end credential protocols.
          </p>

          {applicationSubmitted ? (
            <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-2xl border border-blue-200 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Candidacy Dossier Submitted
                </h3>
                <div className="text-xs text-blue-600 font-mono mt-1 font-bold">
                  REGISTRY CODE: {submittedCode}
                </div>
              </div>

              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{firstName} {lastName}</span>. Your dossier has been logged into the Luminary Admissions Queue. The Admissions Committee reviews candidates on a 3.8-day turnaround cycle.
              </p>

              <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 text-left max-w-sm mx-auto space-y-1">
                <div>• <span className="font-semibold">Track:</span> {degreeLevel}</div>
                <div>• <span className="font-semibold">Department:</span> {department}</div>
                <div>• <span className="font-semibold">GPA Metric:</span> {gpa}</div>
                <div>• <span className="font-semibold">Documents:</span> {uploadedFiles.length} Verified Files</div>
              </div>

              <button
                onClick={() => setApplicationSubmitted(false)}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold cursor-pointer"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleApplicationSubmit} className="space-y-8">
              
              {/* STEP 1: Personal Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                    1
                  </span>
                  <span>Personal Details</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">First Name</label>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500 text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Last Name</label>
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500 text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Date of Birth</label>
                    <input
                      type="date"
                      required
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500 text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Country of Citizenship</label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500 text-slate-800"
                    >
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Canada</option>
                      <option>Germany</option>
                      <option>Singapore</option>
                      <option>India</option>
                      <option>Japan</option>
                      <option>Switzerland</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* STEP 2: Degree Pathway & Qualification */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                    2
                  </span>
                  <span>Degree Pathway & Qualification</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Degree Level</label>
                    <select
                      value={degreeLevel}
                      onChange={(e) => setDegreeLevel(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500 text-slate-800"
                    >
                      <option>Master's Program (M.Sc. / M.Des.)</option>
                      <option>Bachelor of Science / Design (4 Yrs)</option>
                      <option>Doctoral Fellowship (Ph.D.)</option>
                      <option>Executive Tech MBA</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Academic Department</label>
                    <select
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500 text-slate-800"
                    >
                      <option>Artificial Intelligence & Robotics</option>
                      <option>Sustainable Architecture & Urban Systems</option>
                      <option>Interaction Design & Human Experience</option>
                      <option>Biomedical Engineering & Genomics</option>
                      <option>Cognitive Science & Philosophy</option>
                      <option>Technology & Global Enterprise</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Highest Prior Qualification</label>
                    <input
                      type="text"
                      required
                      value={priorQualification}
                      onChange={(e) => setPriorQualification(e.target.value)}
                      placeholder="e.g. B.S. in Computer Science"
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500 text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">Cumulative GPA / Percentage</label>
                    <input
                      type="text"
                      required
                      value={gpa}
                      onChange={(e) => setGpa(e.target.value)}
                      placeholder="3.88 / 4.0 or First Class"
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-blue-500 text-slate-800"
                    />
                  </div>
                </div>
              </div>

              {/* STEP 3: Dossier & Supporting Documents */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                    3
                  </span>
                  <span>Dossier & Supporting Documents</span>
                </div>

                <p className="text-xs text-slate-500">
                  Please include academic transcripts and your Statement of Purpose (PDF format, max 25MB each).
                </p>

                {/* Drag and Drop Box */}
                <div 
                  onClick={() => {
                    const newDoc = prompt("Attach file name for application dossier:", "Research_Abstract_2024.pdf");
                    if (newDoc) setUploadedFiles(prev => [...prev, newDoc]);
                  }}
                  className="border-2 border-dashed border-blue-200 hover:border-blue-400 bg-blue-50/40 rounded-2xl p-6 text-center cursor-pointer transition-colors space-y-2"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                    <Upload className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-semibold text-slate-800">
                    <span className="text-blue-600 font-bold">Drag & drop official documents</span>, or browse local files
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Supported formats: PDF, DOCX, ZIP (Encrypted on upload)
                  </div>
                </div>

                {/* Attached Files List */}
                {uploadedFiles.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    {uploadedFiles.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                        <div className="flex items-center gap-2">
                          <FileText className="w-3.5 h-3.5 text-blue-600" />
                          <span className="font-medium truncate">{file}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setUploadedFiles(uploadedFiles.filter((_, i) => i !== idx))}
                          className="text-[11px] text-slate-400 hover:text-rose-500 font-semibold"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Security notice & submit button */}
              <div className="pt-2 space-y-4">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Your submission is recorded on the encrypted academic candidate ledger.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-blue-700 to-indigo-600 hover:from-blue-800 hover:to-indigo-700 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Lock className="w-4 h-4" />
                  <span>Submit Full Candidacy Application</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>

      {/* 4. INTERACTIVE CAMPUS & VISITOR MAP */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xs space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
              URBAN CAMPUS GEOGRAPHY
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-0.5">
              Interactive Campus & Visitor Map
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Explore the architectural core of the institute. Admissions visits begin at Turing Hall, with dedicated parking access at the West Gate Concourse.
            </p>
          </div>

          <div className="px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 self-start sm:self-center">
            🕒 Visitor Center: Mon–Sat 9AM–6PM
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Map Graphic (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200 shadow-md aspect-16/10 relative bg-slate-100 group">
            {/* Real Boston campus map satellite backdrop */}
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=80"
              alt="Boston Academic Campus Map"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-blue-950/20 backdrop-blur-[0.5px]"></div>

            {/* Map Interactive Pins */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-slate-800 shadow-md flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
              <span>Main Academic Quadrangle</span>
            </div>

            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-emerald-700 shadow-md flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Open to Campus Guests</span>
            </div>

            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-700">
                <Compass className="w-4 h-4" />
                <span>Main Admissions Center</span>
              </div>
              <div className="text-xs text-slate-600 mt-1">
                Turing Hall, Level 1. Guided campus orientations depart daily at 10:00 AM & 2:30 PM.
              </div>
            </div>

          </div>

          {/* Right Landmarks & Commuter info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-3">
              <h3 className="font-bold text-slate-900 text-sm">Key Campus Landmarks</h3>
              
              <div className="space-y-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-0.5">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-blue-600" />
                    <span>Central Quad & Turing Hall</span>
                  </div>
                  <div className="text-slate-500 text-[11px]">
                    General Admissions, Registrar, Chancellor Hall
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-0.5">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Innovation Pavilion & Nanotech Core</span>
                  </div>
                  <div className="text-slate-500 text-[11px]">
                    Cleanrooms, Robotics Arena, Quantum Lab 4
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-0.5">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-purple-600" />
                    <span>Vannevar Bush Research Library</span>
                  </div>
                  <div className="text-slate-500 text-[11px]">
                    Open 24/7 with Luminary Scholar Card
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2 text-xs">
              <div className="font-bold text-slate-800 text-[11px] uppercase tracking-wider">
                COMMUTER TRANSIT & PARKING
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Train className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Subway: Red Line to Academic Station (Exit 2B)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Visitor Parking: North Deck, $4/hr validated at Desk</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">
            CANDIDATE CLARITY
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Everything you need to know about criteria, funding, and campus visitation.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = expandedFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setExpandedFaq(isOpen ? null : index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:text-blue-600 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-blue-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 6. ADMISSIONS ACCOUNTABILITY PLEDGE BANNER */}
      <div className="rounded-3xl bg-blue-50 border border-blue-200/80 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-base">Admissions Accountability Pledge</h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Every candidate portfolio is reviewed by a minimum of three tenure-track faculty committee members. Anonymous holistic scoring safeguards equitable academic evaluation.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className="text-right hidden md:block">
            <div className="text-[10px] text-slate-400 uppercase font-semibold">Regular Office Hours</div>
            <div className="text-xs font-bold text-slate-800">08:00 – 17:00 EST</div>
          </div>
          <button
            onClick={() => alert("Connecting with Admissions Dean: Dr. Elena Vance")}
            className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 shadow-xs cursor-pointer"
          >
            Speak with a Dean
          </button>
        </div>
      </div>

    </div>
  );
};
