import React from 'react';
import './education.css';

const degrees = [
  {
    degree: 'Master of Science',
    field: 'Statistics',
    institution: 'University of Chittagong',
  },
  {
    degree: 'Bachelor of Science',
    field: 'Statistics',
    institution: 'University of Chittagong',
  },
];

const Education = () => {
  return (
    <section id='education'>
      <div className="container">
        <p className="section_label">Academic Background</p>
        <h2 className="section_heading fade-up">Education</h2>

        <div className="education_list">
          {degrees.map((item, i) => (
            <div className="education_entry fade-up" key={i}>
              <div className="education_left">
                <span className="education_degree">{item.degree}</span>
                <span className="education_field">in {item.field}</span>
              </div>
              <div className="education_right">
                <span className="education_institution">{item.institution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
