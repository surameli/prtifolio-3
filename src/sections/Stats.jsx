import { motion } from 'framer-motion';
import { stats } from '../data';

const Stats = () => (
  <section className="py-16 relative overflow-hidden" style={{ background: '#151412' }}>
    <div className="absolute inset-0" style={{ borderTop: '1px solid #34312B', borderBottom: '1px solid #34312B' }} />
    <div className="container-custom relative">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl p-6 text-center transition-all duration-300 group"
            style={{ background: '#211F1B', border: '1px solid #34312B' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(196,122,74,0.35)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#34312B'}>
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-2xl md:text-3xl font-black mb-1 transition-all duration-300"
              style={{ color: '#F1EEE7' }}
              onMouseEnter={e => e.currentTarget.style.color = '#C47A4A'}
              onMouseLeave={e => e.currentTarget.style.color = '#F1EEE7'}>
              {stat.value}
            </div>
            <div className="text-sm" style={{ color: '#716D65' }}>{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
