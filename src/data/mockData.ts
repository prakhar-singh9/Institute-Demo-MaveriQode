import { 
  Program, 
  FacultyMember, 
  AcademicEvent, 
  EventRecap, 
  PlacementStory, 
  CandidateApplication,
  SalaryMatrixEntry 
} from '../types.ts';

export const INITIAL_PROGRAMS: Program[] = [
  {
    id: 'cs-ai',
    code: 'CS-101',
    title: 'B.S. Artificial Intelligence & Autonomous Robotics',
    department: 'Computer Science',
    deptCategory: 'Engineering & AI',
    degreeLevel: 'Undergraduate (4 Yrs)',
    duration: '4 Years',
    school: 'School of Computing',
    cohortCapacity: 120,
    enrolled: 118,
    fillRatePercent: 98.3,
    status: 'Active',
    facultyChair: {
      name: 'Dr. Marcus Vance',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      title: 'Professor & Chair of Artificial Intelligence'
    },
    accreditation: 'ABET Accredited',
    description: 'Master neural architectures, reinforcement learning algorithms, human-robot interaction paradigms, and hardware cybernetics with hands-on lab access from semester one.',
    coreFocusAreas: ['Computer Vision', 'Embedded ROS', 'Ethics & Law', 'Neural Networks', 'MLOps'],
    syllabusOverview: [
      {
        term: 'Year 1: Mathematical Foundations & Cybernetic Systems',
        courses: ['CS 110: Discrete Computational Structures', 'ENG 120: Cybernetic Hardware & Actuators', 'MATH 201: Multivariable Optimization for Deep Learning', 'PHIL 105: Ethics in Autonomous Agency']
      },
      {
        term: 'Year 2: Algorithmic Intelligence & Perception',
        courses: ['CS 220: Real-Time Computer Vision & SLAM', 'ROB 240: Kinematics & Embedded ROS 2', 'CS 280: Deep Neural Architectures', 'STAT 215: Stochastic Processes in Robotics']
      },
      {
        term: 'Year 3: Multi-Agent Systems & Co-op Practicum',
        courses: ['CS 330: Multi-Agent Reinforcement Learning', 'ROB 360: Human-Robot Teaming Protocols', 'IND 390: Mandatory 6-Month Industry Co-op', 'LAW 310: Algorithmic Governance & Policy']
      },
      {
        term: 'Year 4: Autonomous Capstone & Defense',
        courses: ['CS 490: Autonomous Fleet Orchestration', 'RES 495: Senior Capstone Laboratory Defense', 'CS 498: Frontier AI Safety & Alignment']
      }
    ]
  },
  {
    id: 'arch-sust',
    code: 'ARCH-502',
    title: 'M.S. Sustainable Architecture & Regenerative Habitats',
    department: 'Architecture',
    deptCategory: 'Engineering & AI',
    degreeLevel: 'Graduate (2 Yrs)',
    duration: '2 Years',
    school: 'Built Environment',
    cohortCapacity: 60,
    enrolled: 58,
    fillRatePercent: 96.6,
    status: 'Active',
    facultyChair: {
      name: 'Dr. Sarah Lin-Alvarez',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      title: 'Associate Professor of Sustainable Architecture'
    },
    accreditation: 'LEED Co-Certified',
    description: 'Address planetary climate challenges using computational fluid dynamics, circular biomaterials, urban ecological resilience models, and carbon-negative building envelopes.',
    coreFocusAreas: ['Parametric BIM', 'Net-Zero Envelopes', 'Urban Geo-Tech', 'Smart Microgrids', 'Carbon Auditing'],
    syllabusOverview: [
      {
        term: 'Semester 1: Thermodynamics & Ecological Computation',
        courses: ['ARCH 510: Computational Fluid Dynamics for High-Performance Envelopes', 'BIO 520: Bio-Derived Structural Composites', 'ARCH 530: Parametric Building Information Modeling']
      },
      {
        term: 'Semester 2: Regenerative Urban Systems',
        courses: ['ARCH 550: Urban Microclimates & Resilience Engineering', 'ENV 560: Carbon Auditing & LCA Methodologies', 'ARCH 570: Studio: Post-Carbon Living Prototypes']
      },
      {
        term: 'Semester 3: Field Deployment & Studio Practicum',
        courses: ['ARCH 610: Off-Grid Microgrids & Circular Water Infrastructure', 'ARCH 620: Advanced Geo-Engineering for Coastal Cities']
      },
      {
        term: 'Semester 4: Master Thesis & Exhibition',
        courses: ['ARCH 695: Graduate Thesis Colloquium & Physical Model Defense']
      }
    ]
  },
  {
    id: 'des-ia',
    code: 'DES-204',
    title: 'B.Des. Interaction Design & Human Experience',
    department: 'Design',
    deptCategory: 'Design & Media',
    degreeLevel: 'Undergraduate (4 Yrs)',
    duration: '3.5 - 4 Years',
    school: 'Institute of Design',
    cohortCapacity: 80,
    enrolled: 75,
    fillRatePercent: 93.7,
    status: 'Active',
    facultyChair: {
      name: 'Prof. Julian K. Thorne',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      title: 'Chair of Interactive Design'
    },
    accreditation: 'Studio Intensive',
    description: 'Fuse spatial computing, real-time procedural environments, spatial audio systems, and expressive human experience design for emerging narrative formats.',
    coreFocusAreas: ['Spatial UI & XR', 'Haptic Systems', 'Creative Coding', 'Design Research', 'Sensory Ergonomics'],
    syllabusOverview: [
      {
        term: 'Foundation Studio: Form, Perception & Interaction',
        courses: ['DES 101: Sensory Ergonomics & Perception', 'DES 105: Creative Computation with WebGL & Shaders', 'DES 112: Typography in Dynamic Environments']
      },
      {
        term: 'Spatial & Haptic Environments',
        courses: ['DES 210: Spatial Computing for Apple VisionOS & XR Platforms', 'DES 225: Haptic Feedback Hardware Prototyping', 'DES 240: Interactive Audio & Generative Soundscapes']
      },
      {
        term: 'Speculative Design & Industry Studio',
        courses: ['DES 315: Speculative Technology & Critical Design', 'DES 350: Corporate Collaborative Studio', 'DES 380: Human-AI Interface Governance']
      },
      {
        term: 'Graduation Exhibition & Monograph',
        courses: ['DES 490: Degree Exhibition Monograph & Interactive Installation Defense']
      }
    ]
  },
  {
    id: 'mba-tech',
    code: 'MBA-801',
    title: 'M.B.A. Technology & Global Enterprise',
    department: 'Business School',
    deptCategory: 'Business & Analytics',
    degreeLevel: 'Graduate (2 Yrs)',
    duration: '2 Years',
    school: 'Management School',
    cohortCapacity: 90,
    enrolled: 90,
    fillRatePercent: 100,
    status: 'Active',
    facultyChair: {
      name: 'Dr. Henrik Lindqvist',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      title: 'Professor of Technology Economics'
    },
    accreditation: '100% Full + Waitlist',
    description: 'Preparing strategic innovators to lead deep-tech commercialization, govern machine-learning compliance, and engineer resilient multi-continental logistics.',
    coreFocusAreas: ['AI Venture Studio', 'Cross-Border Policy', 'Tech Valuation', 'Frontier IP Structuring', 'Sovereign Compute Strategy'],
    syllabusOverview: [
      {
        term: 'Term 1: Deep-Tech Economics & Venture Architecture',
        courses: ['MBA 810: High-Tech Enterprise Valuation & Capital Formation', 'MBA 820: Quantitative Modeling & Decision Theory', 'MBA 830: Global Supply Chains in Geopolitical Friction']
      },
      {
        term: 'Term 2: Platform Monopolies & Product Strategy',
        courses: ['MBA 840: Decentralized Governance & Platform Economics', 'MBA 850: Commercializing Frontier IP & Dual-Use Tech', 'MBA 860: Venture Studio Practicum I']
      },
      {
        term: 'Term 3: Global Immersion & Fund Allocation',
        courses: ['MBA 910: International Technology Policy & Antitrust', 'MBA 920: Institutional Seed Fund Management & Term Sheets', 'MBA 930: Venture Studio Practicum II']
      },
      {
        term: 'Term 4: Executive Boardroom Simulation',
        courses: ['MBA 990: Executive Capstone: Institutional Spin-off Launch']
      }
    ]
  },
  {
    id: 'bio-eng',
    code: 'BIO-310',
    title: 'B.S. Biomedical Engineering & Genomics',
    department: 'Life Sciences',
    deptCategory: 'Engineering & AI',
    degreeLevel: 'Undergraduate (4 Yrs)',
    duration: '4 Years',
    school: 'Life Sciences',
    cohortCapacity: 70,
    enrolled: 68,
    fillRatePercent: 97.1,
    status: 'Active',
    facultyChair: {
      name: 'Dr. Amara Okafor',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      title: 'Professor of Genomics & Bioengineering'
    },
    accreditation: 'Lab Practicum Req.',
    description: 'Engineered at the interface of computational synthetic biology, nanoscale diagnostic chips, CRISPR vector programming, and regenerative tissue mechanics.',
    coreFocusAreas: ['Gene Engineering', 'Nanomedicine', 'Bio-Sensors', 'Synthetic Genomics', 'Tissue Bioprinting'],
    syllabusOverview: [
      {
        term: 'Molecular Foundations & Quantitative Biology',
        courses: ['BIO 101: Cellular Mechanics & Thermodynamics', 'CHEM 120: Organic Chemistry for Biomacromolecules', 'BIO 150: Genomic Sequence Analysis & Algorithms']
      },
      {
        term: 'Synthetic Biology & Nanoscale Delivery',
        courses: ['BIO 220: Synthetic Gene Networks & Logic Gates', 'BIO 240: Nanoscale Drug Delivery & Lipid Nanoparticles', 'ENG 260: Microfluidic Lab-on-a-Chip Systems']
      },
      {
        term: 'Regenerative Medicine & Tissue Printing',
        courses: ['BIO 330: 3D Bioprinting & Biomimetic Scaffolds', 'BIO 360: CRISPR Delivery Mechanisms & Cas-Variants', 'ETH 310: Bioethics in Human Germline Modification']
      },
      {
        term: 'Clinical Translation Capstone',
        courses: ['BIO 495: Senior Translational Research Defense at Franklin BioLab']
      }
    ]
  },
  {
    id: 'cog-phil',
    code: 'COG-105',
    title: 'B.A. Cognitive Science & Philosophy',
    department: 'Humanities & Sciences',
    deptCategory: 'Humanities & Social Sciences',
    degreeLevel: 'Undergraduate (4 Yrs)',
    duration: '4 Years',
    school: 'Humanities & Sciences',
    cohortCapacity: 50,
    enrolled: 44,
    fillRatePercent: 88.0,
    status: 'Active',
    facultyChair: {
      name: 'Dr. Priya Sharma',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
      title: 'Associate Professor of Cognitive Neuroscience'
    },
    accreditation: 'Interdisciplinary Core',
    description: 'Investigating consciousness models, generative linguistic structures, phenomenology of computation, and philosophical guardrails for artificial superintelligence.',
    coreFocusAreas: ['Philosophy of AI', 'Semantics & Logic', 'Neuro-Phenomenology', 'Synthetic Consciousness', 'Cognitive Ergonomics'],
    syllabusOverview: [
      {
        term: 'Epistemology & Cognitive Paradigms',
        courses: ['PHIL 110: Mind, Brain & Intentionality', 'COG 120: Foundations of Cognitive Architecture', 'LING 140: Formal Semantics & Computational Linguistics']
      },
      {
        term: 'Neural Computation & Selfhood',
        courses: ['NEUR 230: Computational Neural Mapping', 'PHIL 250: Philosophy of Artificial General Intelligence', 'COG 270: Embodied & Extended Cognition']
      },
      {
        term: 'Sentience Governance & Synthetic Agents',
        courses: ['PHIL 320: Moral Status of Synthetic Conscious Systems', 'COG 350: Brain-Computer Interface Phenomenology', 'CS 385: Neuro-Symbolic AI & Theory of Mind']
      },
      {
        term: 'Senior Dissertation Colloquium',
        courses: ['PHIL 495: Interdisciplinary Baccalaureate Defense']
      }
    ]
  }
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'marcus-vance',
    name: 'Dr. Marcus Vance',
    degrees: 'Ph.D., MIT',
    department: 'Computer Science',
    schoolName: 'School of Computing',
    academicTitle: 'Professor & Chair of Artificial Intelligence',
    researchFocus: 'Autonomous Robotics & Multi-Agent Reinforcement Learning',
    officeLocation: 'Alan Turing Hall, Suite 402',
    officeHours: 'Tue/Thu 14:00 - 16:30',
    publicationsCount: 64,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    contactEmail: 'm.vance@luminary.edu',
    bio: 'Director of the Autonomous Swarms Laboratory. Recipient of the IEEE Robotics Pioneer Award for work on multi-agent communication under bandwidth constraints.'
  },
  {
    id: 'sarah-lin',
    name: 'Dr. Sarah Lin-Alvarez',
    degrees: 'Ph.D., ETH Zurich',
    department: 'Architecture',
    schoolName: 'Built Environment',
    academicTitle: 'Associate Professor of Sustainable Architecture',
    researchFocus: 'Net-Zero Circular Construction Materials & Biomimicry',
    officeLocation: 'Zaha Hadid Complex, Studio 210',
    officeHours: 'Mon/Wed 10:00 - 12:00',
    publicationsCount: 42,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    contactEmail: 's.lin-alvarez@luminary.edu',
    bio: 'Pioneered computational models for bio-mineralized carbon capture structures now licensed across 14 municipal sustainable housing initiatives.'
  },
  {
    id: 'julian-thorne',
    name: 'Prof. Julian K. Thorne',
    degrees: 'M.Des., Royal College of Art',
    department: 'Design',
    schoolName: 'Institute of Design',
    academicTitle: 'Chair of Interactive Design',
    researchFocus: 'Spatial Interfaces & Tangible Haptic Feedback Protocols',
    officeLocation: 'Media Pavilion, Lab 105',
    officeHours: 'Wednesday 13:00 - 17:00',
    publicationsCount: 38,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    contactEmail: 'j.thorne@luminary.edu',
    bio: 'Former principal interaction director at Teenage Engineering and Apple Special Projects. Focuses on physical tactile affordances in virtual spaces.'
  },
  {
    id: 'amara-okafor',
    name: 'Dr. Amara Okafor',
    degrees: 'Ph.D., Stanford University',
    department: 'Life Sciences',
    schoolName: 'School of Life Sciences',
    academicTitle: 'Professor of Genomics & Bioengineering',
    researchFocus: 'CRISPR Therapeutic Delivery & Synthetic Genome Assembly',
    officeLocation: 'Franklin BioLab, Wing 318',
    officeHours: 'Mon/Fri 11:00 - 13:00',
    publicationsCount: 89,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    contactEmail: 'a.okafor@luminary.edu',
    bio: 'Leads the Franklin BioLab consortium. Holds 18 patents on non-viral lipid nanoparticle transport vectors targeting hereditary neuro-muscular conditions.'
  },
  {
    id: 'henrik-lindqvist',
    name: 'Dr. Henrik Lindqvist',
    degrees: 'Ph.D., University of Oxford',
    department: 'Business School',
    schoolName: 'School of Management',
    academicTitle: 'Professor of Technology Economics',
    researchFocus: 'Decentralized Governance & Digital Platform Monopolies',
    officeLocation: 'Keynes Hall, Tower 512',
    officeHours: 'Thursday 09:30 - 12:30',
    publicationsCount: 51,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    contactEmail: 'h.lindqvist@luminary.edu',
    bio: 'Special advisor to the European Competition Commission on algorithmic pricing and foundation model vertical integration.'
  },
  {
    id: 'priya-sharma',
    name: 'Dr. Priya Sharma',
    degrees: 'Ph.D., Columbia University',
    department: 'Humanities & Sciences',
    schoolName: 'Humanities & Sciences',
    academicTitle: 'Associate Professor of Cognitive Neuroscience',
    researchFocus: 'Computational Neural Mapping & Synthetic Consciousness Models',
    officeLocation: 'Broca Institute, Center 204',
    officeHours: 'Tuesday 15:00 - 18:00',
    publicationsCount: 47,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    contactEmail: 'p.sharma@luminary.edu',
    bio: 'Investigates neuro-phenomenological signatures of subjective experience in bio-hybrid neuronal networks.'
  }
];

