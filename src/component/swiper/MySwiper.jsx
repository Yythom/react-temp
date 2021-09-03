
import React from "react";
import "./index.scss";

import { Carousel } from "zarm";

function MySwiper({ height = '100%', list = [
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.distinctclinic.com%2Fuploads%2F16252918542404.jpg&refer=http%3A%2F%2Fwww.distinctclinic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633229424&t=802279ff38fc95cf5badb85ae9c50082",
    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0158b858a169fda8012060c8fed338.jpg%401280w_1l_2o_100sh.png&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1633229439&t=efd11816fa08286ecb5879a68d1e7447"
], style }) {
    return (
        <div className='swiper_wrap' style={{ ...style }}>
            {
                list.length !== 0 ? <Carousel
                    autoPlay={!!list.length}
                    height={style?.height}
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
                </Carousel> : <div className='fc' style={{ height, width: '100%' }} >  轮播图 请添加图片</div>
            }
        </div>
    )
}

export default MySwiper