import React, { useState } from 'react';
import { Link } from 'react-router-dom';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-flip/effect-flip.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


// import Swiper core and required modules
import SwiperCore, {
    EffectFlip,Pagination,Navigation,Controller
  } from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectFlip,Pagination,Navigation,Controller]);

const MainPrinciples = () => {

    const [controlledImg, setControlledImg] = useState(null);
    const [controlledText, setControlledText] = useState(null);

    return (
        <div className="main-principles">
            <div className="container">
                <div className="main-principles_wrapper">
                    <div className="main-principles_left">
                        <h2 className="title">Наши принципы</h2>
                        <div className="main-principles_list">
                            <div className="main-principles_item">
                                <div className="main-principles_item-img">
                                    <img src="../../img/main/principles/1-guarantee.svg" alt="1-guarantee" />
                                </div>
                                <div className="main-principles_item_text">
                                    <div className="main-principles_item_title">Качество</div>
                                    <div className="main-principles_item_descr">
                                        <span>Используем лучшие материалы и комплектующие</span>
                                        <span>Обладаем собственным парком техники</span>
                                    </div>
                                </div>
                            </div>
                            <div className="main-principles_item">
                                <div className="main-principles_item-img">
                                    <img src="../../img/main/principles/2-workers.svg" alt="2-workers" />
                                </div>
                                <div className="main-principles_item_text">
                                    <div className="main-principles_item_title">Профессионализм, эффективность, развитие</div>
                                    <div className="main-principles_item_descr">
                                        <span>Работаем с 2015 года</span>
                                        <span>ТОПовые специалисты</span>
                                    </div>
                                </div>
                            </div>
                            <div className="main-principles_item">
                                <div className="main-principles_item-img">
                                    <img src="../../img/main/principles/3-helping_hand.svg" alt="3-helping_hand" />
                                </div>
                                <div className="main-principles_item_text">
                                    <div className="main-principles_item_title">Предсказуемость и надежность</div>
                                    <div className="main-principles_item_descr">
                                        <span>Нацеленность на результат</span>
                                        <span>Партнерские отношения</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-contacts">
                            <Link to="#">Подробнее о контактах</Link>
                        </button>
                    </div>
                    <div className="main-principles_right">
                         <Swiper
                            className="main-principles-slider"
                            spaceBetween={50}
                            slidesPerView={1}
                            nested={true}
                            controller={{ control: controlledText }}
                            onSwiper={setControlledImg}
                            scrollbar={{ draggable: true }}
                            >
                            <SwiperSlide className="main-principles-technic">
                                <div className="main-principles-technic_wrapper">
                                    <img src="../../img/main/principles/slider/1-machinery.png" alt="1-machinery" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="main-principles-technic">
                                <div className="main-principles-technic_wrapper">
                                    <img src="../../img/main/principles/slider/2-bulldozer.png" alt="2-bulldozer" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="main-principles-technic">
                                <div className="main-principles-technic_wrapper">
                                    <img src="../../img/main/principles/slider/3-asphalt_paver.png" alt="3-asphalt_paver" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            className="main-principles-description"
                            spaceBetween={50}
                            slidesPerView={1}
                            nested={true}
                            speed={1000}
                            navigation={true}
                            pagination={{ clickable: true }}
                            scrollbar={{ draggable: true }}
                            onSwiper={setControlledText}
                            controller={{ control: controlledImg }}
                            >
                            <div className="main-principles-text_title">Наш парк техники</div>
                            <SwiperSlide className="main-principles-text">
                                <div className="main-principles-text_subtitle">Колесные экскаваторы JCB</div>
                            </SwiperSlide>
                            <SwiperSlide className="main-principles-text">
                                <div className="main-principles-text_subtitle">Колесные бульдозеры JCB</div>
                            </SwiperSlide>
                            <SwiperSlide className="main-principles-text">
                                <div className="main-principles-text_subtitle">Асфальтоукладчики JCB</div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPrinciples
