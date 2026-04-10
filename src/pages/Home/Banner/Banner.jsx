import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from '../../../assets/banner/banner1.png'
import bannerImg2 from '../../../assets/banner/banner2.png'
import bannerImg3 from '../../../assets/banner/banner3.png'
import { FaArrowCircleRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative"> 

      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        <div>
          <img src={bannerImg1} alt="Image 1" />
        </div>
        <div>
          <img src={bannerImg2} alt="Image 2" />
        </div>
        <div>
          <img src={bannerImg3} alt="Image 3" />
        </div>
      </Carousel>

      {/* Overlay Buttons */}
      <div className='
  absolute 
  bottom-6 sm:bottom-10 md:bottom-16 lg:bottom-20 
  left-1/2 md:left-1/6 
  transform -translate-x-1/2 
  flex items-center gap-2 sm:gap-4
'>
       <button className='rounded-2xl text-black font-semibold px-3 py-1 sm:px-4 sm:py-2 bg-primary text-sm sm:text-base'>
          Track your parcel
        </button>

        <FaArrowCircleRight className="text-black text-2xl -rotate-45" />

       <button className='rounded-2xl text-black font-semibold px-3 py-1 sm:px-4 sm:py-2 bg-white text-sm sm:text-base'>
          Be a Rider
        </button>
      </div>

    </div>
  );
};

export default Banner;