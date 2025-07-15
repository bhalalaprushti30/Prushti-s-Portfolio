import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    'Secured Top 5 in CodeFest 2024 at Marwadi University',
    'Completed 6-month internship at Saiket Systems',
    'Built 3+ full-stack projects using React & Firebase',
    'Contributor to Open Source (Hacktoberfest)',
    'Certified in Web Development by FreeCodeCamp',
  ];

  return (
    <section id="achievements" className="achievements-section">
      <h2 className="section-title">Achievements</h2>
      <ul className="achievement-list">
        {achievements.map((item, index) => (
          <li key={index}><span>🏅</span> {item}</li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;
