import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { exploring } from '../data';

const Exploring = () => (
  <section id="exploring" className="section-padding relative" style={{ background: '#11100E' }}>
    <div className="container-custom relative">
      <SectionHeader
        eyebrow="Currently Exploring"
        title="Beyond the usual stack"
        subtitle="Development doesn't stop at what I already know. Here's where I'm pushing into new territory."
      />

      <div className="grid md:grid-cols-3 gap-5">
        {exploring.map((item, i) => (
          <motion.div key={item.title}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.12 }}
            className="rounded-2xl p-7 relative overflow-hidden transition-all duration-300 group"
            style={{ background: '#211F1B', border: '1px solid #34312B' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(196,122,74,0.35)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#34312B'; e.currentTarget.style.transform = 'translateY(0)'; }}>

            <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
              {/* {item.icon} */}
            </div>
            <h3 className="text-lg font-bold mb-3" style={{ color: '#F1EEE7' }}>{item.title}</h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#A8A39A' }}>{item.description}</p>

            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 text-xs font-medium rounded-lg"
                  style={{ color: '#C47A4A', background: 'rgba(196,122,74,0.08)', border: '1px solid rgba(196,122,74,0.2)' }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom accent line on hover */}
            <div className="mt-5 h-px w-0 rounded-full transition-all duration-500 group-hover:w-full"
              style={{ background: 'linear-gradient(to right, #C47A4A, #8F5A3B)' }} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Exploring;
