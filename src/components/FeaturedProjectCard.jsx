import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';

const FeaturedProjectCard = ({ project }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7 }}
      className="glass-card rounded-2xl overflow-hidden group hover:border-indigo-500/40
                 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/15"
    >
      <div className="grid lg:grid-cols-2 gap-0">

        {/* ── Screenshot side ── */}
        <div className={`relative h-64 lg:h-auto min-h-[280px] overflow-hidden bg-gradient-to-br ${project.color}`}>
          {project.imageUrl && !imgError ? (
            <>
              <img
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                className="absolute inset-0 w-full h-full object-cover object-top
                           group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                onError={() => setImgError(true)}
              />
              {/* gradient overlay — bottom fade into card bg */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#080b14]/60 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b14]/80 to-transparent lg:hidden" />
            </>
          ) : (
            <>
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="relative flex items-center justify-center h-full">
                <span className="text-8xl filter drop-shadow-lg">{project.icon}</span>
              </div>
            </>
          )}

          {/* Featured badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold
                             bg-indigo-500/90 text-white rounded-full backdrop-blur-sm shadow-lg">
              ⭐ Featured Project
            </span>
          </div>
        </div>

        {/* ── Content side ── */}
        <div className="p-8 lg:p-10 flex flex-col justify-between">
          <div>
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-widest">
              {project.subtitle}
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mt-2 mb-3
                           group-hover:text-indigo-300 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">{project.longDescription}</p>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {project.features.map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm text-slate-400">
                  <span className="text-indigo-400 mt-0.5 shrink-0">▸</span>
                  {f}
                </div>
              ))}
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-medium text-slate-300
                             bg-white/5 border border-white/10 rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 flex-wrap">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl
                           bg-gradient-to-r from-indigo-600 to-purple-600
                           text-white font-semibold text-sm
                           hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-105
                           transition-all duration-300 active:scale-95"
              >
                <ExternalLink size={15} />
                Live Demo
                <ArrowRight size={14} />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl
                         glass border border-white/10 text-slate-300 font-semibold text-sm
                         hover:border-indigo-400/50 hover:text-white
                         transition-all duration-300"
            >
              <GithubIcon size={15} />
              View Code
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProjectCard;
