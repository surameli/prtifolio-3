import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { processSteps } from '../data';

const Process = () => (
  <section id="process" className="section-padding" style={{ background: '#EEE5D4' }}>
    <div className="container-custom">
      <SectionHeader
        eyebrow="How I Build"
        title="My development process"
        subtitle="Good software isn't an accident. Here's how I approach every project."
        tone="light"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {processSteps.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div key={step.number}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="rounded-2xl p-5 relative overflow-hidden transition-all duration-300 group"
              style={{ background: '#F8F3E9', border: '1px solid rgba(29,74,53,0.14)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(242,70,46,0.4)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(29,74,53,0.1)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(29,74,53,0.14)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>

              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300"
                  style={{ background: 'rgba(242,70,46,0.1)', border: '1px solid rgba(242,70,46,0.2)', color: '#F2462E' }}>
                  {typeof Icon === 'string'
                    ? <span style={{ fontSize: '20px' }}>{Icon}</span>
                    : <Icon size={22} />}
                </div>
                <span className="text-xs font-black font-mono" style={{ color: '#F2462E' }}>{step.number}</span>
              </div>

              <h3 className="font-bold text-sm mb-2 leading-snug transition-colors duration-200"
                style={{ color: '#1D4A35' }}>
                {step.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(29,74,53,0.72)' }}>{step.description}</p>

              <div className="mt-4 h-px w-0 rounded-full transition-all duration-500 group-hover:w-full"
                style={{ background: 'linear-gradient(to right, #F2462E, #1D4A35)' }} />
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Process;
