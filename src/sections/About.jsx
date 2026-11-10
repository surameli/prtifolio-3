import { motion } from 'framer-motion';
import { MapPin, Code2, Cpu, Layers, Calendar } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionHeader from '../components/SectionHeader';
import { personalInfo, education } from '../data';

const highlights = [
  { icon: <Code2 size={18} />, label: 'Full-Stack Web Applications',  desc: 'React frontends, Node.js backends, MySQL databases' },
  { icon: <span className="text-sm">✈️</span>, label: 'Telegram Automation Systems', desc: 'Bot-driven workflows with Grammy & Telegram Bot API' },
  { icon: <Cpu size={18} />,   label: 'Authentication & Security',    desc: 'JWT auth, role-based access, secure API design' },
  { icon: <Layers size={18} />,label: 'Admin Dashboards & Portals',   desc: 'Management systems with complex data relationships' },
];

const About = () => (
  <section id="about" className="section-padding relative" style={{ background: '#EEE5D4' }}>
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
      style={{ background: 'linear-gradient(to bottom, transparent, rgba(242,70,46,0.35))' }} />

    <div className="container-custom">
      <SectionHeader eyebrow="About Me" title="Building with curiosity." subtitle="Creating with purpose." tone="light" />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* LEFT */}
        <AnimatedSection direction="left">
          <div className="space-y-5 leading-relaxed text-base" style={{ color: '#1D4A35' }}>
            <p>I'm a Computer Science graduate from Unity University in Addis Ababa, and I've been
              writing code long enough to know the difference between software that just works
              and software that actually solves problems.</p>
            <p>My interest isn't in collecting technologies — it's in building things with them.
              I've built full-stack web apps, connected Telegram bots to backend APIs, handled
              authentication flows, managed file uploads, and wired together databases that
              needed to talk to multiple services at once.</p>
            <p>Right now I'm expanding into AI and exploring how intelligent systems can be
              integrated into real-world applications. That curiosity is what drives me forward.</p>
            <p>When I'm not building, I'm learning the next thing that'll make me better at it.</p>
          </div>

          <div className="mt-8">
            <h4 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#1D4A35' }}>
              What I build
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <motion.div key={h.label}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-xl transition-all duration-300"
                  style={{ background: '#F8F3E9', border: '1px solid rgba(29,74,53,0.14)' }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(242,70,46,0.10)', border: '1px solid rgba(242,70,46,0.25)', color: '#F2462E' }}>
                    {h.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: '#1D4A35' }}>{h.label}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(29,74,53,0.72)' }}>{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* RIGHT */}
        <AnimatedSection direction="right" delay={0.15}>
          {/* Profile card */}
          <div className="relative mb-8">
            <div className="absolute -inset-4 rounded-3xl" style={{ background: 'rgba(242,70,46,0.06)', filter: 'blur(20px)' }} />
            <div className="relative rounded-2xl p-8" style={{ background: '#F8F3E9', border: '1px solid rgba(29,74,53,0.14)' }}>
              <div className="flex items-start gap-5 mb-8">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-black"
                    style={{ background: '#F2462E', color: '#FFFFFF', boxShadow: '0 8px 24px rgba(242,70,46,0.2)' }}>S</div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                    style={{ background: '#1D4A35', borderColor: '#F8F3E9' }}>
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#EEE5D4' }} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold" style={{ color: '#1D4A35' }}>{personalInfo.name}</h3>
                  <p className="text-sm font-medium mt-0.5" style={{ color: '#F2462E' }}>{personalInfo.title}</p>
                  <div className="flex items-center gap-1.5 mt-2 text-xs" style={{ color: 'rgba(29,74,53,0.72)' }}>
                    <MapPin size={11} />{personalInfo.location}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl mb-6" style={{ background: '#EEE5D4', border: '1px solid rgba(29,74,53,0.12)' }}>
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'rgba(29,74,53,0.72)' }}>Currently</p>
                <p className="text-sm font-medium" style={{ color: '#1D4A35' }}>💻 {personalInfo.status}</p>
              </div>

              <div className="space-y-3">
                {[
                  { label: 'Focus',     value: 'Full-Stack Development' },
                  { label: 'Exploring', value: 'Artificial Intelligence' },
                  { label: 'Based in',  value: 'Addis Ababa, Ethiopia' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between text-sm pb-2.5"
                    style={{ borderBottom: '1px solid rgba(29,74,53,0.14)' }}>
                    <span style={{ color: 'rgba(29,74,53,0.72)' }}>{item.label}</span>
                    <span className="font-medium" style={{ color: '#1D4A35' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-base">🎓</span>
              <h4 className="text-sm font-semibold uppercase tracking-widest" style={{ color: '#1D4A35' }}>Education</h4>
              <div className="flex-1 h-px ml-1" style={{ background: 'rgba(29,74,53,0.2)' }} />
            </div>
            <div className="space-y-3">
              {education.map((edu, i) => (
                <motion.div key={`${edu.institution}-${i}`}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="rounded-xl p-4 transition-all duration-300 group"
                  style={{ background: '#F8F3E9', border: '1px solid rgba(29,74,53,0.14)' }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(242,70,46,0.45)'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(29,74,53,0.14)'}>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0"
                      style={{ background: 'rgba(242,70,46,0.10)', border: '1px solid rgba(242,70,46,0.25)' }}>
                      {edu.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-semibold text-sm leading-snug" style={{ color: '#1D4A35' }}>{edu.degree}</h5>
                      <p className="text-xs mt-0.5" style={{ color: '#F2462E' }}>{edu.institution}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs shrink-0" style={{ color: 'rgba(29,74,53,0.72)' }}>
                      <Calendar size={10} />{edu.period}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default About;
