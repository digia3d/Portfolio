import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website Wireframe</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Interface Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Experience (UX)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Research</p>
            </li>
          </ul>
        </article>
        {/* ...END OF UI/UX DESIGN ARTICLE ... */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>One Page App</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web sites.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Data Base</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>ROR App</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Rails API</p>
            </li>
          </ul>
        </article>
        {/* ...END OF WEB DEVELOPMENT... */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Blog post</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ebook</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Contact Forms</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Presentations</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Checklists</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Digital Marketing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Social Marketing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Search engine optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Marketing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Logo Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile Marketing</p>
            </li>
          </ul>
        </article>
        {/* ...END OF CONTENT CREATION ... */}
      </div>
    </section>
  );
}

export default Services;
