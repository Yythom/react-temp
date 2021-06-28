import { Carousel } from "zarm";
import "./index.scss";

function MySwiper({ height = '200px', list = [], style }) {
    return (
        <div className='swiper_wrap' style={{ ...style }}>
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
        </div>
    )
}

export default MySwiper