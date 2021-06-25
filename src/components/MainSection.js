import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import Footer from './Footer';


// import Swiper core and required modules
import SwiperCore, {
  Mousewheel,Pagination
} from 'swiper/core';

import MainHeader from "./mainComponents/MainHeader";
import MainPrinciples from "./mainComponents/MainPrinciples";
import ProjectsList from "./ProjectsList";

// install Swiper modules
SwiperCore.use([Mousewheel,Pagination]);

const MainSection = () => {
    return (
      <div className="header-slider-container">
        <Swiper
          className="main-slider"
          spaceBetween={50}
          slidesPerView={1}
          direction={'vertical'}
          mousewheel={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="main-slider-slide">
            <MainHeader/>
          </SwiperSlide>
          <SwiperSlide className="main-slider-slide">
            <MainPrinciples/>
          </SwiperSlide>
          <SwiperSlide className="main-slider-slide">
            <ProjectsList/>
          </SwiperSlide>
          <SwiperSlide className="main-slider-slide">
            <Footer/>
          </SwiperSlide>
        </Swiper>
      </div>
    )
}

export default MainSection
