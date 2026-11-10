import { motion } from 'framer-motion';
import { MapPin, Code2, Cpu, Layers, Calendar, GraduationCap } from 'lucide-react';
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
      <SectionHeader eyebrow="About Me"  title={<>Building with <span style={{ color: '#F2462E' }}>curiosity.</span></>} subtitle="Creating with purpose." tone="light" />

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

        </AnimatedSection>
      </div>

      {/* Education */}
      <div
        className="mt-12 rounded-2xl p-5 sm:p-7"
        style={{
          background: 'rgba(29,74,53,0.06)',
          border: '1px solid rgba(29,74,53,0.12)',
        }}
      >
        <div className="mb-5 flex items-center gap-3">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl"
            style={{ color: '#FFFFFF', background: '#1D4A35' }}
          >
            <GraduationCap size={20} />
          </div>
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.16em]"
              style={{ color: '#F2462E' }}
            >
              Education
            </p>
            <h3 className="text-lg font-bold" style={{ color: '#1D4A35' }}>
              Where I started building
            </h3>
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={`${edu.institution}-${index}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-wrap items-center gap-4 rounded-xl p-4 sm:flex-nowrap"
              style={{
                background: '#F8F3E9',
                border: '1px solid rgba(29,74,53,0.1)',
              }}
            >
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl"
                style={{ background: 'rgba(242,70,46,0.1)' }}
              >
                {edu.icon || <GraduationCap size={20} color="#F2462E" />}
              </div>
              <div className="min-w-0 flex-1">
                <h4
                  className="text-sm font-bold leading-snug"
                  style={{ color: '#1D4A35' }}
                >
                  {edu.degree}
                </h4>
                <p
                  className="mt-1 text-xs font-medium"
                  style={{ color: '#F2462E' }}
                >
                  {edu.institution}
                </p>
              </div>
              <div
                className="ml-[3.75rem] flex shrink-0 items-center gap-1 text-xs sm:ml-0"
                style={{ color: 'rgba(29,74,53,0.68)' }}
              >
                <Calendar size={13} />
                {edu.period}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
