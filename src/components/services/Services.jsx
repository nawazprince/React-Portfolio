import React from 'react';
import './services.css';

const serviceItems = [
  'Database design and optimization with MS SQL',
  'Web applications with ASP.NET Web Form',
  'Web applications with ASP.NET MVC',
  'RESTful Web API development',
  'Enterprise applications with ASP.NET Core',
];

const Services = () => {
  return (
    <section id='services'>
      <div className="container">
        <p className="section_label">What I Offer</p>
        <h2 className="section_heading fade-up">Services</h2>

        <div className="services_category fade-up">
          <h3 className="services_category-title">Web Application Development</h3>
          <div className="services_rule" />
          <ul className="services_list">
            {serviceItems.map((item, i) => (
              <li className="services_item" key={i}>
                <span className="services_arrow">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
