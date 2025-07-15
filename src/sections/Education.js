import React from 'react';
import './Education.css';

const educationData = [
  {
    title: 'Bachelor of Technology in Computer Engineering',
    institution: 'Marwadi University (NAAC A+)',
    duration: '2022 - 2026',
    description: 'CGPA: 8.88 — Focused on full-stack development, software engineering, and real-world projects. Participated in technical events and internships.',
  },
  {
    title: 'Higher Secondary (HSC - 12th Science)',
    institution: 'SKV School, Rajkot',
    duration: '2020 - 2021',
    description: 'Scored 60% — Strong foundation in Physics, Chemistry, and Mathematics with early exposure to programming and logical reasoning.',
  },
  {
    title: 'Matriculation (SSC - 10th Grade)',
    institution: 'Shree Auro Education Zone School, Gondal',
    duration: '2019',
    description: 'Scored 94% — Excelled in academics and sparked interest in design, logic, and computer fundamentals.',
  },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className="content">
              <h3>{edu.title}</h3>
              <h4>{edu.institution}</h4>
              <span className="duration">{edu.duration}</span>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
