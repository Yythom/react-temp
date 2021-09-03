
import { Fragment, useState } from 'react';
import { Button, Input } from 'zarm';
import UploadFile from './up';
import Swiper from '../../component/swiper/MySwiper';
import { useEffect } from 'react';
import axios from 'axios';
import { hideLoading, showLoading } from '@/utils/Toast';

const View = (props) => {
    return <div {...props}>
        {props.children}
    </div>
}

function ProSwiper({ pro_props }) {

    useEffect(() => {
        console.log(pro_props.http, 'http');
        if (pro_props?.http?.params && pro_props?.http?.ip) {
            showLoading()
            axios.post(pro_props?.http?.ip, JSON.parse(pro_props?.http?.params)).then(res => {
                console.log(res);
                hideLoading();
            })
        }
    }, [pro_props?.http])

    const styles = pro_props?.style ? { ...pro_props?.style } : {};

    return <View  {...pro_props}>
        <Swiper list={pro_props?.list} style={styles} />
    </View >
}


function ProInput({ pro_props }) {
    const styles = pro_props?.style ? { ...pro_props?.style } : {};
    return <Fragment>
        <Input    {...pro_props}>

        </Input>
    </Fragment >
}

function ProButton({ pro_props }) {
    const styles = pro_props?.style ? { ...pro_props?.style } : {};

    return <button className='fc' {...pro_props}>
        {pro_props?.content || '按钮'}
    </button >
}

function ProUpload({ pro_props }) {
    const styles = pro_props?.style ? { ...pro_props?.style } : {};

    return <div  {...pro_props} style={{ width: '100%', height: '100%', ...styles, }}>
        <UploadFile  {...pro_props} />
    </div >
}

const ProComponent = {
    ProInput,
    ProButton,
    ProUpload,
    ProSwiper,
}
export default ProComponent;