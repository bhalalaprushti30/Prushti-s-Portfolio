import React from 'react';
import './Home.css';
import myImage from '../assets/profile.png'; // replace with your image
import resumePDF from '../assets/resume.pdf'; // replace with your resume

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-left">
        <h1>
          Hi, I'm <span className="highlight">Prushti 👋</span>
        </h1>
        <p className="subtitle">Frontend Developer | React Enthusiast</p>
        <p className="intro-text">
          I'm a passionate frontend developer crafting modern, responsive web experiences with
          React.js, JavaScript, and a touch of creativity.
        </p>
        <a href={resumePDF} download className="resume-btn">
          Download Resume
        </a>
      </div>
      <div className="home-right">
        <img src={myImage} alt="Profile" />
      </div>
    </section>
  );
};

export default Home;
