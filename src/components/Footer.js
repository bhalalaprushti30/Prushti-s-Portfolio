import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <h3>Find Me!</h3>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/prushti-bhalala-0b9739318/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/bhalalaprushti30" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://leetcode.com/u/Prushti_Bhalala_30/" target="_blank" rel="noreferrer">
          <FaCode />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Prushti Bhalala • All rights reserved.</p>
    </footer>
  );
};

export default Footer;
