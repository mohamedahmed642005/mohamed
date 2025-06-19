import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { user1, user2, user3, user4, user5 } from "../assets";

const Testimonials = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="py-10 bg-[#252525] dark:bg-[#121212] transition-colors duration-300">
      {/* Title */}
      <div className="flex flex-col items-center text-center font-bold capitalize text-3xl mb-10">
        <h1 className="text-white dark:text-gray-100">Testimonials</h1>
        <div className="bg-orange-400 w-[100px] h-[2px] mt-3"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {[user1, user2, user3, user4, user5].map((userImg, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center gap-4 p-6 bg-[#1e1e1e] dark:bg-[#1a1a1a] rounded-lg shadow-lg max-w-lg mx-auto">
                <img className="w-20 h-20 rounded-full border-4 border-orange-400" src={userImg} alt={`User ${i + 1}`} />
                <p className="text-lg text-white dark:text-gray-300 text-center">{
                  [
                    "Amazing service and top-notch coffee!",
                    "A perfect start to my day, every day.",
                    "Best coffee shop in town!",
                    "Friendly staff and great ambiance.",
                    "Love their specialty drinks!"
                  ][i]
                }</p>
                <h3 className="font-bold text-orange-400">{
                  [
                    "- John Doe",
                    "- Jane Smith",
                    "- Emily Brown",
                    "- Michael Green",
                    "- Sarah Johnson"
                  ][i]
                }</h3>
              </div>
            </SwiperSlide>
          ))}

       
          <div className="autoplay-progress absolute bottom-5 right-5 flex items-center gap-2">
            <svg className="w-8 h-8" viewBox="0 0 48 48">
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="#FDBA74"
                strokeWidth="4"
                fill="none"
                strokeDasharray="125.6"
                strokeDashoffset="calc(125.6 * var(--progress))"
                style={{
                  transition: "stroke-dashoffset 0.25s linear"
                }}
              />
            </svg>
            <span ref={progressContent} className="text-orange-400 font-bold"></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