export const ACADEMIC_EVENTS: AcademicEvent[] = [
  {
    id: 'quantum-symposium',
    title: '2025 International Quantum & Ethical AI Symposium',
    category: 'General',
    typeTag: 'Flagship Symposium',
    date: 'Nov 14–16, 2025',
    time: '3 Full Days • EDT',
    venue: 'Turing Grand (Auditorium & Meta-Sphere)',
    seatsTotal: 450,
    seatsBooked: 412,
    speaker: 'Dr. Aris Thorne (Nobel Laureate in Physics)',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    description: 'Uniting theoretical physicists, computational ethicists, and policy architects to reconcile quantum supremacy with planetary alignment paradigms. Featuring 48 keynote papers and 12 live interactive lab proofs.',
    isFlagship: true
  },
  {
    id: 'robotics-hackathon',
    title: 'Annual Autonomous Robotics Showcase & Hackathon',
    category: 'Robotics & AI',
    typeTag: 'Hackathon',
    date: 'Oct 28, 2025',
    time: '09:00 - 18:00',
    venue: 'Robotics Foundry Lab • Bay 4',
    seatsTotal: 200,
    seatsBooked: 140,
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80',
    description: 'Demonstrations from 30 collegiate teams presenting novel locomotion, aerial swarming, and real-time obstacle avoidance judged by tier-one venture investors.'
  },
  {
    id: 'urban-ecology',
    title: 'Global Urban Ecology & Sustainable Architecture Colloquium',
    category: 'Urban Ecology',
    typeTag: 'Colloquium',
    date: 'Nov 05, 2025',
    time: '14:00 - 17:30',
    venue: 'Zaha Hadid Atrium • Level 3',
    seatsTotal: 300,
    seatsBooked: 245,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
    description: 'International panel of municipal planners and biophilic architects exploring climate-adaptive urban structures, timber engineering, and zero-carbon envelopes.'
  },
  {
    id: 'neuro-philosophy',
    title: 'Distinguished Lecture: The Neuro-Philosophy of Consciousness',
    category: 'Neuroscience',
    typeTag: 'Distinguished Lecture',
    date: 'Nov 22, 2025',
    time: '16:00 - 18:00',
    venue: 'Broca Hall • North Quad',
    seatsTotal: 120,
    seatsBooked: 85,
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80',
    description: 'Renowned cognitive theorist Dr. Priya Sharma and visiting Oxford fellows debate quantum mind hypotheses and computational models of biological subjective experience.'
  },
  {
    id: 'pitch-night',
    title: 'Fall 2025 Venture Incubation Pitch Night',
    category: 'Ventures',
    typeTag: 'Venture Showcase',
    date: 'Dec 02, 2025',
    time: '18:30 - 21:00',
    venue: 'Luminary Executive Pavilion',
    seatsTotal: 180,
    seatsBooked: 172,
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=600&q=80',
    description: 'Twelve student-founded deep-tech cohorts compete for $1.5M in non-dilutive seed grants across synthetic biology, clean energy storage, and sovereign AI infrastructure.'
  }
];

