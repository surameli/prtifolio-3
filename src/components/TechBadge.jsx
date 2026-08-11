import { motion } from 'framer-motion';
import { useState } from 'react';

const TechBadge = ({ tech, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const Icon = tech.icon;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: index * 0.05,
      }}
      whileHover={{
        y: -4,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="
        group
        rounded-xl
        p-4
        border
        cursor-default
        transition-all
        duration-300
      "
      style={{
        background: isHovered
          ? '#28251F'
          : '#211F1B',

        borderColor: isHovered
          ? tech.color
          : '#34312B',

        boxShadow: isHovered
          ? `0 8px 25px ${tech.color}15`
          : 'none',
      }}
    >

      <div className="flex flex-col items-center text-center gap-3">

        {/* Icon */}
        <div
          className="
            w-10
            h-10
            flex
            items-center
            justify-center
            transition-all
            duration-300
          "
          style={{
            transform: isHovered
              ? 'scale(1.12)'
              : 'scale(1)',
          }}
        >
          {Icon && (
            <Icon
              size={28}
              style={{
                color: isHovered
                  ? tech.color
                  : '#716D65',

                transition:
                  'color 0.3s ease',
              }}
            />
          )}
        </div>

        {/* Technology Name */}
        <p
          className="
            text-xs
            font-semibold
            transition-colors
            duration-300
          "
          style={{
            color: isHovered
              ? '#F1EEE7'
              : '#A8A39A',
          }}
        >
          {tech.name}
        </p>

        {/* Description */}
        {/* Tooltip */}
        {isHovered && (

         <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1.5 rounded-lg text-xs

           pointer-events-none whitespace-nowrap shadow-xl z-10"

      style={{ background: '#28251F', border: '1px solid #34312B', color: '#A8A39A' }}>

 {tech.desc}

 <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent"

 style={{ borderTopColor: '#28251F' }} />

</div>
)}
      </div>
    </motion.div>
  );
};

export default TechBadge;