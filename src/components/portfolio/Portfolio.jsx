import React from 'react';
import './portfolio.css';
import DoctorAppointmentImg from '../../assets/projects/Doctor-Appointment.png';
import MathMagicianImg from '../../assets/projects/Math-Magician.png';
import WeatherAppImg from '../../assets/projects/Weather-App.png';
import CatGaleryImg from '../../assets/projects/Cat-Galery.png';
import YouTubeImg from '../../assets/projects/You-Tube.png';
import AwesomeBooksImg from '../../assets/projects/Awesome-Books.png';
import HarryPotterImg from '../../assets/projects/Harry-Potter.jpg';
import HoroskopHelankefbImg from '../../assets/projects/Horoskop-Helanke-fb.png';
import A3DfbImg from '../../assets/projects/A3D-fb.png';

/* DO NOT USE IMAGES IN PRODUCTION */

const data = [
  {
    id: 1,
    image: DoctorAppointmentImg,
    title: 'Doctor Appointments',
    description: 'Built With: React, Redux, Ruby on Rails, PostgreSql, Linters (React & Redux), Git ',
    github: 'https://github.com/digia3d/Doctor-Appointment_front-end',
    demo: 'https://doc-appointments.netlify.app/',
  },
  {
    id: 2,
    image: MathMagicianImg,
    title: 'Math-Magic',
    description: 'Built With: JavaScript-React -CSS -React',
    github: 'https://github.com/digia3d/Math-Magic ',
    demo: 'https://a3dmath.netlify.app/',
  },
  {
    id: 3,
    image: WeatherAppImg,
    title: 'Weather App',
    description: 'Built With: html/scss/js/React/redux/API',
    github: 'https://github.com/digia3d/weather_app',
    demo: 'https://elegant-caramel-18332d.netlify.app/',
  },
  {
    id: 4,
    image: CatGaleryImg,
    title: 'Cats Gallery',
    description: 'Built With: Javascript, Html, Css, Jest, Webpack',
    github: 'https://github.com/digia3d/cat-gallery',
    demo: 'https://dodoburner.github.io/cat-gallery/',
  },
  {
    id: 5,
    image: YouTubeImg,
    title: 'YouTube Clone',
    description: 'Built With: HTML5 and CSS3',
    github: 'https://github.com/digia3d/YouTube-clone',
    demo: 'https://digia3d.github.io/YouTube-clone/',
  },
  {
    id: 6,
    image: HarryPotterImg,
    title: 'Hogvarts School of Magic',
    description: 'Built With: React, Redux, Linters (React & Redux), Git',
    github: 'https://github.com/digia3d/Hogwarts',
    demo: 'https://hogwartsschool.netlify.app',
  },
  {
    id: 7,
    image: AwesomeBooksImg,
    title: 'Awesome Books',
    description: 'Built With: React, Redux, Linters (React & Redux), Git',
    github: 'https://github.com/digia3d/awesome-books-update',
    demo: 'https://digia3d.github.io/awesome-books-update/',
  },
];

const newData = [
  {
    id: 8,
    image: HoroskopHelankefbImg,
    title: 'Facebook Page',
    description: 'Part of Social Media Marketing campaign for local business',
    facebook: ' https://www.facebook.com/horoskophelanke',
  },
  {
    id: 9,
    image: A3DfbImg,
    title: 'A3D Facebook Page',
    description: 'Part of Social Media Marketing campaign for Marketing Agency',
    facebook: 'https://www.facebook.com/a3ddigital',
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
            id, image, title, description, facebook,
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
              </div>
            </article>
          ))
        }
      </section>
    </section>
  );
}

export default Portfolio;
