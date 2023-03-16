import React from 'react';
import './testimonials.css';
// import Swiper core and required modules
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: 'https://media.licdn.com/dms/image/D4D35AQHwi_F2plrScA/profile-framedphoto-shrink_400_400/0/1661412940590?e=1679590800&v=beta&t=YY0J6hxGwdm12oPjO9Fu7Y4dTO3RFifjtnGEKraoNeY',
    itemName: 'Asim Khan',
    review:
      'Aleksandra is an exceptional human being with a strong background in front-end development using React JS and Ruby on Rails as a backend developer. Her approach is professional and methodical in understanding different concepts and applying them to real-life applications. I highly recommend her to any top company, and would prove to be a great asset to their organization.',
  },
  {
    avatar: 'https://media.licdn.com/dms/image/D5603AQEL2JUM95rxqA/profile-displayphoto-shrink_400_400/0/1670864145164?e=1684368000&v=beta&t=vYTsB3vCa9-NC4nJt5mf-QfVEu_1LMq7BVd8zaSBbuk',
    itemName: 'Htet Naing',
    review:
      'Alex is a super friendly, helpful and supportive programmer. Whenever I am in trouble, as soon as I reached out to her, she always gave me exactly what I needed. Her help was always the one that leads to the solution. Even when we are not official peers of the group anymore, she always helped me whenever I am in trouble. It is indeed a pleasure to know her and working with her.',
  },
  {
    avatar: 'https://media.licdn.com/dms/image/D4D35AQH3QmIjZbXixA/profile-framedphoto-shrink_400_400/0/1661894188466?e=1679590800&v=beta&t=DEhuK6U2Wadp7Yka2SrlUr6wCX_QtN7ruePATG2zorg',
    itemName: 'Ushindi Bienvenu',
    review:
      'Aleksandras stamina and ability to learn quickly are impressive. She does not allow herself to be defeated by the challenges she encounters. On the contrary, she draws her strength from her determination to finish the assignment. She exudes a good vibe around her. You can count on her to finish the assigned job.',
  },
  {
    avatar: 'https://media.licdn.com/dms/image/D4D03AQGN0VL089d6pw/profile-displayphoto-shrink_400_400/0/1671032146137?e=1684368000&v=beta&t=UwvtCV9CzVkLsAzC7O1gSD6-NjJKG5g3k3qbQujNo-I',
    itemName: 'Tracey Kadenyi',
    review:
      'I have had the pleasure of working with Alex on multiple pair-programming projects. She has a commendable work ethic; always shows up on time and ready to work. I was also impressed with her technical skills. Her willingness to share knowledge and learn makes her a good and efficient team-player. She is a good communicator, reliable, and fun to work with. Youd be lucky to have her on your team.',
  },
];

function Testimonials() {
  return (
    <section className="pag">
      <h5>Reviews from Clients</h5>
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
