// ─── Project Icon ───────────────────────────────────────────────────────────
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMysql,
  SiGit,
  SiGithub,
  SiCloudinary,
  SiTelegram,
  
} from 'react-icons/si';
import {
  FaSearch,
  FaCode,
  FaCog,
  FaPaintBrush,
  FaCss3Alt,
  FaDatabase,
  FaRobot,
  FaFlask,
  FaProjectDiagram,
  FaRocket,
} from 'react-icons/fa';

// ─── Project Images ───────────────────────────────────────────────────────────
import aiRecruitmentImg from '../assets/AI-rectuement-system.png';
import carRentalImg from '../assets/car-rental.png';
import portfolioImg from '../assets/portfolio.png';
import amazonCloneImg from '../assets/Amazon-clone.png';
import netflixCloneImg from '../assets/Netflix-clone.png';

// ─── Personal Info ────────────────────────────────────────────────────────────
export const personalInfo = {
  name: 'Surafel Melliyon',
  title: 'Junior Full-Stack Developer',
  location: 'Addis Ababa, Ethiopia',
  tagline: 'I build practical web applications, automation systems, and digital experiences that solve real-world problems.',
  email: 'surafelmelliyon111@gmail.com',
  github: 'https://github.com/surameli',
  linkedin: 'https://www.linkedin.com/in/surafel-melliyon-259b04320/',
  cvLink: '/Surafel_Melliyon_FlowCV_Resume_recent.pdf',
  status: 'Building · Learning · Exploring AI',
};

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'AI Recruitment System',
    subtitle: 'AI-Powered Hiring Platform',
    description:
      'An AI-powered recruitment system that streamlines the hiring process by automating candidate screening and matching.',
    longDescription:
      'Built for Ethiopian Airlines HR, this system leverages AI to automate the most time-consuming parts of hiring — from parsing and scoring candidate profiles to matching applicants against job requirements. The Groq-powered engine handles intelligent screening while the full-stack application manages the complete recruitment pipeline.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Groq'],
    features: [
      'AI-powered candidate screening',
      'Automated applicant matching',
      'Job posting management',
      'Candidate profile parsing',
      'HR dashboard & reporting',
      'MongoDB data persistence',
    ],
    github: 'https://github.com/surameli/ethiopian-airlines-hr-system',
    demo: 'https://ethiopian-airlines-hr-system.vercel.app/',
    featured: true,
    color: 'from-indigo-500 to-purple-600',
    icon: '🤖',
    imageUrl: aiRecruitmentImg,
  },
  {
    id: 2,
    title: 'Car Rental System',
    subtitle: 'Full-Stack Booking Platform',
    description:
      'A comprehensive car rental system that allows users to browse, book, and manage car rentals with ease.',
    longDescription:
      'A complete car rental platform with a clean React frontend and a Node.js/Express backend. Users can browse available vehicles, view details, make bookings, and manage their reservations — all styled with Tailwind CSS and backed by MongoDB.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    features: [
      'Vehicle browsing & filtering',
      'Booking & reservation management',
      'User authentication',
      'Admin management panel',
      'Responsive design',
    ],
    github: 'https://github.com/surameli/car-rental',
    demo: 'https://car-rental-xod2.vercel.app/',
    featured: false,
    color: 'from-cyan-500 to-blue-600',
    icon: '🚗',
    imageUrl: carRentalImg,
  },
  {
    id: 3,
    title: 'Portfolio Website',
    subtitle: 'Personal Developer Portfolio',
    description:
      'A personal portfolio website to showcase projects, skills, and experience, designed with a modern and responsive layout.',
    longDescription:
      'A modern, responsive portfolio built with React and Tailwind CSS. Designed to communicate who I am as a developer — my projects, my stack, and my journey — in a clean, performant, and visually polished way.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Responsive across all devices',
      'Smooth scroll animations',
      'Project showcase section',
      'Contact form',
      'Clean dark aesthetic',
    ],
    github: 'https://github.com/surameli/portfolio-2',
    demo: 'https://surafel-melliyon.vercel.app',
    featured: false,
    color: 'from-violet-500 to-purple-600',
    icon: '💼',
    imageUrl: portfolioImg,
  },
  {
    id: 4,
    title: 'Amazon Clone',
    subtitle: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform replicating Amazon\'s core functionalities, including product listings, shopping cart, and user authentication.',
    longDescription:
      'A full-stack Amazon clone built with React, Firebase, and Stripe. Replicates core e-commerce patterns — product listings, cart management, checkout with real payment processing via Stripe, and user authentication via Firebase.',
    tech: ['React', 'Firebase', 'Stripe', 'Tailwind CSS', 'Node.js', 'Express'],
    features: [
      'Product listings & search',
      'Shopping cart management',
      'Stripe payment integration',
      'Firebase authentication',
      'Order history',
      'Responsive UI',
    ],
    github: 'https://github.com/surameli/amazon-clone',
    demo: 'https://sura-amazon-clone.netlify.app/',
    featured: false,
    color: 'from-orange-500 to-amber-600',
    icon: '🛒',
    imageUrl: amazonCloneImg,
  },
  {
    id: 5,
    title: 'Netflix Clone',
    subtitle: 'Movie Streaming Interface',
    description:
      'A streaming platform that mimics Netflix\'s user interface and functionality, allowing users to browse and watch movies and TV shows.',
    longDescription:
      'A full-featured Netflix UI clone built with React, consuming the TMDB API to display real movie and TV data. Features a hero banner, genre-based rows, individual title pages, and a custom watchlist — all in a responsive dark interface.',
    tech: ['React', 'Firebase', 'Node.js', 'CSS', 'Express'],
    features: [
      'Live movie & TV data from TMDB API',
      'Netflix-style hero banner',
      'Genre-based browsing rows',
      'My List / watchlist feature',
      'Firebase authentication',
      'Responsive dark UI',
    ],
    github: 'https://github.com/surameli/Netflix-try',
    demo: 'https://sura-netflix-clone.netlify.app/',
    featured: false,
    color: 'from-red-600 to-rose-700',
    icon: '🎬',
    imageUrl: netflixCloneImg,
  },
];

