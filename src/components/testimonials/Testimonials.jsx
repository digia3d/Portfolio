import React from 'react';
import './testimonials.css';
// import Swiper core and required modules
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import AVTR1 from '../../assets/projects/avatar1.jpg';
import AVTR2 from '../../assets/projects/avatar2.jpg';
import AVTR3 from '../../assets/projects/avatar6.jpg';
import AVTR4 from '../../assets/projects/avatar5.jpg';

const data = [
  {
    avatar: AVTR1,
    itemName: 'Tina Snow',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cum earum doloremque saepe officiis fugit, alias provident culpa, tempore perspiciatis expedita sequi tenetur ex, magni non aliquam suscipit debitis? Reiciendis?',
  },
  {
    avatar: AVTR2,
    itemName: 'Tina Snow',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cum earum doloremque saepe officiis fugit, alias provident culpa, tempore perspiciatis expedita sequi tenetur ex, magni non aliquam suscipit debitis? Reiciendis?',
  },
  {
    avatar: AVTR3,
    itemName: 'Shatta Wale',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cum earum doloremque saepe officiis fugit, alias provident culpa, tempore perspiciatis expedita sequi tenetur ex, magni non aliquam suscipit debitis? Reiciendis?',
  },
  {
    avatar: AVTR4,
    itemName: 'Kwame Despito',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cum earum doloremque saepe officiis fugit, alias provident culpa, tempore perspiciatis expedita sequi tenetur ex, magni non aliquam suscipit debitis? Reiciendis?',
  },
];

function Testimonials() {
  return (
    <section className="pag">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container" // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, itemName, review }, item) => (
          <SwiperSlide key={item.name} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="client avatar" />
            </div>
            <h5 className="client__name">{itemName}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
