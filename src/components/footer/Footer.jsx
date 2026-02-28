import React from 'react';
import './footer.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <div className="container footer_container">
        <p className="footer_copy">© 2025 Syed Nawaz Prince</p>
        <div className="footer_socials">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/nawazprince"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <BsGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
