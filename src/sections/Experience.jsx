import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { MapPin, Calendar, ChevronUp, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

// ─── Status config ──────────────────────────────────────────────────────────────
const STATUS = {
  current:   { dot: '●', label: 'CURRENT',   color: '#F2462E', bg: 'rgba(242,70,46,0.08)', border: 'rgba(242,70,46,0.25)' },
  building:  { dot: '◆', label: 'BUILDING',  color: '#1D4A35', bg: 'rgba(29,74,53,0.08)', border: 'rgba(29,74,53,0.2)' },
  completed: { dot: '✓', label: 'COMPLETED', color: '#1D4A35', bg: 'rgba(29,74,53,0.08)', border: 'rgba(29,74,53,0.2)' },
};

const StatusBadge = ({ status, pulse }) => {
  const s = STATUS[status] || STATUS.completed;
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold font-mono"
      style={{ color: s.color, background: s.bg, border: `1px solid ${s.border}` }}>
      <span className={pulse ? 'animate-pulse' : ''}>{s.dot}</span>
      {s.label}
    </span>
  );
};

// ─── Tech badge ─────────────────────────────────────────────────────────────────
const TechPill = ({ label }) => (
  <motion.span whileHover={{ scale: 1.05 }}
    className="px-2.5 py-1 text-xs font-medium rounded-lg cursor-default transition-all duration-200"
    style={{ color: '#1D4A35', background: '#EEE5D4', border: '1px solid rgba(29,74,53,0.14)' }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(242,70,46,0.4)'; e.currentTarget.style.color = '#F2462E'; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(29,74,53,0.14)'; e.currentTarget.style.color = '#1D4A35'; }}>
    {label}
  </motion.span>
);

// ─── Mini terminal ──────────────────────────────────────────────────────────────
const MiniTerminal = ({ lines }) => (
  <div className="rounded-xl overflow-hidden text-xs font-mono"
    style={{ background: '#F8F3E9', border: '1px solid rgba(29,74,53,0.14)' }}>
    <div className="flex items-center gap-1.5 px-4 py-2.5"
      style={{ background: '#EEE5D4', borderBottom: '1px solid rgba(29,74,53,0.12)' }}>
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F2462E' }} />
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(29,74,53,0.25)' }} />
      <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#1D4A35' }} />
      <span className="ml-2" style={{ color: 'rgba(29,74,53,0.65)' }}>terminal</span>
    </div>
    <div className="p-4 space-y-1.5">
      {lines.map((l, i) => (
        <div key={i} style={{ color: l.color || '#1D4A35' }}>{l.text || '\u00A0'}</div>
      ))}
    </div>
  </div>
);

// ─── Arch diagram ───────────────────────────────────────────────────────────────
const ArchDiagram = () => (
  <div className="rounded-xl p-5 text-xs font-mono"
    style={{ background: '#F8F3E9', border: '1px solid rgba(29,74,53,0.14)' }}>
    <p className="text-[11px] font-semibold uppercase tracking-widest mb-5" style={{ color: 'rgba(29,74,53,0.65)' }}>
      System Architecture
    </p>
    <div className="flex flex-col items-center">
      <div className="px-4 py-2 rounded-lg font-semibold"
        style={{ background: 'rgba(242,70,46,0.08)', border: '1px solid rgba(242,70,46,0.25)', color: '#F2462E' }}>
        Telegram Bot
      </div>
      <div className="w-px h-5" style={{ background: 'rgba(242,70,46,0.25)' }} />
      <div className="px-4 py-2 rounded-lg font-semibold"
        style={{ background: 'rgba(29,74,53,0.06)', border: '1px solid rgba(29,74,53,0.16)', color: '#1D4A35' }}>
        REST API · Node/Express
      </div>
      <div className="w-px h-5" style={{ background: 'rgba(29,74,53,0.16)' }} />
      <div className="flex items-start gap-10">
        <div className="flex flex-col items-center">
          <div className="w-px h-4" style={{ background: 'rgba(29,74,53,0.16)' }} />
          <div className="px-3 py-2 rounded-lg font-semibold whitespace-nowrap"
            style={{ background: 'rgba(29,74,53,0.08)', border: '1px solid rgba(29,74,53,0.2)', color: '#1D4A35' }}>
            MySQL DB
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-px h-4" style={{ background: 'rgba(29,74,53,0.16)' }} />
          <div className="px-3 py-2 rounded-lg font-semibold whitespace-nowrap"
            style={{ background: 'rgba(242,70,46,0.08)', border: '1px solid rgba(242,70,46,0.2)', color: '#F2462E' }}>
            Cloudinary
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ─── Feature card ───────────────────────────────────────────────────────────────
const FeatureCard = ({ title, desc }) => (
  <div className="p-4 rounded-xl transition-all duration-300"
    style={{ background: '#F8F3E9', border: '1px solid rgba(29,74,53,0.12)' }}
    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(242,70,46,0.35)'}
    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(29,74,53,0.12)'}>
    <p className="text-sm font-semibold mb-1" style={{ color: '#1D4A35' }}>{title}</p>
    <p className="text-xs leading-relaxed" style={{ color: 'rgba(29,74,53,0.72)' }}>{desc}</p>
  </div>
);

// ─── Fidel expanded ─────────────────────────────────────────────────────────────
const FidelExpanded = () => (
  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
    exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
    className="overflow-hidden">
    <div className="pt-6 mt-6 space-y-8" style={{ borderTop: '1px solid rgba(29,74,53,0.14)' }}>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(29,74,53,0.65)' }}>
          What I Worked On
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { title: 'Backend Development', desc: 'Developed backend services and APIs using Node.js and Express.js.' },
            { title: 'Telegram Automation', desc: 'Built Telegram bot workflows using Grammy to automate business operations.' },
            { title: 'Database Engineering', desc: 'Designed and integrated MySQL database structures for application workflows.' },
            { title: 'Authentication',       desc: 'Worked with JWT-based authentication and role-based access workflows.' },
            { title: 'Tutor Management',     desc: 'Contributed to tutor registration, profile management, and operational workflows.' },
            { title: 'Document Management',  desc: 'Integrated Cloudinary for tutor document upload and management.' },
            { title: 'Session & Operations', desc: 'Worked on workflows for assignments, sessions, attendance, and lesson plans.' },
            { title: 'Debugging',            desc: 'Investigated errors, fixed integration issues, and improved system reliability.' },
          ].map(f => <FeatureCard key={f.title} {...f} />)}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <ArchDiagram />
        <MiniTerminal lines={[
          { text: '$ developer --experience', color: 'rgba(29,74,53,0.72)' },
          { text: '' },
          { text: 'Role: Software Programmer Intern', color: '#1D4A35' },
          { text: 'Stack: Node.js / MySQL / Grammy',  color: '#1D4A35' },
          { text: '' },
          { text: 'Project: Tutor Platform',   color: 'rgba(29,74,53,0.72)' },
          { text: 'Focus: Backend + Automation',color: 'rgba(29,74,53,0.72)' },
          { text: '' },
          { text: 'status: building...', color: '#F2462E' },
        ]} />
      </div>
    </div>
  </motion.div>
);

