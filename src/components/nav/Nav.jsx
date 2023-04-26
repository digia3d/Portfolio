// eslint-disable anchor-is-valid
import React, { useState } from 'react';
import './nav.css';
import { AiFillHome, AiOutlineUser } from 'react-icons/ai';
import { MdEmail, MdMiscellaneousServices } from 'react-icons/md';
import { GiSkills } from 'react-icons/gi';
import { HiBriefcase } from 'react-icons/hi2';

function Nav() {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a
        href="#home"
        onClick={() => setActiveNav('#home')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <GiSkills />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <HiBriefcase />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <MdMiscellaneousServices />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <MdEmail />
      </a>
    </nav>
  );
}

export default Nav;
