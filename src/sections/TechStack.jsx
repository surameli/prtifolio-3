import { motion } from 'framer-motion';

import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiCloudinary,
} from 'react-icons/si';

import {
  FaTelegram,
  FaCss3Alt,
  FaBrain,
  FaProjectDiagram,
  FaLink,
} from 'react-icons/fa';

import SectionHeader from '../components/SectionHeader';
import TechBadge from '../components/TechBadge';

const techStack = {
  Frontend: [
    {
      name: 'React.js',
      icon: SiReact,
      color: '#61DAFB',
      desc: 'Component-based UI',
    },
    {
      name: 'JavaScript',
      icon: SiJavascript,
      color: '#F7DF1E',
      desc: 'Core scripting language',
    },
    {
      name: 'HTML5',
      icon: SiHtml5,
      color: '#E34F26',
      desc: 'Semantic markup',
    },
    {
      name: 'CSS3',
      icon: FaCss3Alt,
      color: '#1572B6',
      desc: 'Styling & animations',
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      color: '#38BDF8',
      desc: 'Utility-first CSS',
    },
    {
      name: 'Bootstrap',
      icon: SiBootstrap,
      color: '#7952B3',
      desc: 'Responsive framework',
    },
    {
      name: 'Material UI',
      icon: SiMui,
      color: '#007FFF',
      desc: 'React component library',
    },
    {
      name: 'Vite',
      icon: SiVite,
      color: '#646CFF',
      desc: 'Fast build tooling',
    },
  ],

  Backend: [
    {
      name: 'Node.js',
      icon: SiNodedotjs,
      color: '#68A063',
      desc: 'Server-side JavaScript',
    },
    {
      name: 'Express.js',
      icon: SiExpress,
      color: '#1D4A35',
      desc: 'Web framework',
    },
    {
      name: 'REST APIs',
      icon: FaLink,
      color: '#C47A4A',
      desc: 'API design & integration',
    },
    {
      name: 'JWT Auth',
      icon: SiJsonwebtokens,
      color: '#D63AFF',
      desc: 'Secure authentication',
    },
  ],

  Database: [
    {
      name: 'MySQL',
      icon: SiMysql,
      color: '#4479A1',
      desc: 'Relational database',
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
      color: '#47A248',
      desc: 'NoSQL database',
    },
  ],

  Tools: [
    {
      name: 'Git',
      icon: SiGit,
      color: '#F05032',
      desc: 'Version control',
    },
    {
      name: 'GitHub',
      icon: SiGithub,
      color: '#1D4A35',
      desc: 'Code hosting & collaboration',
    },
    {
      name: 'Cloudinary',
      icon: SiCloudinary,
      color: '#3448C5',
      desc: 'Media management',
    },
    {
      name: 'Telegram Bot API',
      icon: FaTelegram,
      color: '#26A5E4',
      desc: 'Bot automation',
    },
    {
      name: 'Grammy',
      icon: FaTelegram,
      color: '#26A5E4',
      desc: 'Telegram bot framework',
    },
  ],

  Exploring: [
    {
      name: 'AI / ML',
      icon: FaBrain,
      color: '#A78BFA',
      desc: 'Artificial Intelligence',
    },
    {
      name: 'System Design',
      icon: FaProjectDiagram,
      color: '#6F8F72',
      desc: 'Architecture & scalability',
    },
  ],
};

const categoryColors = {
  Frontend: {
    color: '#F2462E',
    bg: 'rgba(242, 70, 46, 0.08)',
    border: 'rgba(242, 70, 46, 0.25)',
  },

  Backend: {
    color: '#1D4A35',
    bg: 'rgba(29, 74, 53, 0.08)',
    border: 'rgba(29, 74, 53, 0.2)',
  },

  Database: {
    color: '#F2462E',
    bg: 'rgba(242, 70, 46, 0.06)',
    border: 'rgba(242, 70, 46, 0.18)',
  },

  Tools: {
    color: '#1D4A35',
    bg: 'rgba(29, 74, 53, 0.08)',
    border: 'rgba(29, 74, 53, 0.2)',
  },

  Exploring: {
    color: '#F2462E',
    bg: 'rgba(242, 70, 46, 0.08)',
    border: 'rgba(242, 70, 46, 0.25)',
  },
};

const TechStack = () => {
  return (
    <section
      id="stack"
      className="section-padding relative"
      style={{ background: '#EEE5D4' }}
    >
      <div className="container-custom relative">

        <SectionHeader
          eyebrow="Tech Stack"
          title={<>What I <span style={{ color: '#F2462E' }}>work</span> with</>}
          subtitle="Technologies I use to turn ideas into working software."
          tone="light"
          titleClassName="text-5xl font-black"
        />

        <div className="space-y-10">

          {Object.entries(techStack).map(
            ([category, items], catIdx) => {
              const c = categoryColors[category];

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: catIdx * 0.08,
                  }}
                >

                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">

                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        color: c.color,
                        background: c.bg,
                        border: `1px solid ${c.border}`,
                      }}
                    >
                      {category}
                    </span>

                    <div
                      className="flex-1 h-px"
                      style={{
                        background: 'rgba(29,74,53,0.18)',
                      }}
                    />

                  </div>

                  {/* Technology Cards */}
                  <div
                    className="
                      grid
                      grid-cols-2
                      sm:grid-cols-3
                      md:grid-cols-4
                      lg:grid-cols-6
                      gap-3
                    "
                  >
                    {items.map((tech, i) => (
                      <TechBadge
                        key={tech.name}
                        tech={tech}
                        index={i}
                      />
                    ))}
                  </div>

                </motion.div>
              );
            }
          )}

        </div>
      </div>
    </section>
  );
};

export default TechStack;