// ─── Personal expanded ──────────────────────────────────────────────────────────
const PersonalExpanded = () => (
  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
    exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
    className="overflow-hidden">
    <div className="pt-6 mt-6 space-y-6" style={{ borderTop: '1px solid rgba(29,74,53,0.14)' }}>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(29,74,53,0.65)' }}>Projects Built</p>
        <div className="flex flex-wrap gap-2">
          {['AI Recruitment System', 'Car Rental System', 'Amazon Clone', 'Netflix Clone', 'Portfolio Website'].map(p => (
            <span key={p} className="px-3 py-1.5 text-xs font-semibold rounded-lg"
              style={{ color: '#F2462E', background: 'rgba(242,70,46,0.08)', border: '1px solid rgba(242,70,46,0.2)' }}>
              {p}
            </span>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(29,74,53,0.65)' }}>What I Do</p>
        <div className="grid sm:grid-cols-2 gap-2">
          {['Building React interfaces','Developing REST APIs','Working with MySQL & MongoDB',
            'Integrating external APIs','Creating responsive interfaces',
            'Implementing authentication','Debugging applications','Using Git and GitHub'].map(r => (
            <div key={r} className="flex items-center gap-2 text-sm" style={{ color: '#1D4A35' }}>
              <span style={{ color: '#F2462E' }}>▸</span>{r}
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

// ─── Education expanded ─────────────────────────────────────────────────────────
const EduExpanded = () => (
  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
    exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
    className="overflow-hidden">
    <div className="pt-6 mt-6" style={{ borderTop: '1px solid rgba(29,74,53,0.14)' }}>
      <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'rgba(29,74,53,0.65)' }}>
        Areas of Development
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {['Software Engineering','Web Development','Database Systems',
          'Programming','Problem Solving','Application Development'].map(a => (
          <div key={a} className="p-3 rounded-xl text-sm font-medium text-center transition-all duration-300"
            style={{ background: '#F8F3E9', border: '1px solid rgba(29,74,53,0.12)', color: '#1D4A35' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(242,70,46,0.35)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(29,74,53,0.12)'}>
            {a}
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

// ─── Main card ──────────────────────────────────────────────────────────────────
const ExperienceCard = ({ card, number, expanded, onToggle }) => {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const isFidel = number === 1;

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (number - 1) * 0.12 }}
      className="relative rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: '#F8F3E9',
        border: `1px solid ${expanded
          ? 'rgba(242,70,46,0.4)'
          : 'rgba(29,74,53,0.14)'}`,
        boxShadow: expanded ? '0 20px 48px rgba(29,74,53,0.10)' : 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.borderColor = 'rgba(242,70,46,0.4)';
        e.currentTarget.style.boxShadow = '0 16px 40px rgba(29,74,53,0.10)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = expanded
          ? 'rgba(242,70,46,0.4)'
          : 'rgba(29,74,53,0.14)';
        e.currentTarget.style.boxShadow = expanded ? '0 20px 48px rgba(29,74,53,0.10)' : 'none';
      }}>

      {/* Red top accent line for current experience */}
      {isFidel && (
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(242,70,46,0.5), transparent)' }} />
      )}

      <div className="relative p-7 lg:p-9">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span className="text-[11px] font-mono font-bold tracking-widest" style={{ color: 'rgba(29,74,53,0.58)' }}>
                {String(number).padStart(2, '0')} /
              </span>
              <StatusBadge status={card.status} pulse={card.status === 'current'} />
              <span className="text-[11px] font-mono uppercase tracking-widest" style={{ color: 'rgba(29,74,53,0.55)' }}>
                {card.category}
              </span>
            </div>
            <h3 className="font-black leading-tight mb-1"
              style={{
                     fontSize: isFidel
                        ? 'clamp(1.25rem, 2.5vw, 1.875rem)'
                          : '1.25rem',
                          color: '#1D4A35',
                           }}>
              {card.role}
            </h3>
            <p className="font-bold" style={{ color: isFidel ? '#F2462E' : '#1D4A35', fontSize: isFidel ? '1.125rem' : '1rem' }}>
              {card.company}
            </p>
          </div>

          <div className="sm:text-right space-y-1.5 shrink-0">
            <div className="flex sm:justify-end items-center gap-1.5 text-xs" style={{ color: 'rgba(29,74,53,0.68)' }}>
              <Calendar size={11} />{card.period}
            </div>
            <div className="flex sm:justify-end items-center gap-1.5 text-xs" style={{ color: 'rgba(29,74,53,0.68)' }}>
              <MapPin size={11} />{card.location}
            </div>
            {card.duration && <div className="text-xs sm:text-right" style={{ color: 'rgba(29,74,53,0.58)' }}>{card.duration}</div>}
            {card.type     && <div className="text-xs sm:text-right" style={{ color: 'rgba(29,74,53,0.58)' }}>{card.type}</div>}
          </div>
        </div>

        {/* Description */}
        <p className="leading-relaxed mb-7 max-w-2xl text-sm lg:text-base" style={{ color: 'rgba(29,74,53,0.76)' }}>
          {card.description}
        </p>

        {/* Divider */}
        <div className="w-full h-px mb-6" style={{ background: 'rgba(29,74,53,0.14)' }} />

        {/* Tech + toggle */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
          <div className="flex flex-wrap gap-2 flex-1">
            {card.tech.map(t => <TechPill key={t} label={t} />)}
          </div>

          <button onClick={onToggle}
            className="flex items-center gap-2 text-sm font-semibold shrink-0 transition-all duration-300 group"
            style={{ color: expanded ? '#1D4A35' : (isFidel ? '#F2462E' : '#1D4A35') }}
            onMouseEnter={e => e.currentTarget.style.color = '#F2462E'}
            onMouseLeave={e => e.currentTarget.style.color = expanded ? '#1D4A35' : (isFidel ? '#F2462E' : '#1D4A35')}
            aria-expanded={expanded}>
            {expanded
              ? <>COLLAPSE EXPERIENCE <ChevronUp size={16} /></>
              : <>VIEW EXPERIENCE <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" /></>}
          </button>
        </div>

        {/* Expanded content */}
        <AnimatePresence>
          {expanded && (
            number === 1 ? <FidelExpanded /> :
            number === 2 ? <PersonalExpanded /> :
            <EduExpanded />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// ─── Exploring strip ────────────────────────────────────────────────────────────
const exploringItems = [
  { icon: '🧠', title: 'AI',            desc: 'Exploring Artificial Intelligence and integration into practical applications.' },
  { icon: '🤖', title: 'Automation',    desc: 'Building automated workflows using APIs, Telegram bots, and backend services.' },
  { icon: '🏗️', title: 'System Design', desc: 'Improving understanding of scalable and maintainable software architecture.' },
  { icon: '💻', title: 'Full-Stack',    desc: 'Continuing to build complete applications from frontend to backend and database.' },
];

const ExploringStrip = () => (
  <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16">
    {/* <div className="mb-8">
      <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#F2462E' }}>
        Currently Exploring
      </p>
      <h3 className="text-xl font-bold" style={{ color: '#1D4A35' }}>The next part of the journey.</h3>
    </div> */}
    {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {exploringItems.map((item, i) => (
        <motion.div key={item.title}
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
          className="rounded-2xl p-5 transition-all duration-300 cursor-default group"
          style={{ background: '#F8F3E9', border: '1px solid rgba(29,74,53,0.14)' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(242,70,46,0.4)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(29,74,53,0.14)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
          <span className="text-2xl mb-3 block transition-transform duration-300 group-hover:scale-110">{item.icon}</span>
          <p className="font-bold text-sm mb-2" style={{ color: '#1D4A35' }}>{item.title}</p>
          <p className="text-xs leading-relaxed" style={{ color: 'rgba(29,74,53,0.72)' }}>{item.desc}</p>
        </motion.div>
      ))}
    </div> */}
  </motion.div>
);

// ─── Section data ────────────────────────────────────────────────────────────────
const cards = [
  {
    status: 'current', category: 'Software Experience',
    role: 'Software Programmer Intern', company: 'Fidel Tutorial',
    location: 'Addis Ababa, Ethiopia', type: 'Full-Time On-Site Internship',
    duration: '3 months', period: '2026',
    description: "Contributing to the development of Fidel's tutor management and automation platform, working across backend services, database systems, Telegram bot workflows, and administrative operations.",
    tech: ['Node.js', 'Express.js', 'MySQL', 'Grammy', 'Telegram Bot API', 'JWT', 'Cloudinary', 'REST APIs'],
  },
  {
    status: 'building', category: 'Independent Development',
    role: 'Full-Stack Developer', company: 'Personal Projects',
    location: 'Addis Ababa, Ethiopia', type: 'Independent Development',
    duration: null, period: '2024 — Present',
    description: 'Building practical full-stack applications to strengthen my software engineering skills and explore real-world application architecture.',
    tech: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'REST APIs', 'Git'],
  },
  {
    status: 'completed', category: 'Education',
    role: 'BSc Computer Science', company: 'Unity University',
    location: 'Addis Ababa, Ethiopia', type: 'Bachelor of Computer Science',
    duration: null, period: '2021 — 2025',
    description: 'Completed a Bachelor of Science in Computer Science while developing practical programming skills and building software projects across web development, databases, and application development.',
    tech: ['JavaScript', 'React', 'Node.js', 'MySQL', 'Java', 'HTML', 'CSS'],
  },
];

// ─── Section ─────────────────────────────────────────────────────────────────────
const Experience = () => {
  const [expanded, setExpanded] = useState(null);
  const toggle = i => setExpanded(prev => prev === i ? null : i);

  return (
    <section id="experience" className="section-padding relative overflow-hidden"
      style={{ background: '#EEE5D4' }}>

      <div
        className="absolute top-0 left-1/2 h-24 w-px -translate-x-1/2"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(242,70,46,0.35))' }}
      />

      {/* Very subtle warm bg glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'rgba(242,70,46,0.06)', filter: 'blur(100px)' }} />

      <div className="container-custom  relative">
      
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-14 text-center">

          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold font-mono"
              style={{ color: '#F2462E', background: 'rgba(242,70,46,0.08)', border: '1px solid rgba(242,70,46,0.25)' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#F2462E' }} />
              Experience · 2021 → 2026
            </span>
          </div>

          <h2 className="text-4xl md:text-4xl lg:text-5xl font-black mb-4 leading-tight "
            style={{ color: '#1D4A35' }}>
            Where I've Been  
            <span style={{ color: '#F2462E' }}>  Building.</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg leading-relaxed" style={{ color: 'rgba(29,74,53,0.76)' }}>
            A journey from learning the fundamentals to building real-world software.
          </p>

          <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-6 h-0.5 w-16 rounded-full origin-center"
            style={{ background: '#F2462E' }} />
        </motion.div>

        {/* Cards */}
        <div className="space-y-5">
          {cards.map((card, i) => (
            <ExperienceCard key={i} card={card} number={i + 1}
              expanded={expanded === i} onToggle={() => toggle(i)} />
          ))}
        </div>

        {/* Exploring strip */}
        <ExploringStrip />
      </div>
    </section>
  );
};

export default Experience;
