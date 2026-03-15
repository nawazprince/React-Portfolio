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
              .NET Software Developer with 5+ years of experience designing, developing, and maintaining enterprise web applications using C#, 
              ASP.NET Core, ASP.NET MVC, Web API, and SQL Server. 
              Experienced in building RESTful APIs, optimizing database performance, and modernizing legacy systems. 
              Proven ability to deliver scalable software solutions across multiple domains including POS systems, inventory management, 
              school management, and CNF job management systems. Strong background in backend development, API integration, 
              and database optimization.
            </p>

            <a href="#contact" className="btn btn-primary fade-up">Let's Talk</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
