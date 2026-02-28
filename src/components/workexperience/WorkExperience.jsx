import React from 'react';
import './workexperience.css';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'MBSPro',
    period: 'Dec 2025 — Present',
    location: 'Australia · Remote',
    bullets: [
      'Developing and maintaining AI-driven web applications using .NET and related technologies.',
      'Collaborating with front-end developers and designers to deliver high-quality software, participating in code reviews and best practices.',
      'Troubleshooting, debugging, and upgrading existing systems while contributing to project planning.',
    ],
    tags: ['ASP.NET Core', '.NET', 'Web API', 'MS SQL'],
  },
  {
    role: 'Assistant Programmer',
    company: 'Corporate IT Limited',
    period: 'Oct 2023 — Nov 2025',
    location: 'Chattogram, Bangladesh · On-site',
    bullets: [
      'Developed and maintained web applications using MS SQL, ASP.NET MVC, Web API, .NET 6, and JavaScript.',
      'Integrated and optimized third-party APIs including SMS and payment gateways, improving end-to-end system functionality.',
      'Refactored legacy code and optimized complex SQL queries, significantly reducing execution time and improving scalability.',
    ],
    tags: ['ASP.NET MVC', 'Web API', '.NET 6', 'MS SQL', 'JavaScript'],
  },
  {
    role: 'Software Engineer',
    company: 'Alchemy Software Limited',
    period: 'Aug 2020 — Sep 2023',
    location: 'Chattogram, Bangladesh · On-site',
    bullets: [
      'Built and maintained custom software solutions using a full stack of MSSQL, ASP.NET Web Forms, MVC, Web API, JavaScript, and AngularJS.',
      'Contributed to design, development, and delivery of new software features, enhancing product functionality and user experience.',
      'Improved software quality by refactoring existing code and optimizing SQL queries for more efficient and maintainable applications.',
    ],
    tags: ['ASP.NET MVC', 'Web API', 'Web Forms', 'AngularJS', 'MS SQL'],
  },
];

const WorkExperience = () => {
  return (
    <section id='work'>
      <div className="container">
        <p className="section_label">Career History</p>
        <h2 className="section_heading fade-up">Work Experience</h2>

        <div className="work_timeline">
          {experiences.map((exp, i) => (
            <div className="work_entry fade-up" key={i}>
              <div className="work_entry-line" />
              <div className="work_entry-dot" />
              <div className="work_entry-body">
                <div className="work_entry-header">
                  <div>
                    <h3 className="work_role">{exp.role}</h3>
                    <span className="work_company">{exp.company}</span>
                  </div>
                  <div className="work_meta">
                    <span className="work_period">{exp.period}</span>
                    <span className="work_location">{exp.location}</span>
                  </div>
                </div>
                <ul className="work_bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <div className="work_tags">
                  {exp.tags.map((tag, k) => (
                    <span className="work_tag" key={k}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
