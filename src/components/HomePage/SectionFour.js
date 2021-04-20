import React from "react";
import "./section-four.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "../../../node_modules/swiper/swiper-bundle.css";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function SectionFour() {
  return (
    <section className="explore-the-country">
      <h2 className="section-title">Explore the country</h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        loop={true}
        navigation
        centeredSlides={true}
        pagination={{ clickable: true }}
        breakpoints={{
          // when window width is >= 640px
          380: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          1074: {
            slidesPerView: 3,
          },
        }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="slide">
          <div className="slide-content">
            <img
              src="https://randomwordgenerator.com/img/picture-generator/55e0d54b4a51ad14f1dc8460962e33791c3ad6e04e507441722a72dc9345c4_640.jpg"
              alt=""
            />
            <div className="slide-text-content">
              <h3>Lorem Ipsum</h3>
              <button className="slide-button">Click</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="slide-content">
            <img
              src="https://randomwordgenerator.com/img/picture-generator/55e0d54b4a51ad14f1dc8460962e33791c3ad6e04e507441722a72dc9345c4_640.jpg"
              alt=""
            />
            <div className="slide-text-content">
              <h3>Lorem Ipsum</h3>
              <button className="slide-button">Click</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="slide-content">
            <img
              src="https://randomwordgenerator.com/img/picture-generator/55e0d54b4a51ad14f1dc8460962e33791c3ad6e04e507441722a72dc9345c4_640.jpg"
              alt=""
            />
            <div className="slide-text-content">
              <h3>Lorem Ipsum</h3>
              <button className="slide-button">Click</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="slide-content">
            <img
              src="https://randomwordgenerator.com/img/picture-generator/55e0d54b4a51ad14f1dc8460962e33791c3ad6e04e507441722a72dc9345c4_640.jpg"
              alt=""
            />
            <div className="slide-text-content">
              <h3>Lorem Ipsum</h3>
              <button className="slide-button">Click</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <div className="explore-container">
        <div className="box box2">
          <div className="imgBx">
            <img src="https://via.placeholder.com/300x400" alt="" />
          </div>
          <div className="details details2">
            <h4>National Historic Sites</h4>
          </div>
        </div>
        <div className="box box2">
          <div className="imgBx">
            <img src="https://via.placeholder.com/300x400" alt="" />
          </div>
          <div className="details details2">
            <h4>National Preserve</h4>
          </div>
        </div>
        <div className="box box2">
          <div className="imgBx">
            <img src="https://via.placeholder.com/300x400" alt="" />
          </div>
          <div className="details details2">
            <h4>Hiking Trails</h4>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default SectionFour;
