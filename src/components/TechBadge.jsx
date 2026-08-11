import { useState } from 'react';
import { motion } from 'framer-motion';

const TechBadge = ({ tech, index }) => {
  const [hovered, setHovered] = useState(false);
  const Icon = tech.icon;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col items-center gap-2.5 rounded-xl p-4 cursor-default transition-all duration-300"
      style={{
        background: hovered ? '#28251F' : '#211F1B',
        border: `1px solid ${hovered ? 'rgba(196,122,74,0.35)' : '#34312B'}`,
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.2)' : 'none',
      }}
    >
      {/* Icon — grey by default, brand color on hover */}
      <div className="transition-all duration-300"
        style={{ color: hovered ? (tech.color || '#C47A4A') : '#716D65', fontSize: 0 }}>
        {Icon
          ? <Icon size={30} />
          : <span style={{ fontSize: '26px', lineHeight: 1 }}>{tech.fallback}</span>}
      </div>

      {/* Name */}
      <span className="text-xs font-medium text-center leading-tight transition-colors duration-300"
        style={{ color: hovered ? '#F1EEE7' : '#A8A39A' }}>
        {tech.name}
      </span>

      {/* Tooltip */}
      {hovered && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1.5 rounded-lg text-xs
                        pointer-events-none whitespace-nowrap shadow-xl z-10"
          style={{ background: '#28251F', border: '1px solid #34312B', color: '#A8A39A' }}>
          {tech.desc}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent"
            style={{ borderTopColor: '#28251F' }} />
        </div>
      )}
    </motion.div>
  );
};

export default TechBadge;
