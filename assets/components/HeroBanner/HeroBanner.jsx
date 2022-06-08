import React from "react";
import "./HeroBanner.scss";
import axios from "axios";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import { useNavigate } from "react-router-dom";

const HeroBanner = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    axios
      .get(
        `https://api.hel.fi/linkedevents/v1/event/?keyword=${e.target.dataset.id}&start=today`
      )
      .then((response) => {
        navigate(`/search/${e.target.textContent.replaceAll(" ", "_")}`, {
          state: { response: response.data },
        });
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

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
            <p data-id="yso:p1808" onClick={(e) => handleClick(e)}>
              Music Events
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="heroBanner sports">
            <p data-id="yso:p965" onClick={(e) => handleClick(e)}>
              Sport Events
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="heroBanner kids">
            <p data-id="yso:p4354" onClick={(e) => handleClick(e)}>
              Kids Events
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="heroBanner art">
            <p data-id="yso:p2739" onClick={(e) => handleClick(e)}>
              Art Events
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroBanner;
