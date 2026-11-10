import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data';

const Footer = () => (
  <footer style={{ background: '#EEE5D4', borderTop: '1px solid rgba(29,74,53,0.14)' }}>
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
        style={{ borderColor: 'rgba(29,74,53,0.14)' }}
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
              background: '#F2462E',
              color: '#FFFFFF',
            }}
          >
            S
          </div>

          <div>
            <p
              className="font-bold text-sm"
              style={{ color: '#1D4A35' }}
            >
              {personalInfo.name}
            </p>

            <p
              className="text-xs"
              style={{ color: 'rgba(29,74,53,0.68)' }}
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
              hover:bg-[#F8F3E9]
            "
            style={{ color: '#1D4A35' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#F2462E';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#1D4A35';
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
              hover:bg-[#F8F3E9]
            "
            style={{ color: '#1D4A35' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#F2462E';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#1D4A35';
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
            color: '#1D4A35',
            border: '1px solid rgba(29,74,53,0.2)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#F2462E';
            e.currentTarget.style.borderColor = '#F2462E';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#1D4A35';
            e.currentTarget.style.borderColor = 'rgba(29,74,53,0.2)';
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
        style={{ borderColor: 'rgba(29,74,53,0.14)' }}
      >
        <p
          className="text-xs"
          style={{ color: 'rgba(29,74,53,0.68)' }}
        >
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>

    </div>
  </footer>
);

export default Footer;