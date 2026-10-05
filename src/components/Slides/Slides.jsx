import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slides.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
    >
        <SwiperSlide>
            <div className='image_slider'>
                <img src="src/assets/jojo.gif"/>
            </div>
            <div>
                <p className='text_slider'>Mangas</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='image_slider'>
                <img src="src/assets/code.gif"/>
            </div>
            <div>
                <p className='text_slider'>Programming</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='image_slider'>
                <img src="src/assets/edit.gif"/>
            </div>
            <div>
                <p className='text_slider'>Editing</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='image_slider'>
                <img src="src/assets/musica.gif"/>
            </div>
            <div>
                <p className='text_slider'>Music</p>
            </div>
        </SwiperSlide>
    </Swiper>
    </>
);
}
