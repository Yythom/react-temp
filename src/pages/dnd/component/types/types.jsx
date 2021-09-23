/* eslint-disable react/jsx-indent-props */

import React, { memo, useMemo } from 'react';
import { Carousel } from 'zarm';
import './types.scss'


const ProTypes = memo(({
    pro_props,
}) => {
    const list = pro_props?.list || []
    const styles = pro_props?.style ? { ...pro_props?.style } : {};
    const newArr = useMemo(() => {
        if (!list[0]) return []
        let num = 8
        let arr = JSON.parse(JSON.stringify(list))
        let times = Math.ceil(arr.length / num);
        let _newArr = [];
        for (let i = 0; i < times; i++) {
            _newArr.push(arr.slice(i * num, (i + 1) * num));
        }
        return _newArr;
    }, [list])
    return (
        <>
            {
                list[0] ? <Carousel
                    style={{ margin: 0 }}
                    className='types'
                    // autoPlay={!!list.length}
                    loop
                    direction="left"
                    autoPlayIntervalTime={2000}
                    onChangeEnd={(index) => {
                        // console.log(`onChangeEnd: ${index}`);
                    }} >
                    {newArr.map((value, index) => (
                        <div className="carousel__item__pic" key={index}>
                            {/**/}
                            {
                                value.map(item => {
                                    return (
                                        <div
                                            className='typeitem'
                                            onClick={() => { }}
                                            style={{ height: styles?.height }}
                                            key={'types' + item.name}
                                        >
                                            <div className='img fc'>{item.name}</div>
                                            <div className='text'>{item.type}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    ))}
                </Carousel> : <div>
                    types组件
                </div>
            }
        </>
    )
})

export default ProTypes;