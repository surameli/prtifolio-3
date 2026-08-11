import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { GithubIcon } from './Icons';

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card rounded-2xl overflow-hidden group hover:border-indigo-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/10"
    >
      {/* Project preview banner */}
      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.color}`}>
        {project.imageUrl && !imgError ? (
          <>
            <img
              src={project.imageUrl}
              alt={`${project.title} preview`}
              className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              onError={() => setImgError(true)}
            />
            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080b14] via-black/20 to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative flex items-center justify-center h-full">
              <span className="text-6xl filter drop-shadow-lg">{project.icon}</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#080b14] to-transparent opacity-60" />
          </>
        )}

        {project.featured && (
          <div className="absolute top-3 right-3 z-10">
            <span className="px-2 py-1 text-xs font-semibold bg-indigo-500/90 text-white rounded-full backdrop-blur-sm">
              Featured
            </span>
          </div>
        )}

        {/* Icon badge when image is showing */}
        {project.imageUrl && !imgError && (
          <div className="absolute bottom-3 left-3 z-10">
            <div className="glass border border-white/20 rounded-lg w-9 h-9 flex items-center justify-center text-xl shadow-lg">
              {project.icon}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <span className="text-xs font-medium text-indigo-400 uppercase tracking-widest">
            {project.subtitle}
          </span>
          <h3 className="text-xl font-bold text-white mt-1 group-hover:text-indigo-300 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-xs font-medium text-slate-300 bg-white/5 border border-white/10 rounded-md"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="px-2 py-0.5 text-xs font-medium text-slate-500 bg-white/5 border border-white/10 rounded-md">
              +{project.tech.length - 5} more
            </span>
          )}
        </div>

        {/* Expandable features */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-5"
            >
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {project.longDescription}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {project.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="text-indigo-400 mt-0.5 shrink-0">✓</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              {project.tech.length > 5 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.slice(5).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs font-medium text-slate-300 bg-white/5 border border-white/10 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-300 bg-white/5 border border-white/10 rounded-lg hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <GithubIcon size={14} />
              GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-indigo-400 border border-indigo-500/40 rounded-lg hover:bg-indigo-500/10 transition-all duration-200"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-300 transition-colors"
            aria-label={expanded ? 'Collapse details' : 'Expand details'}
          >
            {expanded ? (
              <>Less <ChevronUp size={14} /></>
            ) : (
              <>Details <ChevronDown size={14} /></>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
