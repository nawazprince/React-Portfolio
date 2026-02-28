import React, { useState, useEffect } from 'react';
import './nav.css';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('header');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      setMenuOpen(false);

      const sections = ['header', 'about', 'experience', 'services', 'contact'];
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <nav className={`${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="nav_container">
        <a href="#header" className="nav_logo" onClick={close}>Syed Nawaz</a>

        <div className={`nav_links${menuOpen ? ' open' : ''}`}>
          <a href="#about"      className={activeSection === 'about'      ? 'active' : ''} onClick={close}>About</a>
          <a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={close}>Skills</a>
          <a href="#services"   className={activeSection === 'services'   ? 'active' : ''} onClick={close}>Services</a>
          <a href="#contact"    className={activeSection === 'contact'    ? 'active' : ''} onClick={close}>Contact</a>
        </div>

        <button
          className={`nav_toggle${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
