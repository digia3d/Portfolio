import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import me3 from '../../assets/me3.png';

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h1>About Me</h1>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me3} alt="About" />
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
            Hello! My name is Aleksandra Ujvari.
            I am a full-stack software developer, currently enrolled at Microverse,
            a remote software development school, where we learn remote pair programming.
            Prior to becoming a full-stack software developer I was the owner of a cloth workshop for 15 years.
            I worked every day with different people and organized work so we can meet deadlines.
            After graduating with a digital marketing degree, I decided to start learning more about the development topics I'd used to create sites.
            I am also a freelance designer with a demonstrated history of working in the information technology and services industry.
            If you need someone like me, I am available for hire.
          </p>

          <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
