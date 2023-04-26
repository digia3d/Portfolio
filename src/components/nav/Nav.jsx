// eslint-disable anchor-is-valid
import React, { useState } from 'react';
import './nav.css';
import { AiFillHome, AiOutlineUser } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { BiBookReader } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#' ? 'active' : ''}>
        <span>Home</span>
        <AiFillHome />
      </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <span>About</span>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <span>Experience</span>
        <BiBookReader />
      </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>
        <span>Services</span>
        <RiServiceLine />
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <span>Contact</span>
        <MdEmail />
      </a>
    </nav>

  );
}

export default Nav;
