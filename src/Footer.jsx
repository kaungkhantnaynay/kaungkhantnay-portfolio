import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <h2 className="get-in-touch">GET IN TOUCH</h2>
        <div className="email-container">
          <a href="mailto:kaungkhantnaynay@gmail.com">kaungkhantnaynay@gmail.com</a>
        </div>
        <div className="social-media">
          <a href="https://github.com/kaungkhantnaynay" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/kaung-khant-nay-28bb1033b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/66645216274" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
}
