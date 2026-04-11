import React from 'react';
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../../assets/brands/amazon.png';
import casio from '../../../assets/brands/casio.png';
import moonstar from '../../../assets/brands/moonstar.png';
import randstand from '../../../assets/brands/randstad.png'; 
import star from '../../../assets/brands/star.png'; 
import star_peapole from '../../../assets/brands/start_people.png'; 


const Brands = () => {
  return (
    <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper my-20"
      >
         <SwiperSlide><img src={amazon} alt="Amazon" /></SwiperSlide>
        <SwiperSlide><img src={casio} alt="Casio" /></SwiperSlide>
        <SwiperSlide><img src={moonstar} alt="Moonstar" /></SwiperSlide>
        <SwiperSlide><img src={randstand} alt="Randstad" /></SwiperSlide>
        <SwiperSlide><img src={star} alt="Star" /></SwiperSlide>
        <SwiperSlide><img src={star_peapole} alt="Start People" /></SwiperSlide>
    </Swiper>
  );
};

export default Brands;