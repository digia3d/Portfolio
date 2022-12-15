import React from 'react';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="link"><BsLinkedin /></a>
      <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="link"><BsGithub /></a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="link"><BsTwitter /></a>
    </div>
  );
}

export default HeaderSocials;
