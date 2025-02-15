import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';
import {user1, user2,  user3, user4, user5 } from "../assets"


const Testimonials = () => {
    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      
      
        modules={[Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        
      <div className='bg[#252525] py-10' >
      <SwiperSlide>
            <div className='flex flex-col items-center gap-4 '>
                
            <img className='w-20 h-20 rounded-full' src={user1} alt="" />
            <p className='text-lg'>Amazing Service and Top-nothc coffe</p>
            <h3 className='font-bold'>Johen Doy</h3>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex flex-col items-center gap-4'>
                
                <img className='w-20 h-20 rounded-full' src={user2} alt="" />
                <p className='text-lg'>Aprefect start to my day every day</p>
                <h3 className='font-bold'>Jane Smith</h3>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex flex-col items-center gap-4'>
                
                <img className='w-20 h-20 rounded-full' src={user3} alt="" />
                <p className='text-lg'>Best coffee Shop in town </p>
                <h3 className='font-bold'>Emily Brown </h3>
                </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='flex flex-col items-center gap-4'>
                
                <img className='w-20 h-20 rounded-full' src={user4} alt="" />
                <p className='text-lg'>Frindly Staff and great ambiance</p>
                <h3 className='font-bold'>Moaach Green</h3>
                </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='flex flex-col items-center gap-4'>
                
            <img className='w-20 h-20 rounded-full' src={user5} alt="" />
            <p className='text-lg'>Amazing Service and Top-nothc coffe</p>
            <h3 className='font-bold'>Sarah jones</h3>
            </div>
        </SwiperSlide>
      </div>
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      
    </div>
  )
}

export default Testimonials