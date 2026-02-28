import React from 'react';
import './header.css';
import CV from '../../assets/CV.pdf';

const Header = () => {
  return (
    <section id='header'>
      <div className="container header_container">
        <div className="header_content fade-up">
          <span className="header_greeting">hello, I'm</span>
          <h1 className="header_name">Syed Nawaz<br />Prince</h1>
          <div className="header_rule" />
          <p className="header_role">.NET Developer</p>
          <div className="header_cta">
            <a href={CV} download className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Let's Talk</a>
          </div>
        </div>

        <div className="header_scroll">
          <span className="scroll_line" />
          <a href="#about" className="scroll_label">scroll</a>
        </div>
      </div>
    </section>
  );
};

export default Header;
