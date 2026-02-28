import React from 'react';
import './about.css';
import ME from '../../assets/me.png';

const About = () => {
  return (
    <section id='about'>
      <div className="container">
        <p className="section_label">Get To Know</p>
        <div className="about_container">

          <div className="about_photo fade-up">
            <div className="about_photo-frame">
              <img src={ME} alt="Syed Nawaz Prince" />
            </div>
          </div>

          <div className="about_content">
            <h2 className="section_heading fade-up">About Me</h2>

            <div className="about_stats fade-up">
              <div className="about_stat">
                <span className="stat_number">5+</span>
                <span className="stat_label">Years Experience</span>
              </div>
              <div className="about_stat">
                <span className="stat_number">3</span>
                <span className="stat_label">Companies</span>
              </div>
              <div className="about_stat">
                <span className="stat_number">30+</span>
                <span className="stat_label">Projects Delivered</span>
              </div>
            </div>

            <p className="about_bio fade-up">
              Software developer specializing in the .NET ecosystem, with 5+ years building
              and shipping enterprise-grade web applications. Started at Alchemy Software
              engineering full-stack solutions, progressed through Corporate IT integrating
              payment and SMS gateways, and now working remotely as Senior Software Engineer
              at MBSPro — Australia's leading AI-powered MBS billing platform.
            </p>

            <a href="#contact" className="btn btn-primary fade-up">Let's Talk</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
