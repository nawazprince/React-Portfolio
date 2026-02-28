import React, { useState, useEffect } from 'react';
import './nav.css';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('header');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

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

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav_container">
        <a href="#header" className="nav_logo">Syed Nawaz</a>
        <div className="nav_links">
          <a href="#about"      className={activeSection === 'about'      ? 'active' : ''}>About</a>
          <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Skills</a>
          <a href="#services"   className={activeSection === 'services'   ? 'active' : ''}>Services</a>
          <a href="#contact"    className={activeSection === 'contact'    ? 'active' : ''}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
