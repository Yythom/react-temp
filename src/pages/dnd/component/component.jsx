
import { Fragment, useState } from 'react';
import { Button, Input } from 'zarm';
import Swiper from '../../../component/swiper/MySwiper';
import { useEffect } from 'react';
import axios from 'axios';
import { hideLoading, showLoading } from '@/utils/Toast';
import usePaging from '../usePaging';
import ProTypes from './types/types';

const View = (props) => {
    return <div {...props}>
        {props.children}
    </div>
}

function ProSwiper({ pro_props }) {
    const styles = pro_props?.style ? { ...pro_props?.style } : {};

    const [init, setInit] = useState(true);
    useEffect(() => { // 测试请求的
        if (pro_props?.http?.params && pro_props?.http?.ip) {
            setInit(!init);
        }
    }, [pro_props?.http])

    const [result, no_more, list] = usePaging(pro_props?.http?.params, pro_props?.http?.ip, init, (res) => {
        // 请求成功回调
        console.log(res);
    })


    return <View  {...pro_props}>
        <Swiper list={pro_props?.list} style={styles} />
    </View >
}


const ProComponent = {
    ProSwiper,
    ProTypes,
}
export default ProComponent;