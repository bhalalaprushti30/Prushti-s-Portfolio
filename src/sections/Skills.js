import React from 'react';
import './Skills.css';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React.js', level: 75 },
  { name: 'Bootstrap', level: 80 },
  { name: 'Git & GitHub', level: 70 },
  { name: 'Firebase', level: 65 },
  { name: 'Node.js', level: 60 },
  { name: 'Figma / UI Design', level: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            <h4>{skill.name}</h4>
            <div className="skill-bar">
              <div
                className="filled"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="level">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