export const EVENT_RECAPS: EventRecap[] = [
  {
    id: 'recap-1',
    dateBadge: 'May 2025',
    tag: 'FULL VIDEO • 2.4K VIEWS',
    title: 'Spring Commencement 2025',
    summary: 'Conferral of 1,840 doctoral and graduate degrees with address by Nobel Laureate Dr. Aris Thorne on humanist engineering.',
    linkText: "Read Dean's Address ↗",
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'recap-2',
    dateBadge: 'Jun 2025',
    tag: 'RESEARCH SPOTLIGHT',
    title: 'Biotech Hackathon Winners',
    summary: 'Team CRISPR-X awarded $250k for their 18-hour rapid enzymatic water micro-plastic catalytic breakdown demonstration.',
    linkText: 'View Project Deck ↗',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'recap-3',
    dateBadge: 'Jul 2025',
    tag: 'EXHIBITION CATALOG',
    title: 'Inter-University Design Biennale',
    summary: 'Curated showcase displaying 64 physical-digital artifacts from MIT, RCA, and Luminary exploring sensory prosthetics.',
    linkText: 'Curator Interview ↗',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'recap-4',
    dateBadge: 'Sep 2025',
    tag: 'POLICY WHITE PAPER',
    title: 'AI Governance Roundtable',
    summary: 'Bilateral symposium resulting in the signing of the Academic Concord on Frontier Autonomous Systems Safety.',
    linkText: 'Download PDF Treaty ↗',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80'
  }
];

