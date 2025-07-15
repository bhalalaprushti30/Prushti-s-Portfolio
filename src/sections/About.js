import React from 'react';
import './About.css';
import aboutImg from '../assets/about.png'; // replace with your actual image path

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImg} alt="About Me" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I’m Prushti Bhalala, a passionate and detail-oriented frontend developer with a keen eye
            for design and a drive to turn creative ideas into seamless digital experiences.
            I enjoy solving real-world problems through code and constantly seek to improve my skills
            through learning and hands-on projects.
          </p>
          <p>
            When I'm not coding, I’m probably exploring UI trends, participating in coding contests,
            or helping others learn. I'm committed to continuous growth and aspire to contribute
            to impactful tech products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
