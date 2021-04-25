import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination } from 'swiper'
import './section-three.scss'
import 'swiper/swiper.scss'

// SwiperCore.use([Autoplay, Pagination])

function SectionThree() {
  return (
    <section className="carousel-section">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide className="carousel-slide">
          <img
            src="https://randomwordgenerator.com/img/picture-generator/55e0d54b4a51ad14f1dc8460962e33791c3ad6e04e507441722a72dc9345c4_640.jpg"
            alt=""
          />
        </SwiperSlide>
        {/* <SwiperSlide className="carousel-slide">
          <img
            src="https://randomwordgenerator.com/img/picture-generator/55e0d54b4a51ad14f1dc8460962e33791c3ad6e04e507441722a72dc9345c4_640.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="carousel-slide">
          <img
            src="https://randomwordgenerator.com/img/picture-generator/55e0d54b4a51ad14f1dc8460962e33791c3ad6e04e507441722a72dc9345c4_640.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="carousel-slide">
          <img
            src="https://randomwordgenerator.com/img/picture-generator/55e0d54b4a51ad14f1dc8460962e33791c3ad6e04e507441722a72dc9345c4_640.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="carousel-slide">
          <img
            src="https://randomwordgenerator.com/img/picture-generator/55e0d54b4a51ad14f1dc8460962e33791c3ad6e04e507441722a72dc9345c4_640.jpg"
            alt=""
          />
        </SwiperSlide> */}
      </Swiper>
      <div className="carousel-text-container">
        <h2 className="carousel-title">Lorem ipsum dolor sit amet.</h2>
        <p className="carousel-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          explicabo!
        </p>
        {/* add the linkto */}
        <button className="carousel-button">Lorem</button>
      </div>
    </section>
  )
}
export default SectionThree