export const PLACEMENT_STORIES: PlacementStory[] = [
  {
    id: 'story-elena',
    name: 'Elena Rostova',
    degreeTrack: 'B.S. Artificial Intelligence • Class of 2024',
    currentRole: 'Machine Learning Research Scientist',
    company: 'Google DeepMind London',
    quote: '"Starting lab research in my sophomore year at Luminary’s Neural Compute Center gave me direct authorship on international publications. Peer mentorship and computational access paved my path straight into DeepMind’s Frontier Research group."',
    badgeLabel: 'Lab Fellow Award',
    linkAction: 'View Thesis ↗',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'story-marcus',
    name: 'Marcus Chen',
    degreeTrack: 'M.S. Sustainable Architecture • Class of 2023',
    currentRole: 'Urban Resilience Lead',
    company: 'ARUP Singapore',
    quote: '"The experimental biophilic materials studio at Luminary directly challenged how coastal mega-cities can adapt to sea-level rises. ARUP recruited our capstone team following the Asian Sustainable Infrastructure Symposium."',
    badgeLabel: 'Eco-Infrastructure Honor',
    linkAction: 'View Project ↗',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'story-aisha',
    name: 'Aisha Al-Mansoor',
    degreeTrack: 'B.Des. Interaction Design • Class of 2024',
    currentRole: 'Senior Product Designer',
    company: 'Apple Spatial Computing',
    quote: '"Luminary’s cross-disciplinary studio culture eradicated the boundary between spatial computing and physical ergonomics. My graduation prototype led directly to my offer from the VisionOS experience team."',
    badgeLabel: 'Design Innovation Laureate',
    linkAction: 'View Showcase ↗',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  }
];