// ─── Tech Stack ───────────────────────────────────────────────────────────────
export const techStack = {
  Frontend: [
    { name: 'React.js', icon: SiReact, desc: 'Component-based UI' },
    { name: 'JavaScript', icon: SiJavascript, desc: 'Core scripting language' },
    { name: 'HTML5', icon: SiHtml5, desc: 'Semantic markup' },
    { name: 'CSS3', icon: FaCss3Alt, desc: 'Styling & animations' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, desc: 'Utility-first CSS' },
    { name: 'Bootstrap', icon: SiBootstrap, desc: 'Responsive framework' },
    { name: 'Material UI', icon: SiMui, desc: 'React component library' },
    { name: 'Vite', icon: SiVite, desc: 'Fast build tooling' },
  ],
  Backend: [
    { name: 'Node.js', icon: SiNodedotjs, desc: 'Server-side JavaScript' },
    { name: 'Express.js', icon: SiExpress, desc: 'Web framework' },
    { name: 'REST APIs', icon: FaProjectDiagram, desc: 'API design & integration' },
    { name: 'JWT Auth', icon: SiJsonwebtokens, desc: 'Secure authentication' },
  ],
  Database: [
    { name: 'MySQL', icon: SiMysql, desc: 'Relational database' },
  ],
  Tools: [
    { name: 'Git & GitHub', icon: SiGithub, desc: 'Version control' },
    { name: 'Cloudinary', icon: SiCloudinary, desc: 'Media management' },
    { name: 'Telegram Bot API', icon: SiTelegram, desc: 'Bot automation' },
    { name: 'Grammy', icon: FaCode, desc: 'Telegram bot framework' },
  ],
  Learning: [
    { name: 'Artificial Intelligence', icon: FaRobot, desc: 'Exploring AI concepts' },
    { name: 'System Design', icon: FaProjectDiagram, desc: 'Architecture patterns' },
  ],
};

// ─── Stats ────────────────────────────────────────────────────────────────────
export const stats = [
  { value: '4+', label: 'Major Projects', icon: '' },
  { value: 'Full-Stack', label: 'Development Focus', icon: '' },
  { value: 'AI', label: 'Currently Exploring', icon: '' },
  { value: 'Addis Ababa', label: 'Ethiopia', icon: '' },
];

// ─── Process Steps ────────────────────────────────────────────────────────────
export const processSteps = [
  {
    number: '01',
    title: 'Understand the Problem',
    description: 'Before writing a single line, I dig into what the software actually needs to solve — the workflow, the pain points, the users.',
    icon: FaSearch,
  },
  {
    number: '02',
    title: 'Design the Solution',
    description: 'I sketch out the data model, API structure, and UI flow. Good architecture saves weeks of refactoring later.',
    icon: FaProjectDiagram,
  },
  {
    number: '03',
    title: 'Build the Interface',
    description: 'I start with the frontend — building a clean, responsive UI that makes complex functionality feel intuitive.',
    icon: FaPaintBrush,
  },
  {
    number: '04',
    title: 'Develop the Backend',
    description: 'APIs, business logic, authentication, and server-side operations — built to be clean, secure, and scalable.',
    icon: FaCog,
  },
  {
    number: '05',
    title: 'Connect the Database',
    description: 'Designing and wiring up the database layer — schema design, queries, relationships, and data integrity.',
    icon: FaDatabase,
  },
  {
    number: '06',
    title: 'Test & Improve',
    description: 'I test the full flow, find edge cases, and refine until the system behaves exactly as expected.',
    icon: FaFlask,
  },
  {
    number: '07',
    title: 'Deploy',
    description: 'Ship it. Get it running in a real environment and keep iterating based on real-world feedback.',
    icon: FaRocket,
  },
];

