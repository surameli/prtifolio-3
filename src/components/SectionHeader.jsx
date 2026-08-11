import AnimatedSection from './AnimatedSection';

const SectionHeader = ({ eyebrow, title, subtitle, className = '' }) => (
  <div className={`text-center mb-16 ${className}`}>
    <AnimatedSection>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
          style={{ color: '#C47A4A', border: '1px solid rgba(196,122,74,0.3)', background: 'rgba(196,122,74,0.07)' }}>
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight" style={{ color: '#F1EEE7' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#A8A39A' }}>
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  </div>
);

export default SectionHeader;