export const SALARY_DATA: Record<string, SalaryMatrixEntry> = {
  computing: {
    id: 'computing',
    name: 'Computing & AI',
    medianBaseSalary: 156000,
    topQuartileSalary: 285000,
    recruiters: ['OpenAI', 'DeepMind', 'NVIDIA', 'Anthropic', 'Apple Special Projects'],
    note: 'Excludes equity & sign-on bonuses. Specialized technical roles in frontier foundation modeling.'
  },
  biotech: {
    id: 'biotech',
    name: 'Biotechnology',
    medianBaseSalary: 144000,
    topQuartileSalary: 260000,
    recruiters: ['Biogen', 'Moderna', 'Genentech', 'Illumina', 'Vertex Pharma'],
    note: 'Includes translational genomics and molecular microfluidics research appointments.'
  },
  quant: {
    id: 'quant',
    name: 'Applied Math & Quant',
    medianBaseSalary: 168000,
    topQuartileSalary: 310000,
    recruiters: ['Jane Street', 'Bridgewater', 'Goldman Sachs Strats', 'Citadel', 'Two Sigma'],
    note: 'Reflects algorithmic quantitative research and sovereign asset risk engineering.'
  },
  arch: {
    id: 'arch',
    name: 'Architecture & Design',
    medianBaseSalary: 132000,
    topQuartileSalary: 225000,
    recruiters: ['Foster + Partners', 'ARUP', 'SOM Architects', 'Apple Human Interface', 'Teenage Engineering'],
    note: 'Encompasses spatial software architecture, net-zero urban planning, and hardware ergonomics.'
  }
};

