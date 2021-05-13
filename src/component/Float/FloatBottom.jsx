import React, { memo, useEffect, useState } from 'react';
import './float_bottom.scss'

const Float = ({ show, height, hide, setShow, className, style, children }) => {
    const hideFn = () => {
        if (show && typeof hide === 'function') {
            hide();
        }
    }
    const [top, setTop] = useState('');

    useEffect(() => {
        console.log(show);
        if (show) {
            // vibrateShort();
            setTop(-10)
        } else {
            setTop(-height)
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
            <div className={`float_bottom  ${className}`} style={{ ...style, bottom: top }}>
                {children}
            </div>
        </>

    )
}
export default memo(Float);
