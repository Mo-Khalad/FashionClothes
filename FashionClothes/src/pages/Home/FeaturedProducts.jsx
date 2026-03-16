import React from "react";
import featuredProduct1 from "../../images/Featured_Product1.webp";
import featuredProduct2 from "../../images/Featured_Product2.webp";
import featuredProduct3 from "../../images/Featured_Product3.webp";
import featuredProduct4 from "../../images/Featured_Product4.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Home.module.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const FeaturedProducts = () => {
  const slider_images = [
    featuredProduct1,
    featuredProduct4,
    featuredProduct2,
    featuredProduct3,
    featuredProduct4,
  ];

  return (
    <div className="mt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex justify-content-around p-3 flex-wrap">
            <div
              className={
                "col-12 col-lg-8 d-flex justify-content-center flex-wrap align-self-center"
              }
            >
              <h3
                className={`text-center ${style.Featured_Products_text} my-5`}
              >
                Featured Products
              </h3>

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={4}
                //  navigation
                //  pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                  },
                  640: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
              >
                {slider_images.map((image, index) => {
                  return (
                    <SwiperSlide className={style.SwiperSlide} key={index}>
                      <img
                        src={image}
                        alt="FeaturedProduct"
                        className="w-100 h-100"
                      />
                      <h3 className={`${style.title} p-2`}>
                        Herschel supply co 25l
                      </h3>
                      <span className="p-3"> $75.00 </span>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>

            <div
              className={`${style.mens} col-10 col-lg-3 m-auto mt-5 d-flex justify-content-center align-items-center flex-wrap`}
            >
              <div>
                <h4 className="text-light fs-3 text-center fw-bold">Men’s</h4>
                <h5 className="text-light fs-3 text-center fw-bold">
                  Discover More
                </h5>
                <span className={style.line}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
