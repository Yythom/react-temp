
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "./index.scss";


import { Carousel } from "zarm";


function MySwiper({ height = 200, list = [] }) {
    return (
        <>
            {
                <Carousel
                    autoPlay
                    loop
                    direction="left"
                    height={height}
                    autoPlayIntervalTime={5000}
                    onChangeEnd={(index) => {
                        // console.log(`onChangeEnd: ${index}`);
                    }}
                >
                    {
                        list.map((item, i) => {
                            return (
                                <div className="carousel__item__pic" key={+i}>
                                    <img className='img' src={item} alt="" draggable={false} />
                                </div>
                            );
                        })}
                </Carousel>
            }
        </>
    )
}

export default MySwiper