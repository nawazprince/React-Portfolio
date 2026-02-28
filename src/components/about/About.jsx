import React from 'react';
import './about.css';
import ME from '../../assets/me2.jpeg';

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
                <span className="stat_number">30+</span>
                <span className="stat_label">Projects Delivered</span>
              </div>
            </div>

            <p className="about_bio fade-up">
              Software developer specializing in the .NET ecosystem. Currently at Corporate IT Limited,
              building and maintaining enterprise applications with MS SQL, ASP.NET Web Forms,
              Web API, ASP.NET MVC, and Angular JS.
            </p>

            <a href="#contact" className="btn btn-primary fade-up">Let's Talk</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
