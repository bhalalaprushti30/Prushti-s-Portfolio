import React, { useRef } from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import foodOrderingImg from '../assets/projects/food-ordering.png';
import quizAppImg from '../assets/projects/quiz-app.png';
import travelImg from '../assets/projects/travel-page.png';
import todoImg from '../assets/projects/todo-app.png';
import qrImg from '../assets/projects/qr-generator.png';
import diceImg from '../assets/projects/dice-roll.png';

const projects = [
  {
    title: 'Food Delivery Website',
    image: foodOrderingImg,
    tech: 'React.js, Node.js, Express.js, MongoDB, JWT, PayPal',
    desc: 'Full-stack platform with user authentication, cart, secure checkout, order tracking, and admin dashboard.',
    github: 'https://github.com/bhalalaprushti30/food-ordering',
    demo: 'https://foodies-wine.vercel.app/',
  },
  {
    title: 'Interactive Quiz App',
    image: quizAppImg,
    tech: 'HTML, CSS, JavaScript',
    desc: 'Dynamic web-based quiz with multiple-choice questions, scoring, and instant feedback. Great for learning DOM & UI design.',
    github: 'https://github.com/bhalalaprushti30/Interactive-Quiz-Application',
    demo: 'https://bhalalaprushti30.github.io/Interactive-Quiz-Application/',
  },
  {
    title: 'Travel Landing Page',
    image: travelImg,
    tech: 'HTML5, CSS3, Responsive Design',
    desc: 'A beautifully designed landing page for travel lovers with top destinations, booking features, and newsletter.',
    github: 'https://github.com/bhalalaprushti30/Travel-Landing-Page',
    demo: 'https://bhalalaprushti30.github.io/Travel-Landing-Page/',
  },
  {
    title: 'To-Do List App',
    image: todoImg,
    tech: 'React.js',
    desc: 'A simple React-based To-Do App made during internship at Saiket Systems. Add, edit, delete tasks with animations.',
    github: 'https://github.com/bhalalaprushti30/Task-3-To-do-list',
    demo: 'https://github.com/bhalalaprushti30/Task-3-To-do-list',
  },
  {
    title: 'QR Code Generator',
    image: qrImg,
    tech: 'HTML, CSS (Glassmorphism), JavaScript, QRCode.js',
    desc: 'Modern QR generator with downloadable PNGs, gradient background, responsive layout, and glass UI.',
    github: 'https://github.com/bhalalaprushti30/QR-Code-Generator',
    demo: 'https://bhalalaprushti30.github.io/QR-Code-Generator/',
  },
  {
    title: 'Dice Roll Game - Player vs AI',
    image: diceImg,
    tech: 'HTML, CSS, JavaScript',
    desc: 'Fun dice game vs AI. First to 5 points wins! Features animations, scoring, and interactive UI.',
    github: 'https://github.com/bhalalaprushti30/Dice-Roll-Game',
    demo: 'https://bhalalaprushti30.github.io/Dice-Roll-Game/',
  },
];

const Projects = () => {
  const scrollRef = useRef();

  const scroll = (offset) => {
    scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-wrapper">
        <button className="scroll-btn left" onClick={() => scroll(-300)}>{'<'}</button>

        <div className="projects-container" ref={scrollRef}>
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="tech">{project.tech}</p>
                <p>{project.desc}</p>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <FaGithub />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scroll(300)}>{'>'}</button>
      </div>
    </section>
  );
};

export default Projects;
