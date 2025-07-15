import React from 'react';
import './Experience.css';

const experienceData = [
  {
    title: 'Frontend Web Development Intern',
    company: 'CODTECH IT SOLUTIONS Pvt. Ltd.',
    location: 'Remote',
    duration: 'Feb 2024 — Completed',
    description: [
      'Developed an Interactive Quiz App, Real-Time Chat App, and Portfolio Website.',
      'Designed an E-learning Platform UI with course listings & progress tracking.',
      'Gained expertise in React.js, WebSockets, JavaScript, and UI/UX.',
    ],
  },
  {
    title: 'Full-Stack Development Intern',
    company: 'Saiket Systems',
    location: 'Remote',
    duration: 'Jan 2024 — Completed',
    description: [
      'Worked on real-world full-stack development projects.',
      'Enhanced problem-solving, technical, and collaboration skills.',
      'Strengthened knowledge in frontend & backend development.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experienceData.map((exp, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <div className="content">
              <h3>{exp.title}</h3>
              <h4>{exp.company} — {exp.location}</h4>
              <span className="duration">{exp.duration}</span>
              <ul>
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
