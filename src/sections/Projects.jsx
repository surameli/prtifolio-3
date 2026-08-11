import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../data';

// ── Browser chrome ──────────────────────────────────────────────────────────
const BrowserMockup = ({ src, alt, color }) => {
  const [err, setErr] = useState(false);
  return (
    <div className="rounded-xl overflow-hidden shadow-2xl" style={{ border: '1px solid #34312B' }}>
      <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: '#211F1B', borderBottom: '1px solid #34312B' }}>
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#8B3A3A' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#8B6A1E' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#3A6B3A' }} />
        <div className="flex-1 mx-3 rounded-md px-3 py-1 text-xs truncate font-mono"
          style={{ background: '#28251F', color: '#716D65' }}>
          {alt.toLowerCase().replace(/\s+/g, '-')}.vercel.app
        </div>
      </div>
      <div className={`relative overflow-hidden bg-gradient-to-br ${color}`} style={{ aspectRatio: '16/9' }}>
        {!err
          ? <img src={src} alt={alt} className="w-full h-full object-cover object-top" loading="lazy" onError={() => setErr(true)} />
          : <div className="absolute inset-0 flex items-center justify-center text-5xl">🖥️</div>}
      </div>
    </div>
  );
};

// ── Project list item ───────────────────────────────────────────────────────
const ProjectCard = ({ project, index, isActive, onClick }) => (
  <motion.button
    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }}
    onClick={onClick}
    className="w-full text-left p-4 rounded-xl transition-all duration-300 group"
    style={{
      background: isActive ? 'rgba(196,122,74,0.08)' : '#191816',
      border: `1px solid ${isActive ? 'rgba(196,122,74,0.4)' : '#34312B'}`,
    }}
    onMouseEnter={e => { if (!isActive) { e.currentTarget.style.borderColor = '#3E3A33'; e.currentTarget.style.background = '#211F1B'; } }}
    onMouseLeave={e => { if (!isActive) { e.currentTarget.style.borderColor = '#34312B'; e.currentTarget.style.background = '#191816'; } }}>
    <div className="flex items-center gap-3">
      <div className={`w-12 h-9 rounded-lg overflow-hidden shrink-0 bg-gradient-to-br ${project.color}`}
        style={{ border: '1px solid #34312B' }}>
        {project.imageUrl
          ? <img src={project.imageUrl} alt="" className="w-full h-full object-cover object-top" loading="lazy" />
          : <div className="w-full h-full flex items-center justify-center text-lg">{project.icon}</div>}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold truncate transition-colors duration-200"
          style={{ color: isActive ? '#F1EEE7' : '#A8A39A' }}>
          {project.title}
        </p>
        <p className="text-xs truncate mt-0.5" style={{ color: '#716D65' }}>{project.subtitle}</p>
      </div>
      <ArrowUpRight size={14} className="shrink-0 transition-all duration-200"
        style={{ color: isActive ? '#C47A4A' : '#4A4640' }} />
    </div>
  </motion.button>
);

// ── Section ─────────────────────────────────────────────────────────────────
const Projects = () => {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section id="projects" className="section-padding relative" style={{ background: '#151412' }}>
      <div className="container-custom relative">
        <SectionHeader eyebrow="Featured Projects" title="Things I've built"
          subtitle="Real projects built with real purpose — not tutorials, not demos." />

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* List */}
          <div className="lg:col-span-1 flex flex-col gap-2">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} isActive={active === i} onClick={() => setActive(i)} />
            ))}
          </div>

          {/* Preview */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div key={active}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35, ease: 'easeOut' }}
                className="rounded-2xl overflow-hidden" style={{ background: '#191816', border: '1px solid #34312B' }}>

                <div className="p-4 pb-0">
                  <BrowserMockup src={project.imageUrl} alt={project.title} color={project.color} />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#C47A4A' }}>
                        {project.subtitle}
                      </span>
                      <h3 className="text-xl font-bold mt-1" style={{ color: '#F1EEE7' }}>{project.title}</h3>
                    </div>
                    <span className="text-3xl shrink-0">{project.icon}</span>
                  </div>

                  <p className="text-sm leading-relaxed mb-5" style={{ color: '#A8A39A' }}>{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map(t => (
                      <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-lg"
                        style={{ color: '#A8A39A', background: '#28251F', border: '1px solid #34312B' }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid #34312B' }}>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 active:scale-95"
                        style={{ background: '#C47A4A', color: '#11100E' }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#D89568'; e.currentTarget.style.transform = 'scale(1.04)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#C47A4A'; e.currentTarget.style.transform = 'scale(1)'; }}>
                        <ExternalLink size={14} />Live Demo
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300"
                      style={{ border: '1px solid #34312B', color: '#A8A39A' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(196,122,74,0.4)'; e.currentTarget.style.color = '#F1EEE7'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = '#34312B'; e.currentTarget.style.color = '#A8A39A'; }}>
                      <GithubIcon size={14} />Source Code
                    </a>

                    {/* Dots */}
                    <div className="flex items-center gap-1.5 ml-auto">
                      {projects.map((_, i) => (
                        <button key={i} onClick={() => setActive(i)}
                          className="rounded-full transition-all duration-300"
                          style={{ width: active === i ? '20px' : '8px', height: '8px', background: active === i ? '#C47A4A' : '#34312B' }}
                          aria-label={`Go to project ${i + 1}`} />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
