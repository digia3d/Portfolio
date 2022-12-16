import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaTwitterSquare, FaAngellist } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <a href="#alex" className="footer__logo">Alex</a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/aleksandraujvari/" aria-label="linkedin" className="footer__socials-link"><BsLinkedin /></a>
        <a href="https://twitter.com/ujvari65" aria-label="twitter" className="footer__socials-link"><FaTwitterSquare /></a>
        <a href="https://angel.co/jobs/home" aria-label="angelist" className="footer__socials-link"><FaAngellist /></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; 2022 Alexandra Ujvari. All rights reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer;
