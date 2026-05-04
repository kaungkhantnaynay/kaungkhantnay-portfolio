import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { contactLinks } from './data/contact';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <p className="footer-eyebrow">Contact</p>
        <h2 className="get-in-touch">GET IN TOUCH</h2>
        <p className="footer-subtitle">
          Have a web project, product idea, or freelance opportunity? I am open to discussing practical builds with clear goals.
        </p>
        <div className="email-container">
          <a href={`mailto:${contactLinks.email}`}>{contactLinks.email}</a>
        </div>
        <div className="social-media">
          <a href={contactLinks.github} target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub profile">
            <FaGithub aria-hidden="true" />
          </a>
          <a href={contactLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn profile">
            <FaLinkedin aria-hidden="true" />
          </a>
          <a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Contact on WhatsApp">
            <FaWhatsapp aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
