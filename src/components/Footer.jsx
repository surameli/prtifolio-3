import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data';

const Footer = () => (
  <footer   style={{ background: '#11100E', borderTop: '1px solid #34312B' }}>
    <div className="container-custom">

      {/* Main Footer Line */}
      <div
        className="
          border-t
          py-6
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-5
        "
        style={{ borderColor: '#34312B' }}
      >

        {/* Brand */}
        <div className="flex items-center gap-3">
          <div
            className="
              w-8 h-8
              rounded-lg
              flex items-center justify-center
              font-bold text-sm
            "
            style={{
              background: '#C47A4A',
              color: '#11100E',
            }}
          >
            S
          </div>

          <div>
            <p
              className="font-bold text-sm"
              style={{ color: '#F1EEE7' }}
            >
              {personalInfo.name}
            </p>

            <p
              className="text-xs"
              style={{ color: '#716D65' }}
            >
              {personalInfo.title}
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-2
              rounded-lg
              transition-all
              duration-200
              hover:bg-white/[0.04]
            "
            style={{ color: '#716D65' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#D89568';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#716D65';
            }}
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              p-2
              rounded-lg
              transition-all
              duration-200
              hover:bg-white/[0.04]
            "
            style={{ color: '#716D65' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#D89568';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#716D65';
            }}
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>

        {/* Back To Top */}
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            })
          }
          className="
            flex
            items-center
            gap-2
            px-4
            py-2
            text-sm
            rounded-lg
            transition-all
            duration-200
          "
          style={{
            color: '#716D65',
            border: '1px solid #34312B',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#D89568';
            e.currentTarget.style.borderColor = '#C47A4A';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#716D65';
            e.currentTarget.style.borderColor = '#34312B';
          }}
        >
          ↑ Back to top
        </button>

      </div>

      {/* Copyright */}
      <div
        className="
          py-5
          text-center
          border-t
        "
        style={{ borderColor: '#34312B' }}
      >
        <p
          className="text-xs"
          style={{ color: '#716D65' }}
        >
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>

    </div>
  </footer>
);

export default Footer;