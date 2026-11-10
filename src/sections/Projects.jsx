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
    <div className="rounded-xl overflow-hidden shadow-2xl" style={{ border: '1px solid rgba(29,74,53,0.14)' }}>
      <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: '#F8F3E9', borderBottom: '1px solid rgba(29,74,53,0.12)' }}>
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F2462E' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(29,74,53,0.25)' }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#1D4A35' }} />
        <div className="flex-1 mx-3 rounded-md px-3 py-1 text-xs truncate font-mono"
          style={{ background: '#EEE5D4', color: 'rgba(29,74,53,0.65)' }}>
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
      background: isActive ? 'rgba(242,70,46,0.08)' : '#F8F3E9',
      border: `1px solid ${isActive ? 'rgba(242,70,46,0.4)' : 'rgba(29,74,53,0.14)'}`,
    }}
    onMouseEnter={e => { if (!isActive) { e.currentTarget.style.borderColor = 'rgba(242,70,46,0.4)'; e.currentTarget.style.background = '#F8F3E9'; } }}
    onMouseLeave={e => { if (!isActive) { e.currentTarget.style.borderColor = 'rgba(29,74,53,0.14)'; e.currentTarget.style.background = '#F8F3E9'; } }}>
    <div className="flex items-center gap-3">
      <div className={`w-12 h-9 rounded-lg overflow-hidden shrink-0 bg-gradient-to-br ${project.color}`}
        style={{ border: '1px solid rgba(29,74,53,0.14)' }}>
        {project.imageUrl
          ? <img src={project.imageUrl} alt="" className="w-full h-full object-cover object-top" loading="lazy" />
          : <div className="w-full h-full flex items-center justify-center text-lg">{project.icon}</div>}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold truncate transition-colors duration-200"
          style={{ color: '#1D4A35' }}>
          {project.title}
        </p>
        <p className="text-xs truncate mt-0.5" style={{ color: 'rgba(29,74,53,0.65)' }}>{project.subtitle}</p>
      </div>
      <ArrowUpRight size={14} className="shrink-0 transition-all duration-200"
        style={{ color: isActive ? '#F2462E' : 'rgba(29,74,53,0.4)' }} />
    </div>
  </motion.button>
);

// ── Section ─────────────────────────────────────────────────────────────────
const Projects = () => {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section id="projects" className="section-padding relative" style={{ background: '#EEE5D4' }}>
      <div className="container-custom relative">
        <SectionHeader eyebrow="Featured Projects" title="Things I've built"
          subtitle="Real projects built with real purpose — not tutorials, not demos."
          tone="light" />

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
                className="rounded-2xl overflow-hidden" style={{ background: '#F8F3E9', border: '1px solid rgba(29,74,53,0.14)' }}>

                <div className="p-4 pb-0">
                  <BrowserMockup src={project.imageUrl} alt={project.title} color={project.color} />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#F2462E' }}>
                        {project.subtitle}
                      </span>
                      <h3 className="text-xl font-bold mt-1" style={{ color: '#1D4A35' }}>{project.title}</h3>
                    </div>
                    <span className="text-3xl shrink-0">{project.icon}</span>
                  </div>

                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(29,74,53,0.76)' }}>{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map(t => (
                      <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-lg"
                        style={{ color: '#1D4A35', background: '#EEE5D4', border: '1px solid rgba(29,74,53,0.12)' }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(29,74,53,0.14)' }}>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 active:scale-95"
                        style={{ background: '#F2462E', color: '#FFFFFF' }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#F2462E'; e.currentTarget.style.transform = 'scale(1.04)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#F2462E'; e.currentTarget.style.transform = 'scale(1)'; }}>
                        <ExternalLink size={14} />Live Demo
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300"
                      style={{ border: '1px solid rgba(29,74,53,0.2)', color: '#1D4A35' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = '#F2462E'; e.currentTarget.style.color = '#F2462E'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(29,74,53,0.2)'; e.currentTarget.style.color = '#1D4A35'; }}>
                      <GithubIcon size={14} />Source Code
                    </a>

                    {/* Dots */}
                    <div className="flex items-center gap-1.5 ml-auto">
                      {projects.map((_, i) => (
                        <button key={i} onClick={() => setActive(i)}
                          className="rounded-full transition-all duration-300"
                          style={{ width: active === i ? '20px' : '8px', height: '8px', background: active === i ? '#F2462E' : 'rgba(29,74,53,0.2)' }}
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
