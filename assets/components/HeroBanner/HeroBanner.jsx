import React from "react";
import "./HeroBanner.scss";

import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";

const HeroBanner = () => {
  return (
    <div className="frame">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          {" "}
          <div className="heroBanner ">
            <p>Music Events</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="heroBanner sports">
            <p>Sport Events</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="heroBanner kids">
            <p>Kids Events</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="heroBanner art">
            <p>Art Events</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroBanner;
