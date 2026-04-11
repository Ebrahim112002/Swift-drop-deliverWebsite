import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewCard from './ReviewCard';

const Reveiws = ({reveiwsPromise}) => {
  const reviews=use(reveiwsPromise);
  console.log(reviews);
  return (
     <div className='my-16'>
      <div> 
        <h2 className='text-3xl font-bold text-center my-10'>What Our Clients Say</h2>

      </div>
        <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'3'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          scale: 0.8,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
        {
          reviews.map(review=><SwiperSlide key={review.id}>
          <ReviewCard review={review}></ReviewCard>
        </SwiperSlide>)
        }
      </Swiper>
    </>
   
     </div>
  );
};

export default Reveiws;