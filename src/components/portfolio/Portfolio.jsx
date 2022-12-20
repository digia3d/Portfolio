import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/projects/doc_appointments_preview.png';
import IMG2 from '../../assets/projects/Calculator.png';
import IMG3 from '../../assets/projects/Weather-app.png';
import IMG4 from '../../assets/projects/cat_galery_home.png';
import IMG5 from '../../assets/projects/You-Tube.png';
import IMG6 from '../../assets/projects/bookstore.png';
import IMG7 from '../../assets/projects/Horoskop Helanke.png';
import IMG8 from '../../assets/projects/A3Dfacebook.png';
import IMG9 from '../../assets/projects/A3D.png';

/* DO NOT USE IMAGES IN PRODUCTION */

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Doctor Appointments',
    description: 'Built With: React, Redux, Ruby on Rails, PostgreSql, Linters (React & Redux), Git ',
    github_facebook: 'https://github.com/digia3d/Doctor-Appointment_front-end',
    demo_page: 'https://doc-appointments.netlify.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Math-Magic',
    description: 'Built With: JavaScript-React -CSS -React',
    github_facebook: 'https://github.com/digia3d/Math-Magic ',
    demo_page: 'https://62f4ef01f82f810008a11c40--a3dmath.netlify.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Weather App',
    description: 'Built With: html/scss/js/React/redux/API',
    github_facebook: 'https://github.com/digia3d/weather_app',
    demo_page: 'https://elegant-caramel-18332d.netlify.app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Cats Gallery',
    description: 'Built With: Javascript, Html, Css, Jest, Webpack',
    github_facebook: 'https://github.com/digia3d/cat-gallery',
    demo_page: 'https://dodoburner.github.io/cat-gallery/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'YouTube Clone',
    description: 'Built With: HTML5 and CSS3',
    github_facebook: 'https://github.com/digia3d/YouTube-clone',
    demo_page: 'https://digia3d.github.io/YouTube-clone/',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Bookstore',
    description: 'Built With: React, Redux, Linters (React & Redux), Git',
    github_facebook: 'https://github.com/digia3d/Bookstore',
    demo_page: 'https://digia3d.github.io/Bookstore/',
  },
  {
    id: 7,
    image: IMG7,
    title: 'Facebook Page',
    description: 'Part of Social Media Marketing campaign for local business',
    github_facebook: ' https://www.facebook.com/horoskophelanke',
    demo_page: 'https://digitalnimarketinga3d.com/2021/05/15/helanke-horoskop-kompleti/',
  },
  {
    id: 8,
    image: IMG8,
    title: 'A3D Facebook Page',
    description: 'Part of Social Media Marketing campaign for Marketing Agency',
    github_facebook: 'https://www.facebook.com/a3ddigital',
    demo_page: ' https://digitalnimarketinga3d.com/2021/05/13/digitalni-marketing-i-ja/',
  },
  {
    id: 9,
    image: IMG9,
    title: 'Digitalni Marketing A3D',
    description: 'Website made in wordpress',
    github_facebook: 'https://digitalnimarketinga3d.com/naslovna/',
    demo_page: 'https://digitalnimarketinga3d.com/o-nama/',
  },
];

function Portfolio() {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <section className="container portfolio__container">
        {
          data.map(({
            id, image, title, description, github_facebook, demo_page,
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
                  href={github_facebook}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <br />
                  or Page
                </a>
                <a
                  href={demo_page}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo<br />
                  or Website
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
