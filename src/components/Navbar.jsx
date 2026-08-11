import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data';

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Stack',      href: '#stack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

const Navbar = () => {
  const [scrolled,    setScrolled]   = useState(false);
  const [mobileOpen,  setMobileOpen] = useState(false);
  const [active,      setActive]     = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={scrolled ? {
          background: 'rgba(25,24,22,0.92)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid #34312B',
          boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        } : { background: 'transparent' }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-300"
                style={{ background: '#C47A4A', color: '#11100E' }}>
                S
              </div>
              <span className="font-bold text-sm tracking-wide hidden sm:block" style={{ color: '#F1EEE7' }}>
                Surafel<span style={{ color: '#C47A4A' }}>.</span>
              </span>
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => handleNav(link.href)}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                  style={active === link.href
                    ? { color: '#C47A4A', background: 'rgba(196,122,74,0.08)' }
                    : { color: '#A8A39A' }}
                  onMouseEnter={e => { if (active !== link.href) e.currentTarget.style.color = '#F1EEE7'; }}
                  onMouseLeave={e => { if (active !== link.href) e.currentTarget.style.color = '#A8A39A'; }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CV button */}
            <div className="hidden md:flex items-center">
              <a href={personalInfo.cvLink} download="Surafel_Melliyon_CV.pdf"
                className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300"
                style={{ color: '#C47A4A', border: '1px solid rgba(196,122,74,0.35)', background: 'transparent' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(196,122,74,0.08)'; e.currentTarget.style.borderColor = '#C47A4A'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(196,122,74,0.35)'; }}
              >
                Download CV
              </a>
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg transition-all"
              style={{ color: '#A8A39A' }}
              aria-label="Toggle menu">
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 p-4 md:hidden"
            style={{ background: 'rgba(25,24,22,0.97)', borderBottom: '1px solid #34312B', backdropFilter: 'blur(14px)' }}>
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => handleNav(link.href)}
                  className="text-left px-4 py-3 rounded-lg text-sm font-medium transition-all"
                  style={{ color: '#A8A39A' }}>
                  {link.label}
                </button>
              ))}
              <a href={personalInfo.cvLink} download="Surafel_Melliyon_CV.pdf"
                className="mt-2 px-4 py-3 text-sm font-medium text-center rounded-lg transition-all"
                style={{ color: '#C47A4A', border: '1px solid rgba(196,122,74,0.35)' }}>
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
