
import { Fragment, useState } from 'react';
import { Button, Input } from 'zarm';
import UploadFile from './up';
import Swiper from '../../component/swiper/MySwiper';
import { useEffect } from 'react';
import axios from 'axios';
import { hideLoading, showLoading } from '@/utils/Toast';
import usePaging from './usePaging';

const View = (props) => {
    return <div {...props}>
        {props.children}
    </div>
}

function ProSwiper({ pro_props }) {
    const [init, setInit] = useState(true);
    useEffect(() => {
        if (pro_props?.http?.params && pro_props?.http?.ip) {
            setInit(!init);
        }
    }, [pro_props?.http])
    const [result, no_more, list] = usePaging(pro_props?.http?.params, pro_props?.http?.ip, init, (res) => {
        // 请求成功回调
        console.log(res);
    })
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