// ─── Experience ───────────────────────────────────────────────────────────────
// To add a new role in the future, copy one object below and fill in the fields.
// Set status: 'current' for ongoing roles, 'completed' for finished ones.
export const experiences = [
  {
    role: 'Intern Software Programmer',
    company: 'Fidel Tutorial',
    location: 'Addis Ababa, Ethiopia',
    type: 'Full-Time On-Site Internship',
    duration: '3 months',
    period: '2026',
    status: 'current',           // ← 'current' | 'completed'
    description:
      "Working on Fidel's tutor management platform. Contributing across the full stack — from designing database schemas and building REST APIs to developing Telegram bot workflows that automate key business operations.",
    responsibilities: [
      'Backend development with Node.js and Express.js',
      'Telegram bot development using Grammy',
      'MySQL database design and integration',
      'REST API design and implementation',
      'JWT-based authentication systems',
      'Tutor management workflow automation',
      'Document upload integration with Cloudinary',
      'Debugging and system performance improvements',
    ],
    tech: ['Node.js', 'Express.js', 'MySQL', 'Grammy', 'Telegram Bot API', 'JWT', 'Cloudinary'],
    color: 'from-indigo-500 to-purple-600',
  },
  // ─────────────────────────────────────────────────────────────────────────
  // ADD FUTURE ROLES BELOW — copy the block above, update fields, set
  // status: 'completed' for past roles or 'current' for ongoing ones.
  // ─────────────────────────────────────────────────────────────────────────

  //   {
  //   role: 'Full-Stack Developer',
  //   company: 'Personal Projects',
  //   location: 'Addis Ababa, Ethiopia',
  //   type: 'Independent Development',
  //   duration: '2024 – Present',
  //   period: '2024–Present',
  //   status: 'current',
  //   description:
  //     'Building practical full-stack applications to strengthen my software engineering skills and explore real-world application architecture.',
  //   responsibilities: [
  //     'Developed responsive web applications using React',
  //     'Built REST APIs using Node.js and Express.js',
  //     'Designed and integrated MySQL databases',
  //     'Implemented authentication and API-based application workflows',
  //     'Integrated third-party APIs into web applications',
  //     'Built reusable frontend components and responsive interfaces',
  //     'Used Git and GitHub for source control and project management',
  //     'Debugged and improved applications through iterative development',
  //   ],
  //   tech: [
  //     'React',
  //     'JavaScript',
  //     'Node.js',
  //     'Express.js',
  //     'MySQL',
  //     'REST API',
  //     'Git',
  //     'GitHub',
  //   ],
  //   color: 'from-cyan-500 to-blue-600',
  // },
];

// ─── Education ────────────────────────────────────────────────────────────────
export const education = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'Unity University',
    period: '2021 – 2026',
    icon: '🎓',
  },
  {
    degree: 'Full-Stack Web Development',
    institution: 'Evangadi Technology',
    period: '2022 – 2024',
    icon: '💻',
  },
  // ── Add future education below ────────────────────────────────────────────
  // {
  //   degree: 'Your Degree or Certificate',
  //   institution: 'Institution Name',
  //   period: '2025 – 2026',
  //   icon: '📜',
  // },
];
export const exploring = [
  {
    title: 'Artificial Intelligence',
    description: 'Learning AI concepts and exploring how AI can be integrated into real-world software applications — from smart APIs to AI-assisted development workflows.',
    // icon: '',
    color: 'from-violet-500 to-purple-600',
    tags: ['Machine Learning', 'AI APIs', 'AI-Assisted Dev'],
  },
  {
    title: 'Automation',
    description: 'Building automated workflows using APIs, Telegram bots, and backend services. Automation is how you do more with less.',
    // icon: '🤖',
    color: 'from-indigo-500 to-blue-600',
    tags: ['Telegram Bots', 'API Workflows', 'Backend Automation'],
  },
  {
    title: 'System Design',
    description: 'Improving my understanding of how larger applications are structured, scaled, and connected — moving from "it works" to "it works well under pressure".',
    // icon: '🏗️',
    color: 'from-cyan-500 to-teal-600',
    tags: ['Architecture', 'Scalability', 'Microservices'],
  },
];
