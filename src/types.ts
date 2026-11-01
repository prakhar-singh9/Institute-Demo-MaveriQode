export type NavTab = 
  | 'home' 
  | 'about' 
  | 'academics' 
  | 'faculty' 
  | 'events' 
  | 'placements' 
  | 'contact';

export type AdminView = 
  | 'dashboard' 
  | 'programs' 
  | 'applications' 
  | 'faculty' 
  | 'events' 
  | 'settings';

export interface Program {
  id: string;
  code: string;
  title: string;
  department: string;
  deptCategory: 'Engineering & AI' | 'Design & Media' | 'Humanities & Social Sciences' | 'Business & Analytics';
  degreeLevel: string; // 'Undergraduate (4 Yrs)', 'Graduate (2 Yrs)', etc.
  duration: string;
  school: string;
  cohortCapacity: number;
  enrolled: number;
  fillRatePercent: number;
  status: 'Active' | 'Archived';
  facultyChair: {
    name: string;
    avatar: string;
    title: string;
  };
  accreditation: string;
  description: string;
  coreFocusAreas: string[];
  syllabusOverview: {
    term: string;
    courses: string[];
  }[];
}

export interface FacultyMember {
  id: string;
  name: string;
  degrees: string;
  department: 'Computer Science' | 'Architecture' | 'Business School' | 'Life Sciences' | 'Design' | 'Humanities & Sciences';
  schoolName: string;
  academicTitle: string;
  researchFocus: string;
  officeLocation: string;
  officeHours: string;
  publicationsCount: number;
  avatar: string;
  contactEmail: string;
  bio: string;
}

export interface AcademicEvent {
  id: string;
  title: string;
  category: 'Robotics & AI' | 'Urban Ecology' | 'Neuroscience' | 'Ventures' | 'General';
  typeTag: string; // 'Hackathon', 'Colloquium', 'Distinguished Lecture', 'Venture Showcase'
  date: string;
  time: string;
  venue: string;
  seatsTotal: number;
  seatsBooked: number;
  description: string;
  speaker?: string;
  image: string;
  statusTag?: string;
  isFlagship?: boolean;
}

export interface EventRecap {
  id: string;
  dateBadge: string;
  tag: string;
  title: string;
  summary: string;
  linkText: string;
  image: string;
}

export interface PlacementStory {
  id: string;
  name: string;
  degreeTrack: string;
  classYear?: string;
  currentRole: string;
  company: string;
  quote: string;
  badgeLabel: string;
  linkAction: string;
  avatar: string;
}

export interface CandidateApplication {
  id: string;
  applicationCode: string;
  applicantName: string;
  degreeTrack: string;
  evaluationMetric: string;
  gpa: string;
  loggedTime: string;
  status: 'Interview Scheduled' | 'Approved' | 'Under Review' | 'Waitlist Tier 1';
  avatar: string;
  department: string;
  email: string;
  notes?: string;
}

export interface SalaryMatrixEntry {
  id: string;
  name: string;
  medianBaseSalary: number;
  topQuartileSalary: number;
  recruiters: string[];
  note: string;
}
