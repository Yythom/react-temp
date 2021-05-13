
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./index.scss";


// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper/core';


SwiperCore.use([Autoplay, Pagination, Navigation]);
function MySwiper({ list, setIndex }) {
    return (
        <>
            {
                list && list[0] && <Swiper
                    spaceBetween={20}
                    centeredSlides={true}
                    autoplay={{
                        "delay": 2400,
                        "disableOnInteraction": false
                    }}
                    pagination={{
                        "clickable": true
                    }}
                    // slidesPerView={0} // 一页展示块数
                    // initialSlide={0} // 初始化展示 【index】
                    loop
                    // onSwiper={(swiper) => console.log(swiper)}
                    // navigation={{
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // }} 
                    // navigation
                    className="mySwiper"
                    onSlideChange={(e) => { if (typeof setIndex === 'function') setIndex(e.realIndex); }}
                >
                    {
                        list.map((e, i) => {
                            return (
                                <SwiperSlide key={i}>
                                    {e}
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            }
        </>
    )
}

export default MySwiper