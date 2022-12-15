import React from 'react';
import CV from '../../assets/CV.pdf';

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn quaternary-color">Download CV</a>
      <a href="#contact" className="btn quaternary-color">Let&apos;s Talk</a>
    </div>
  );
}

export default CTA;
