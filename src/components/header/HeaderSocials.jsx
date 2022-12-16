import React from 'react';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/aleksandraujvari/" target="_blank" rel="noreferrer" aria-label="link"><BsLinkedin /></a>
      <a href="https://github.com/digia3d" target="_blank" rel="noreferrer" aria-label="link"><BsGithub /></a>
      <a href="https://twitter.com/ujvari65" target="_blank" rel="noreferrer" aria-label="link"><BsTwitter /></a>
    </div>
  );
}

export default HeaderSocials;
