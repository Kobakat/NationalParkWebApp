import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "./section-three.scss";
import "swiper/swiper.scss";
import useGetNpsNews from "../../hooks/use-get-nps-news";

SwiperCore.use([Autoplay, Pagination]);

function SectionThree() {
  const data = useGetNpsNews();
  if (data) console.log(data);

  const [index, setIndex] = useState(0);

  return (
    <section className="carousel-section">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={false}
        autoplay={{ delay: 3000 }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
      >
        <SwiperSlide className="carousel-slide">
          {data ? (
            <img
              src={
                data[0].image.url
                  ? data[0].image.url
                  : "https://www.nps.gov/common/commonspot/templates/images/logos/nps_social_image_02.jpg"
              }
              alt="nps news"
            />
          ) : (
            <img
              src="https://randomwordgenerator.com/img/picture-generator/55e0d54b4a51ad14f1dc8460962e33791c3ad6e04e507441722a72dc9345c4_640.jpg"
              alt=""
            />
          )}
        </SwiperSlide>
        <SwiperSlide className="carousel-slide">
          {data ? (
            <img
              src={
                data[1].image.url
                  ? data[1].image.url
                  : "https://www.nps.gov/common/commonspot/templates/images/logos/nps_social_image_02.jpg"
              }
              alt="nps news"
            />
          ) : (
            <img
              src="https://randomwordgenerator.com/img/picture-generator/55e0d54b4a51ad14f1dc8460962e33791c3ad6e04e507441722a72dc9345c4_640.jpg"
              alt=""
            />
          )}
        </SwiperSlide>
        <SwiperSlide className="carousel-slide">
          {data ? (
            <img
              src={
                data[2].image.url
                  ? data[2].image.url
                  : "https://www.nps.gov/common/commonspot/templates/images/logos/nps_social_image_02.jpg"
              }
              alt="nps news"
            />
          ) : (
            <img
              src="https://randomwordgenerator.com/img/picture-generator/55e0d54b4a51ad14f1dc8460962e33791c3ad6e04e507441722a72dc9345c4_640.jpg"
              alt=""
            />
          )}
        </SwiperSlide>
        <SwiperSlide className="carousel-slide">
          {data ? (
            <img
              src={
                data[3].image.url
                  ? data[3].image.url
                  : "https://www.nps.gov/common/commonspot/templates/images/logos/nps_social_image_02.jpg"
              }
              alt="nps news"
            />
          ) : (
            <img
              src="https://randomwordgenerator.com/img/picture-generator/55e0d54b4a51ad14f1dc8460962e33791c3ad6e04e507441722a72dc9345c4_640.jpg"
              alt=""
            />
          )}
        </SwiperSlide>
        <SwiperSlide className="carousel-slide">
          {data ? (
            <img
              src={
                data[4].image.url
                  ? data[4].image.url
                  : "https://www.nps.gov/common/commonspot/templates/images/logos/nps_social_image_02.jpg"
              }
              alt="nps news"
            />
          ) : (
            <img
              src="https://randomwordgenerator.com/img/picture-generator/55e0d54b4a51ad14f1dc8460962e33791c3ad6e04e507441722a72dc9345c4_640.jpg"
              alt=""
            />
          )}
        </SwiperSlide>
      </Swiper>
      <div className="carousel-text-container">
        <h2 className="carousel-title">Latest news provided by NPS</h2>
        <p className="carousel-text">
          {data ? data[index].title : "Loading..."}
        </p>
        {/* add the linkto */}
        <a href={data ? data[index].url : "https://nps.gov"}>
          <button className="carousel-button">Click here for more</button>
        </a>
      </div>
    </section>
  );
}
export default SectionThree;
