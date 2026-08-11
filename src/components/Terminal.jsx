import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const lines = [
  { text: '$ npm run build',          delay: 0,    color: '#A8A39A' },
  { text: '  Building ideas...',      delay: 800,  color: '#716D65' },
  { text: '  ✓ API connected',        delay: 1600, color: '#6F8F72' },
  { text: '  ✓ Database connected',   delay: 2400, color: '#6F8F72' },
  { text: '  ✓ Auth configured',      delay: 3200, color: '#6F8F72' },
  { text: '  ✓ Telegram bot ready',   delay: 4000, color: '#6F8F72' },
  { text: '  ✓ Application ready',    delay: 4800, color: '#C47A4A' },
  { text: '',                          delay: 5200, color: '' },
  { text: "  > Let's build something.", delay: 5600, color: '#D89568' },
];

const Terminal = () => {
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    lines.forEach((_, i) => {
      setTimeout(() => setVisibleLines((p) => [...p, i]), lines[i].delay);
    });
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="rounded-xl overflow-hidden w-full max-w-sm"
      style={{ background: '#191816', border: '1px solid #34312B' }}>

      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3" style={{ background: '#211F1B', borderBottom: '1px solid #34312B' }}>
        <div className="w-3 h-3 rounded-full" style={{ background: '#8B3A3A' }} />
        <div className="w-3 h-3 rounded-full" style={{ background: '#8B6A1E' }} />
        <div className="w-3 h-3 rounded-full" style={{ background: '#3A6B3A' }} />
        <span className="ml-2 text-xs font-mono" style={{ color: '#716D65' }}>portfolio.sh</span>
      </div>

      {/* Body */}
      <div className="p-4 font-mono text-xs leading-relaxed min-h-[160px]">
        {lines.map((line, i) => (
          <div key={i} className="transition-all duration-300"
            style={{ opacity: visibleLines.includes(i) ? 1 : 0, color: line.color || '#716D65' }}>
            {line.text || '\u00A0'}
          </div>
        ))}
        {visibleLines.length < lines.length && (
          <span className="inline-block w-2 h-4 animate-pulse" style={{ background: '#C47A4A' }} />
        )}
      </div>
    </motion.div>
  );
};

export default Terminal;
