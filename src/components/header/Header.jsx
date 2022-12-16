import React from 'react';
import './header.css';
import CTA from './CTA';
import Alex from '../../assets/Alex.png';
import HeaderSocial from './HeaderSocials';

function Header() {
  return (
    <header id="home">
      <div className="header__container">
        <h5>Hello I&apos;m</h5>
        <h1>Alexandra Ujvari</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="alex">
          <img src={Alex} alt="Alex" id="alex" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;
