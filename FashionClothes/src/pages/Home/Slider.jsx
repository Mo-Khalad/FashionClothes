import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import style from "./Home.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "animate.css";

export default function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop
    >
      <SwiperSlide
        className={`${style.slider1} animate__animated animate__fadeInUp d-flex align-items-center`}
      >
        <div className={`animate__animated animate__fadeInUp`}>
          <div className="container">
            <div className="row">
              <div className="col-12 ms-3 col-md-10 p-5">
                <span
                  className={`${style.span} animate__animated animate__fadeInUp animate__delay-1s`}
                >
                  Bag,kids
                </span>
                <h1
                  className={`${style.h1} animate__animated animate__fadeInUp animate__delay-1s`}
                >
                  Black friday
                </h1>
                <p className="animate__animated animate__fadeInUp fs-6 animate__delay-1s">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor
                </p>
                <button
                  className={`${style.shopNow_btn} animate__animated animate__fadeInUp animate__delay-1s py-2 rounded-1 px-4`}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className={`${style.slider2} animate__animated animate__fadeInUp d-flex align-items-center`}
      >
        <div className={`animate__animated animate__fadeInUp`}>
          <div className="container">
            <div className="row">
              <div className="col-12 ms-3 col-md-10 p-5">
                <span
                  className={`${style.span} animate__animated animate__fadeInUp animate__delay-1s`}
                >
                  Bag,kids
                </span>
                <h1
                  className={`${style.h1} animate__animated animate__fadeInUp animate__delay-1s`}
                >
                  Black friday
                </h1>
                <p className="animate__animated animate__fadeInUp fs-6 animate__delay-1s">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor
                </p>
                <button
                  className={`${style.shopNow_btn} animate__animated animate__fadeInUp animate__delay-1s py-2 rounded-1 px-4`}
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
