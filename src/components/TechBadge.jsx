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
          ? '#FFFFFF'
          : '#F8F3E9',

        borderColor: isHovered
          ? '#F2462E'
          : 'rgba(29,74,53,0.14)',

        boxShadow: isHovered
          ? '0 8px 25px rgba(242,70,46,0.12)'
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
                  : '#1D4A35',

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
              ? '#F2462E'
              : '#1D4A35',
          }}
        >
          {tech.name}
        </p>

        {/* Description */}
        {/* Tooltip */}
        {isHovered && (

         <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1.5 rounded-lg text-xs

           pointer-events-none whitespace-nowrap shadow-xl z-10"

      style={{ background: '#1D4A35', border: '1px solid rgba(29,74,53,0.2)', color: '#FFFFFF' }}>

 {tech.desc}

 <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent"

 style={{ borderTopColor: '#1D4A35' }} />

</div>
)}
      </div>
    </motion.div>
  );
};

export default TechBadge;