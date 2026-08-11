import { motion } from 'framer-motion';
import { MapPin, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import Terminal from '../components/Terminal';
import { personalInfo } from '../data';

const floatingBadges = [
  { label: 'React',   icon: '⚛️', x: '-left-4',  y: 'top-16',    delay: 0 },
  { label: 'Node.js', icon: '🟩', x: '-right-2', y: 'top-8',     delay: 0.3 },
  { label: 'MySQL',   icon: '🗄️', x: '-left-2',  y: 'bottom-16', delay: 0.6 },
  { label: 'AI',      icon: '🧠', x: '-right-4', y: 'bottom-24', delay: 0.9 },
];

const Hero = () => (
  <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    style={{ background: '#11100E' }}>

    {/* Extremely subtle warm orbs */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-float"
        style={{ background: 'rgba(196,122,74,0.04)', filter: 'blur(100px)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full animate-float-delayed"
        style={{ background: 'rgba(196,122,74,0.03)', filter: 'blur(90px)' }} />
    </div>

    <div className="container-custom relative z-10 w-full">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

        {/* ── Left ── */}
        <div className="flex-1 text-center lg:text-left max-w-2xl">

          {/* Status pill */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-8"
            style={{ background: '#191816', border: '1px solid #34312B', color: '#A8A39A' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#6F8F72' }} />
            Available for opportunities
            <span style={{ color: '#34312B' }}>·</span>
            <MapPin size={12} style={{ color: '#C47A4A' }} />
            {personalInfo.location}
          </motion.div>

          {/* Name */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}>
            <h1 className="font-black leading-none mb-2">
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight"
                style={{ color: '#F1EEE7' }}>SURAFEL</span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-gradient">
                MELLIYON
              </span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }} className="mt-4 mb-6">
            <span className="text-xl md:text-2xl font-semibold" style={{ color: '#A8A39A' }}>
              Junior Full-Stack Developer
            </span>
            <span className="font-bold text-2xl md:text-3xl" style={{ color: '#C47A4A' }}> .</span>
          </motion.div>

          {/* Tagline */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-base md:text-lg leading-relaxed mb-8 max-w-xl lg:max-w-none"
            style={{ color: '#A8A39A' }}>
            {personalInfo.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center lg:items-start gap-3 mb-8">

            <button onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 active:scale-95"
              style={{ background: '#C47A4A', color: '#11100E' }}
              onMouseEnter={e => e.currentTarget.style.background = '#D89568'}
              onMouseLeave={e => e.currentTarget.style.background = '#C47A4A'}>
              View My Work
            </button>

            <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
              style={{ background: 'transparent', border: '1px solid #34312B', color: '#F1EEE7' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#C47A4A'; e.currentTarget.style.color = '#D89568'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#34312B'; e.currentTarget.style.color = '#F1EEE7'; }}>
              Let's Connect
            </button>

            <a href={personalInfo.cvLink} download="Surafel_Melliyon_CV.pdf"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-medium text-sm transition-colors text-center"
              style={{ color: '#716D65' }}
              onMouseEnter={e => e.currentTarget.style.color = '#C47A4A'}
              onMouseLeave={e => e.currentTarget.style.color = '#716D65'}>
              ↓ Download CV
            </a>
          </motion.div>

          {/* Social */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex items-center justify-center lg:justify-start gap-4">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: '#716D65' }}
              onMouseEnter={e => e.currentTarget.style.color = '#F1EEE7'}
              onMouseLeave={e => e.currentTarget.style.color = '#716D65'}>
              <GithubIcon size={16} /> GitHub
            </a>
            <span style={{ color: '#34312B' }}>·</span>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: '#716D65' }}
              onMouseEnter={e => e.currentTarget.style.color = '#F1EEE7'}
              onMouseLeave={e => e.currentTarget.style.color = '#716D65'}>
              <LinkedinIcon size={16} /> LinkedIn
            </a>
          </motion.div>
        </div>

        {/* ── Right: Terminal ── */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex-shrink-0 hidden md:block">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl scale-110"
              style={{ background: 'rgba(196,122,74,0.06)', filter: 'blur(24px)' }} />
            <Terminal />
            {floatingBadges.map((badge) => (
              <motion.div key={badge.label} className={`absolute ${badge.x} ${badge.y}`}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, delay: badge.delay, repeat: Infinity, ease: 'easeInOut' }}>
                <div className="rounded-lg px-3 py-1.5 flex items-center gap-1.5 text-xs font-medium"
                  style={{ background: '#211F1B', border: '1px solid #34312B', color: '#A8A39A' }}>
                  <span>{badge.icon}</span>
                  <span>{badge.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>

    {/* Scroll hint */}
    <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
      onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-colors"
      style={{ color: '#716D65' }}
      onMouseEnter={e => e.currentTarget.style.color = '#A8A39A'}
      onMouseLeave={e => e.currentTarget.style.color = '#716D65'}
      aria-label="Scroll down">
      <span className="text-xs tracking-widest uppercase">Scroll</span>
      <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
        <ChevronDown size={18} />
      </motion.div>
    </motion.button>
  </section>
);

export default Hero;
