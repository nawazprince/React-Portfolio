import React from 'react';
import './experience.css';

const skillGroups = [
  {
    label: 'Backend',
    skills: ['ASP.NET Core', 'ASP.NET MVC', 'Web API', 'ASP.NET Web Form'],
  },
  {
    label: 'Database',
    skills: ['MS SQL', 'ADO.NET', 'Entity Framework', 'Dapper ORM'],
  },
  {
    label: 'Frontend',
    skills: ['JavaScript', 'Angular JS'],
  },
];

const Experience = () => {
  return (
    <section id='experience'>
      <div className="container">
        <p className="section_label">What I Know</p>
        <h2 className="section_heading fade-up">Skills</h2>

        <div className="skills_groups">
          {skillGroups.map((group, i) => (
            <div className="skill_group fade-up" key={i}>
              <span className="skill_group-label">{group.label}</span>
              <div className="skill_tags">
                {group.skills.map((skill, j) => (
                  <span className="skill_tag" key={j}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
