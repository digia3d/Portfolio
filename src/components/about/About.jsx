import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import Alex from './assets/Alex.png';

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h1>About Me</h1>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Alex} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working Experience</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>60+ Completed Projects</small>
            </article>
          </div>

          <p>
            Hello! My name is Aleksandra Ujvari, a full-stack software
            developer with a passion for coding and problem-solving. As a
            previous owner of a cloth workshop, I developed excellent
            communication and organization skills, which I&apos;ve implemented in my
            work as a developer. After graduating with a digital marketing
            degree, I decided to pursue my passion for coding and enrolled in
            Microverse, a remote software development school, where I learned
            the importance of remote pair programming. I am committed to clean
            code and continuous learning, always seeking to expand my knowledge
            and skills in the field. I have experience creating websites for
            friends and family and find satisfaction in solving puzzles and
            optimizing code. I can help you build a product, feature, or
            website. Please feel free to look through some of my work and
            experience, and if you like what you see and have a project you need
            coded, don&apos;t hesitate to contact me. I&apos;m also a freelance designer
            with a demonstrated history of working in the information technology
            and services industry. If you need someone like me, I am available
            for hire.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
