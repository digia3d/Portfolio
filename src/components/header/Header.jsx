import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocial from './HeaderSocials';
import me3 from '../../assets/header/me3.png';

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
          <img src={me3} alt="About" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;