export const INITIAL_CANDIDATE_APPLICATIONS: CandidateApplication[] = [
  {
    id: 'app-1',
    applicationCode: 'APP-89021',
    applicantName: 'Ananya Rao',
    degreeTrack: 'M.Sc. Human-Centered AI',
    evaluationMetric: '3.94 / 4.0 (GRE 332 V164/Q168)',
    gpa: '3.94 / 4.0',
    loggedTime: 'Today, 08:42',
    status: 'Interview Scheduled',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    department: 'School of Computing',
    email: 'ananya.rao@alumni.cmu.edu',
    notes: 'Strong portfolio in conversational agents and safety alignment.'
  },
  {
    id: 'app-2',
    applicationCode: 'APP-89018',
    applicantName: 'Marcus Thorne',
    degreeTrack: 'M.Arch Sustainable Systems',
    evaluationMetric: '3.88 / 4.0 (Portfolio: 98th Pctl)',
    gpa: '3.88 / 4.0',
    loggedTime: 'Yesterday, 19:15',
    status: 'Approved',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    department: 'Built Environment',
    email: 'm.thorne@alumni.berkeley.edu',
    notes: 'Exceptional net-zero modular housing submission with parametric simulation.'
  },
  {
    id: 'app-3',
    applicationCode: 'APP-89004',
    applicantName: 'Hye-Jin Park',
    degreeTrack: 'Ph.D. Bio-Genomic Computation',
    evaluationMetric: '3.99 / 4.0 (4 Publications)',
    gpa: '3.99 / 4.0',
    loggedTime: 'Oct 12, 14:02',
    status: 'Under Review',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    department: 'Life Sciences',
    email: 'hyejin.park@seoultech.ac.kr',
    notes: 'First-author in Nature Biotech on CRISPR cleavage prediction.'
  },
  {
    id: 'app-4',
    applicationCode: 'APP-88989',
    applicantName: 'Julian Morales',
    degreeTrack: 'Executive Tech MBA',
    evaluationMetric: '3.72 / 4.0 (7 Yrs Leadership)',
    gpa: '3.72 / 4.0',
    loggedTime: 'Oct 11, 10:20',
    status: 'Waitlist Tier 1',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    department: 'Management School',
    email: 'j.morales@techfin.co',
    notes: 'Ex-director at fintech startup, extensive cross-border payment experience.'
  }
];

