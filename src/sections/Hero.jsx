
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { personalInfo } from '../data';
import { useEffect, useState } from 'react';

const roles = [
  'MERN Full-Stack Developer',
  'Backend Developer',
  'Bot Developer',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20"
      style={{
        background: '#EEE5D4',
      }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(255,61,139,0.12), rgba(255,61,139,0.03) 45%, transparent 70%)',
            filter: 'blur(45px)',
          }}
        />

        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
          style={{
            background:
              'radial-gradient(circle, rgba(255,61,139,0.07), transparent 70%)',
            filter: 'blur(50px)',
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at center, transparent 35%, rgba(5,10,30,0.45) 100%)',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full flex justify-center">
        <div className="w-full max-w-5xl text-center flex flex-col items-center">

          {/* Available */}
          <motion.div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
            className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 whitespace-nowrap"
          >
            <span
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight"
              style={{
                color: '#1D4A35',
                textShadow: '0 10px 40px rgba(0,0,0,0.35)',
              }}
            >
              SURAFEL
            </span>

            <span
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight"
              style={{
                color: '#F2462E',
                textShadow: '0 10px 40px rgba(0,0,0,0.15)',
              }}
            >
              MELLIYON
            </span>
          </motion.div>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-7 flex flex-col items-center"
          >
            <div className="h-9 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="text-xl sm:text-2xl md:text-3xl font-semibold"
                  style={{ color: '#1D4A35' }}
                >
                  {roles[roleIndex]}
                  <span style={{ color: '#F2462E' }}>.</span>
                </motion.span>
              </AnimatePresence>
            </div>

            <div
              className="mt-3 h-[2px] w-12 rounded-full"
              style={{
                background: 'linear-gradient(90deg, transparent, #F2462E, transparent)',
                boxShadow: '0 0 15px rgba(242,70,46,0.35)',
              }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mt-7 text-base md:text-lg leading-relaxed"
            style={{ color: '#1D4A35' }}
          >
            I build modern web applications, backend systems,
            and automation tools with a focus on clean
            architecture, practical solutions, and great
            user experiences.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8"
          >
            {/* View Work */}
            <button
              onClick={() =>
                document.querySelector('#projects')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }
              className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 active:scale-95"
              style={{
                background: '#F2462E',
                color: '#FFFFFF',
                boxShadow: '0 10px 30px rgba(242,70,46,0.22)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#F2462E';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow =
                  '0 14px 35px rgba(242,70,46,0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#F2462E';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow =
                  '0 10px 30px rgba(242,70,46,0.22)';
              }}
            >
              View My Work
            </button>

            {/* Connect */}
            <button
              onClick={() =>
                document.querySelector('#contact')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }
              className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
              style={{
                background: '#F2462E',
                border: '1px solid #F2462E',
                color: '#FFFFFF',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#F2462E';
                e.currentTarget.style.borderColor = '#F2462E';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#F2462E';
                e.currentTarget.style.borderColor = '#F2462E';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Let's Connect
            </button>

            {/* CV */}
            <a
              href={personalInfo.cvLink}
              download="Surafel_Melliyon_CV.pdf"
              className="px-8 py-3.5 rounded-xl font-medium text-sm transition-all duration-300"
              style={{ color: '#1D4A35' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#F2462E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#1D4A35';
              }}
            >
              ↓ Download CV
            </a>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: '#1D4A35' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#F2462E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#1D4A35';
              }}
            >
              <GithubIcon size={16} />
              GitHub
            </a>

            <span style={{ color: '#1D4A35' }}>·</span>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ color: '#1D4A35' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#F2462E';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#1D4A35';
              }}
            >
              <LinkedinIcon size={16} />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() =>
          document.querySelector('#about')?.scrollIntoView({
            behavior: 'smooth',
          })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{ color: '#1D4A35' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#F2462E';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#1D4A35';
        }}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
