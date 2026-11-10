import { motion } from 'framer-motion';
import { stats } from '../data';

const Stats = () => (
  <section className="py-16 relative overflow-hidden" style={{ background: '#EEE5D4' }}>
    <div className="absolute inset-0"  />
    <div className="container-custom relative">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl p-6 text-center transition-all duration-300 group"
            style={{ background: '#F8F3E9', border: '1px solid rgba(29,74,53,0.14)' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(242,70,46,0.4)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(29,74,53,0.14)'}>
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-2xl md:text-3xl font-black mb-1 transition-all duration-300"
              style={{ color: '#1D4A35' }}
              onMouseEnter={e => e.currentTarget.style.color = '#F2462E'}
              onMouseLeave={e => e.currentTarget.style.color = '#1D4A35'}>
              {stat.value}
            </div>
            <div className="text-sm" style={{ color: 'rgba(29,74,53,0.68)' }}>{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
