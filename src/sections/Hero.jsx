import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { personalInfo } from '../data';
import { useEffect, useState } from 'react';

const roles = [
  'MERN Full-Stack Developer',
  'Backend Developer',
  'Bot Developer',
  // 'AI Developer',
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
        background: '#11100E',
      }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(196,122,74,0.10), rgba(196,122,74,0.03) 45%, transparent 70%)',
            filter: 'blur(45px)',
          }}
        />

        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
          style={{
            background:
              'radial-gradient(circle, rgba(196,122,74,0.05), transparent 70%)',
            filter: 'blur(50px)',
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at center, transparent 35%, rgba(5,5,4,0.45) 100%)',
          }}
        />

      </div>


      {/* Main Content */}
      <div className="relative z-10 w-full flex justify-center">

        <div className="w-full max-w-5xl text-center flex flex-col items-center">


          {/* Available */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm mb-8"
            style={{
              background: 'rgba(25,24,22,0.75)',
              border: '1px solid #34312B',
              color: '#A8A39A',
              boxShadow:
                '0 10px 35px rgba(0,0,0,0.25)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                background: '#6F8F72',
                boxShadow: '0 0 10px rgba(111,143,114,0.6)',
              }}
            />

            Available for opportunities

            <span style={{ color: '#34312B' }}>
              ·
            </span>

            <MapPin
              size={12}
              style={{ color: '#C47A4A' }}
            />

            {personalInfo.location}
          </motion.div>


          {/* NAME
              IMPORTANT:
              FLEX + SAME LINE
          */}
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
                color: '#F1EEE7',
                textShadow:
                  '0 10px 40px rgba(0,0,0,0.45)',
              }}
            >
              SURAFEL
            </span>

            <span
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight"
              style={{
                background:
                  'linear-gradient(135deg, #C47A4A, #D89568)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter:
                  'drop-shadow(0 10px 30px rgba(196,122,74,0.18))',
              }}
            >
              MELLIYON
            </span>

          </motion.div>


          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.25,
            }}
            className="mt-7 flex flex-col items-center"
          >

            <div className="h-9 flex items-center justify-center">

              <AnimatePresence mode="wait">

                <motion.span
                  key={roles[roleIndex]}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="text-xl sm:text-2xl md:text-3xl font-semibold"
                  style={{
                    color: '#A8A39A',
                  }}
                >
                  {roles[roleIndex]}

                  <span
                    style={{
                      color: '#C47A4A',
                    }}
                  >
                    .
                  </span>
                </motion.span>

              </AnimatePresence>

            </div>

            <div
              className="mt-3 h-[2px] w-12 rounded-full"
              style={{
                background:
                  'linear-gradient(90deg, transparent, #C47A4A, transparent)',
                boxShadow:
                  '0 0 15px rgba(196,122,74,0.45)',
              }}
            />

          </motion.div>


          {/* Description */}
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="max-w-2xl mt-7 text-base md:text-lg leading-relaxed"
            style={{
              color: '#928D84',
            }}
          >
            I build modern web applications, backend systems,
            and automation tools with a focus on clean
            architecture, practical solutions, and great
            user experiences.
          </motion.p>


          {/* Buttons */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8"
          >

            {/* View Work */}
            <button
              onClick={() =>
                document
                  .querySelector('#projects')
                  ?.scrollIntoView({
                    behavior: 'smooth',
                  })
              }
              className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 active:scale-95"
              style={{
                background:
                  'linear-gradient(135deg, #C47A4A, #B9683D)',
                color: '#11100E',
                boxShadow:
                  '0 10px 30px rgba(196,122,74,0.18)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  'linear-gradient(135deg, #D89568, #C47A4A)';
                e.currentTarget.style.transform =
                  'translateY(-2px)';
                e.currentTarget.style.boxShadow =
                  '0 14px 35px rgba(196,122,74,0.28)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  'linear-gradient(135deg, #C47A4A, #B9683D)';
                e.currentTarget.style.transform =
                  'translateY(0)';
                e.currentTarget.style.boxShadow =
                  '0 10px 30px rgba(196,122,74,0.18)';
              }}
            >
              View My Work
            </button>


            {/* Connect */}
            <button
              onClick={() =>
                document
                  .querySelector('#contact')
                  ?.scrollIntoView({
                    behavior: 'smooth',
                  })
              }
              className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300"
              style={{
                background: 'rgba(25,24,22,0.5)',
                border: '1px solid #34312B',
                color: '#F1EEE7',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  '#C47A4A';
                e.currentTarget.style.color =
                  '#D89568';
                e.currentTarget.style.transform =
                  'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  '#34312B';
                e.currentTarget.style.color =
                  '#F1EEE7';
                e.currentTarget.style.transform =
                  'translateY(0)';
              }}
            >
              Let's Connect
            </button>


            {/* CV */}
            <a
              href={personalInfo.cvLink}
              download="Surafel_Melliyon_CV.pdf"
              className="px-8 py-3.5 rounded-xl font-medium text-sm transition-all duration-300"
              style={{
                color: '#716D65',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color =
                  '#C47A4A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color =
                  '#716D65';
              }}
            >
              ↓ Download CV
            </a>

          </motion.div>


          {/* Social */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.6,
              delay: 0.7,
            }}
            className="flex items-center justify-center gap-4 mt-8"
          >

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors duration-200"
              style={{
                color: '#716D65',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color =
                  '#F1EEE7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color =
                  '#716D65';
              }}
            >
              <GithubIcon size={16} />
              GitHub
            </a>

            <span
              style={{
                color: '#34312B',
              }}
            >
              ·
            </span>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors duration-200"
              style={{
                color: '#716D65',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color =
                  '#F1EEE7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color =
                  '#716D65';
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
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.2,
        }}
        onClick={() =>
          document
            .querySelector('#about')
            ?.scrollIntoView({
              behavior: 'smooth',
            })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        style={{
          color: '#716D65',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color =
            '#A8A39A';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color =
            '#716D65';
        }}
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
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