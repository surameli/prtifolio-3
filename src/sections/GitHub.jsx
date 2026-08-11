import { motion } from 'framer-motion';
import { GithubIcon } from '../components/Icons';
import AnimatedSection from '../components/AnimatedSection';
import { personalInfo } from '../data';

const GitHubSection = () => (
  <section id="github" className="section-padding relative" style={{ background: '#151412' }}>
    <div className="container-custom relative">
      <div className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        style={{ background: '#191816', border: '1px solid #34312B' }}>

        {/* Corner accents */}
        {[['top-4 left-4','border-l-2 border-t-2 rounded-tl-lg'],
          ['top-4 right-4','border-r-2 border-t-2 rounded-tr-lg'],
          ['bottom-4 left-4','border-l-2 border-b-2 rounded-bl-lg'],
          ['bottom-4 right-4','border-r-2 border-b-2 rounded-br-lg']].map(([pos, cls]) => (
          <div key={pos} className={`absolute ${pos} w-8 h-8 ${cls}`}
            style={{ borderColor: 'rgba(196,122,74,0.3)' }} />
        ))}

        <AnimatedSection>
          <motion.div animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 mx-auto"
            style={{ background: 'rgba(196,122,74,0.1)', border: '1px solid rgba(196,122,74,0.25)', color: '#C47A4A' }}>
            <GithubIcon size={36} />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#F1EEE7' }}>
            Building in Public
          </h2>
          <p className="text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed" style={{ color: '#A8A39A' }}>
            I believe the best way to grow as a developer is to keep building, experimenting,
            and sharing what I learn. Most of my work lives on GitHub.
          </p>

          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 active:scale-95"
            style={{ background: '#C47A4A', color: '#11100E' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#D89568'; e.currentTarget.style.transform = 'scale(1.04)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#C47A4A'; e.currentTarget.style.transform = 'scale(1)'; }}>
            <GithubIcon size={18} />
            View My GitHub
          </a>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default GitHubSection;
