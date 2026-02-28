import React from 'react';
import './services.css';

const serviceCards = [
  {
    number: '01',
    title: 'Backend API Development',
    description: 'Designing and building robust RESTful APIs with ASP.NET Core and Web API — scalable, secure, and production-ready.',
  },
  {
    number: '02',
    title: 'Legacy System Modernization',
    description: 'Refactoring and upgrading legacy .NET applications to modern frameworks, improving maintainability and long-term performance.',
  },
  {
    number: '03',
    title: 'Database Design & Optimization',
    description: 'Architecting MS SQL schemas and tuning complex queries to reduce execution time and support high-volume workloads.',
  },
  {
    number: '04',
    title: 'Third-party Integrations',
    description: 'Integrating external APIs and services — payment gateways, SMS providers, and enterprise platforms — into .NET applications.',
  },
];

const Services = () => {
  return (
    <section id='services'>
      <div className="container">
        <p className="section_label">What I Bring</p>
        <h2 className="section_heading fade-up">Services</h2>

        <div className="services_grid">
          {serviceCards.map((card, i) => (
            <div className="service_card fade-up" key={i}>
              <span className="service_number">{card.number}</span>
              <h3 className="service_title">{card.title}</h3>
              <p className="service_desc">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
