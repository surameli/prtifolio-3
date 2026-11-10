import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import SectionHeader from '../components/SectionHeader';
import AnimatedSection from '../components/AnimatedSection';
import { personalInfo } from '../data';

const contactItems = [
  { icon: <Mail size={18} />,       label: 'Email',    value: personalInfo.email,        href: `mailto:${personalInfo.email}` },
  { icon: <GithubIcon size={18} />, label: 'GitHub',   value: 'surameli',                href: personalInfo.github },
  { icon: <LinkedinIcon size={18}/>, label: 'LinkedIn', value: 'surafel melliyon',        href: personalInfo.linkedin },
];

const Contact = () => {
  const [form,   setForm]   = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('sending');
    try {
      await new Promise(res => setTimeout(res, 1500));
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const inputStyle = (field) => ({
    width: '100%',
    background: '#EEE5D4',
    border: `1px solid ${errors[field] ? '#F2462E' : 'rgba(29,74,53,0.18)'}`,
    borderRadius: '12px',
    padding: '14px 16px',
    color: '#1D4A35',
    fontSize: '14px',
    outline: 'none',
    transition: 'border-color 0.2s',
  });

  return (
    <section id="contact" className="section-padding relative" style={{ background: '#EEE5D4' }}>
      <div
        className="absolute top-0 left-1/2 h-24 w-px -translate-x-1/2"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(242,70,46,0.35))' }}
      />
      <div className="container-custom relative">
        <SectionHeader
          eyebrow="Contact"
          title={<>Let's build something <span style={{ color: '#F2462E' }}>useful.</span></>}
          subtitle="Have an idea, project, or opportunity? I'd love to hear from you."
          tone="light"
          titleClassName="text-5xl font-black"
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 max-w-5xl mx-auto">

          {/* Left */}
          <div className="lg:col-span-2">
            <AnimatedSection direction="left">
              <div className="space-y-3 mb-8">
                {contactItems.map((info) => (
                  <a key={info.label} href={info.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group"
                    style={{ background: '#F8F3E9', border: '1px solid rgba(29,74,53,0.14)' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(242,70,46,0.4)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(29,74,53,0.14)'}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all"
                      style={{ background: 'rgba(242,70,46,0.1)', border: '1px solid rgba(242,70,46,0.25)', color: '#F2462E' }}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-medium" style={{ color: 'rgba(29,74,53,0.62)' }}>{info.label}</p>
                      <p className="text-sm font-medium mt-0.5" style={{ color: '#1D4A35' }}>{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="rounded-xl p-5" style={{ background: '#F8F3E9', border: '1px solid rgba(29,74,53,0.14)' }}>
                <p className="text-xs uppercase tracking-widest font-medium mb-2" style={{ color: 'rgba(29,74,53,0.62)' }}>Response time</p>
                <p className="text-sm" style={{ color: '#1D4A35' }}>I typically respond within 24–48 hours.</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Right */}
          <div className="lg:col-span-3">
            <AnimatedSection direction="right" delay={0.15}>
              <form onSubmit={handleSubmit} noValidate className="rounded-2xl p-7"
                style={{ background: '#F8F3E9', border: '1px solid rgba(29,74,53,0.14)' }}>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  {['name','email'].map(field => (
                    <div key={field}>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: '#1D4A35' }}>
                        {field.charAt(0).toUpperCase() + field.slice(1)}
                      </label>
                      <input type={field === 'email' ? 'email' : 'text'} name={field}
                        value={form[field]} onChange={handleChange}
                        placeholder={field === 'email' ? 'your@email.com' : 'Your name'}
                        style={inputStyle(field)}
                        onFocus={e => e.target.style.borderColor = '#F2462E'}
                        onBlur={e => e.target.style.borderColor = errors[field] ? '#F2462E' : 'rgba(29,74,53,0.18)'}
                        aria-invalid={!!errors[field]} />
                      {errors[field] && <p className="text-xs mt-1" style={{ color: '#F2462E' }}>{errors[field]}</p>}
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-medium mb-1.5" style={{ color: '#1D4A35' }}>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                    placeholder="Tell me about your project, idea, or opportunity..."
                    style={{ ...inputStyle('message'), resize: 'none' }}
                    onFocus={e => e.target.style.borderColor = '#F2462E'}
                    onBlur={e => e.target.style.borderColor = errors.message ? '#F2462E' : 'rgba(29,74,53,0.18)'}
                    aria-invalid={!!errors.message} />
                  {errors.message && <p className="text-xs mt-1" style={{ color: '#F2462E' }}>{errors.message}</p>}
                </div>

                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 rounded-lg text-sm mb-4"
                    style={{ background: 'rgba(29,74,53,0.08)', border: '1px solid rgba(29,74,53,0.2)', color: '#1D4A35' }}>
                    <CheckCircle size={16} /> Message sent! I'll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 rounded-lg text-sm mb-4"
                    style={{ background: 'rgba(242,70,46,0.08)', border: '1px solid rgba(242,70,46,0.25)', color: '#F2462E' }}>
                    <AlertCircle size={16} /> Something went wrong. Try emailing me directly.
                  </motion.div>
                )}

                <button type="submit" disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm transition-all duration-300 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: '#F2462E', color: '#FFFFFF' }}
                  onMouseEnter={e => { if (status !== 'sending') e.currentTarget.style.background = '#F2462E'; }}
                  onMouseLeave={e => e.currentTarget.style.background = '#F2462E'}>
                  {status === 'sending'
                    ? <><div className="w-4 h-4 border-2 rounded-full animate-spin" style={{ borderColor: 'rgba(255,255,255,0.35)', borderTopColor: '#FFFFFF' }} />Sending...</>
                    : <><Send size={16} />Send Message</>}
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
