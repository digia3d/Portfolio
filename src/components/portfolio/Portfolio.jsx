import React from 'react';
import './portfolio.css';

/* DO NOT USE IMAGES IN PRODUCTION */

const data = [
  {
    id: 1,
    image: 'https://i.ibb.co/pzTnSRs/doc-appointments-preview.png',
    title: 'Doctor Appointments',
    description: 'Built With: React, Redux, Ruby on Rails, PostgreSql, Linters (React & Redux), Git ',
    github: 'https://github.com/digia3d/Doctor-Appointment_front-end',
    demo: 'https://doc-appointments.netlify.app/',
  },
  {
    id: 2,
    image: 'https://i.ibb.co/nkRwtTX/Calculator.png',
    title: 'Math-Magic',
    description: 'Built With: JavaScript-React -CSS -React',
    github: 'https://github.com/digia3d/Math-Magic ',
    demo: 'https://a3dmath.netlify.app/',
  },
  {
    id: 3,
    image: 'https://i.ibb.co/ysyd4Gf/Weather-app.png',
    title: 'Weather App',
    description: 'Built With: html/scss/js/React/redux/API',
    github: 'https://github.com/digia3d/weather_app',
    demo: 'https://elegant-caramel-18332d.netlify.app/',
  },
  {
    id: 4,
    image: 'https://i.ibb.co/BnZpSj7/cat-galery-home.png',
    title: 'Cats Gallery',
    description: 'Built With: Javascript, Html, Css, Jest, Webpack',
    github: 'https://github.com/digia3d/cat-gallery',
    demo: 'https://dodoburner.github.io/cat-gallery/',
  },
  {
    id: 5,
    image: 'https://i.ibb.co/bJfSWh5/You-Tube.png',
    title: 'YouTube Clone',
    description: 'Built With: HTML5 and CSS3',
    github: 'https://github.com/digia3d/YouTube-clone',
    demo: 'https://digia3d.github.io/YouTube-clone/',
  },
  {
    id: 6,
    image: 'https://i.ibb.co/Xykp9Nf/Screenshot-from-Hogwarts.png',
    title: 'Hogvarts School of Magic',
    description: 'Built With: React, Redux, Linters (React & Redux), Git',
    github: 'https://github.com/digia3d/Hogwarts',
    demo: 'https://hogwartsschool.netlify.app',
  },
];

const newData = [
  {
    id: 7,
    image: 'https://i.ibb.co/tCyGhb8/Horoskop-Helanke.png',
    title: 'Facebook Page',
    description: 'Part of Social Media Marketing campaign for local business',
    facebook: ' https://www.facebook.com/horoskophelanke',
    page: 'https://digitalnimarketinga3d.com/2021/05/15/helanke-horoskop-kompleti/',
  },
  {
    id: 8,
    image: 'https://i.ibb.co/ykJxvTL/A3-Dfacebook.png',
    title: 'A3D Facebook Page',
    description: 'Part of Social Media Marketing campaign for Marketing Agency',
    facebook: 'https://www.facebook.com/a3ddigital',
    page: ' https://digitalnimarketinga3d.com/2021/05/13/digitalni-marketing-i-ja/',
  },
  {
    id: 9,
    image: 'https://i.ibb.co/Rjqgz5p/Sajt.png',
    title: 'Digitalni Marketing A3D',
    description: 'Website made in wordpress',
    facebook: 'https://www.facebook.com/a3ddigital',
    page: 'https://digitalnimarketinga3d.com/o-nama/',
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <section className="container portfolio__container">
        {
          data.map(({
            id, image, title, description, github, demo,
          }) => (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <div className="portfolio__item-description">
                <p className="description">{description}</p>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))
        }
      </section>
      <h6>Marketing Campaign</h6>
      <section className="container portfolio__container">
        {
          newData.map(({
            id, image, title, description, facebook, page,
          }) => (
            <article
              key={id}
              className="portfolio__item"
            >
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <div className="portfolio__item-description">
                <p className="description">{description}</p>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={facebook}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Page
                </a>
                <a
                  href={page}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Website
                </a>
              </div>
            </article>
          ))
        }

      </section>
    </section>
  );
}

export default Portfolio;
