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
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookReader /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdEmail /></a>
    </nav>
  );
}

export default Nav;
