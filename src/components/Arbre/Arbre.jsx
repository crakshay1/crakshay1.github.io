import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Arbre.css'


const events = [
  {
    date: "2019 — 2022",
    title: <img src="/MOLIERE.png"/>,
    name : "Cité Scolaire MOLIERE",
    subtitle: "French Baccalauréat",
    description: "NSI & SVT · Mention Très bien",
  },
  {
    date: "2022 — 2025",
    title: <img src="/paris-saclay.png"/>,
    subtitle: "Double Licence",
    description: "Biology & Computer Science",
  },
  {
    date: "2025 — Now",
    title: <img src="/paris-saclay.png"/>,
    subtitle: "Master GENIOMHE-AI",
    description:
      "Genomics, Informatics, Mathematics and Artificial Intelligence for Health and Environment",
  },
];


export default function App() {
  const pagination = {
    clickable: true,
    type: 'progressbar',
  };
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'1.5'}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={pagination}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        
          {events.map((event, index) => (
            <SwiperSlide>
            <div className="timeline-date">{event.date}</div>
            <div className="timeline-event" key={index}>
              <div className="timeline-card">
                <h3>{event.title}</h3>
                {event.name && <h3 style={{marginTop: "-10%", fontSize:"1.3vmin", fontWeight:"bold", paddingBottom: "5%"}}>{event.name}</h3>}
                <h4 style={{fontSize: "1.6vmin", marginTop:"-5%"}}>{event.subtitle}</h4>
                <p style={{fontSize:"1.3vmin", marginTop:"-5%", textAlign: "center"}}><i>{event.description}</i></p>
              </div>
            </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