export const HISTORY_MILESTONES = [
  {
    id: 'm1',
    tabNumber: '01',
    year: '1954',
    tabLabel: 'Foundation',
    title: 'The Inaugural Charter & Beacon Hall Consecration',
    description: 'Founded with an endowment from five New England technological guilds, the original institute opened its doors to 140 inaugural scholars in Beacon Hall. Curricula uniquely combined discrete mathematics with philosophical jurisprudence.',
    bullet1: 'First dual-track bachelor degree program in Science & Epistemology',
    bullet2: 'Initial faculty appointed from Bell Labs and Oxford University',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm2',
    tabNumber: '02',
    year: '1982',
    tabLabel: 'Research Charter',
    title: 'Designation as National Energy & Cybernetics Center',
    description: 'Following groundbreaking publications in early microprocessor architectures and fault-tolerant distributed networks, Luminary received sovereign charter status, establishing the Cryogenic Computation Core and the Institute for Human Interfaces.',
    bullet1: 'Pioneered early packet-switched inter-university protocols',
    bullet2: 'Established permanent $100M research endowment for speculative mathematics',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm3',
    tabNumber: '03',
    year: '2008',
    tabLabel: 'Global Campus',
    title: 'Transcontinental Research Hubs & Bio-Regenerative Axis',
    description: 'In response to accelerating planetary challenges, Luminary ratified bilateral campus partnerships in Zurich, Singapore, and Cambridge, constructing the landmark Helix Pavilion and the Zaha Hadid Sustainable Architecture Complex.',
    bullet1: 'Achieved 100% net-zero carbon operations across all campus facilities',
    bullet2: 'Mandatory cross-continental immersion semester introduced for all degree tracks',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm4',
    tabNumber: '04',
    year: '2024',
    tabLabel: 'Quantum & AI',
    title: 'Quantum Supremacy & Ethical AI Institute Concurrence',
    description: 'Commissioning of the 1,024-qubit dilution refrigerator cluster and formal establishment of the Center for Planetary Alignment, setting benchmark global standards for synthetic intelligence safety and bio-synthetic manufacturing.',
    bullet1: 'Ranked #4 worldwide in the Global Innovation Index for Technology Universities',
    bullet2: 'Surpassed $48M in annual competitive sponsored research grants',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80'
  }
];

export const FAQS = [
  {
    q: 'What are the application deadlines for Fall 2025?',
    a: 'Luminary Institute operates under a priority deadline of December 15th, 2024 for Early Fellowships and merit scholarships. Regular rolling decision admissions close March 1st, 2025. Decisions are released within 3.8 business days of complete dossier verification.'
  },
  {
    q: 'Are international scholarships and graduate fellowships available?',
    a: 'Yes. 100% of doctoral candidates and over 78% of undergraduate/master scholars receive non-repayable institutional grants, international living stipends, or sponsored research assistantships funded by our $48M+ endowment.'
  },
  {
    q: 'Can I schedule an in-person or virtual campus tour?',
    a: 'Guided campus architectural tours depart daily from Turing Hall at 10:00 AM and 2:30 PM. Virtual immersive tours via Apple VisionOS and WebXR are available 24/7 on the Student Portal.'
  },
  {
    q: 'What standardized tests or portfolio requirements apply?',
    a: 'Standardized testing (GRE/SAT) is optional but welcomed as supplementary merit evidence. Design and Architecture candidates must submit a digital portfolio showcasing at least three project explorations. CS and Bio candidates submit code repositories or lab write-ups.'
  }
];
