
import React from "react";
import "./index.scss";

import { Carousel } from "zarm";

function MySwiper({ height = '200px', list = [] }) {
    return (
        <>
            {
                <Carousel
                    autoPlay
                    loop
                    direction="left"
                    autoPlayIntervalTime={5000}
                    onChangeEnd={(index) => {
                        // console.log(`onChangeEnd: ${index}`);
                    }}
                >
                    {
                        list.map((item, i) => {
                            return (
                                <div className="carousel__item__pic" key={+i}>
                                    <img className='img' src={item} alt="err" style={{ height, width: '100%' }} />
                                </div>
                            );
                        })
                    }
                </Carousel>
            }
        </>
    )
}

export default MySwiper