/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './drop.scss'
const Drop = ({
    show = false,
    setShow = Function.prototype,
    onChange,
    itemHeight = 30,
    list = [],
    spaceName = '必填',
}) => {

    const [item, setItem] = useState(null)
    const _onChange = (i) => {
        if (typeof onChange === 'function') {
            onChange(i);
        }
        setItem(i)
    }

    return (
        <div className={(show && 'act_drop_wrap') + ' drop_wrap'}>
            <div className='list_wrap' style={{ height: show ? itemHeight * list.length / 10 + 'rem' : 0 }}>
                {
                    list.map((e, i) => {
                        return (
                            <div className={(item === e && 'act_drop_item') + ' drop_item'} onClick={() => { _onChange(e) }} style={{ height: show ? itemHeight / 10 + 'rem' : 0, transition: '300ms' }} key={spaceName + i}>{e.text}</div>
                        )
                    })
                }
            </div>
            {
                show
                && <div className='drop-mask' style={{ top: show ? itemHeight * list.length / 10 + 'rem' : 0 }} onClick={
                    () => {
                        setShow(!show);
                    }
                }
                />
            }
        </div>
    )
}
export default Drop;
