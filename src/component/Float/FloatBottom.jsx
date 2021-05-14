import React, { memo, useEffect, useState } from 'react';
import './float_bottom.scss'

const Float = ({ show, hide, setShow, className, style, children }) => {
    const hideFn = () => {
        if (show && typeof hide === 'function') {
            hide();
        }
    }
    const [top, setTop] = useState('');

    useEffect(() => {
        if (show) {
            // vibrateShort();
            setTop(-10)
        } else {
            let res = document.querySelector(`.${className}`).getBoundingClientRect().height
            setTop(-res)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [show]);

    return (
        <>
            {
                show
                && <div className='modal-mask' onClick={
                    () => {
                        hideFn();
                        setShow(!show);
                    }
                }
                />
            }
            <div className={`float_bottom  ${className}`} style={{ ...style, bottom: top ? top : '-9999px' }}>
                {children}
            </div>
        </>

    )
}
export default memo(Float);
