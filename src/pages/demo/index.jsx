// basic
import React, { useEffect, useState } from 'react'
import Header from '@/component/header/Index'
import { useHistory } from 'react-router'

// store
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { actions as testActions } from '@/store/demo'

// custom compontent
import { formatUrl } from '@/utils/format.js'
import { getWxConfigs } from '@/services/index_api'
import FloatBottom from '@/component/Float/FloatBottom'
// import MySwiper from '@/component/swiper/MySwiper'
import { T } from 'react-toast-mobile'
import './index.scss'
import { t_confirm, t_alert, t_notice, t_progress } from '@/utils/Toast'




const Index = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const demoStore = useSelector(state => state.demo, shallowEqual);
    useEffect(() => {
        console.log(T);
        console.log(testActions);
        console.log(formatUrl());
    }, [])

    const handleClick = async () => {
        dispatch(testActions.test(111))
    }

    const handleClickAsync = async () => {
        let res = await getWxConfigs();
        dispatch(testActions.testAsync(res))
    }

    const [show, setShow] = useState(false);

    // swiper 相关
    // const [index, setindex] = useState(0)
    // useEffect(() => {
    //     console.log(index);
    // }, [index])
    return (
        <div className='demo_wrap' style={{ paddingBottom: `env(safe-area-inset-bottom)` }} >
            <Header onClick={() => history.goBack()} title='demo' right='right' />

            {/* coustom */}
            <button onClick={handleClick}>测试action</button>
            <button onClick={handleClickAsync}>测试异步aciton</button>
            <button onClick={() => {
                console.log(demoStore);
            }}>输出</button>

            <button onClick={() => { setShow(true); }}>float button</button>
            <div>
                <h1>Toast</h1>
                <div>
                    <button onClick={() => { t_alert() }}>alert</button>
                    <button onClick={() => {
                        T.loading('hello world');
                        setTimeout(() => {
                            t_notice('密码错误')
                        }, 2000);
                    }}>loading</button>
                    <button onClick={() => { t_confirm() }}>confirm</button>
                    <button onClick={() => { t_notice() }}>notify</button>
                    <button onClick={() => { t_progress('加载中') }}>t_progress</button>
                    <button onClick={() => { T.loaded() }}>clear</button>
                </div>
            </div>
            <button onClick={() => { setShow(true); }}>float button</button>
            <button onClick={() => { setShow(true); }}>float button</button>
            {/* <div className='swiper_wrap'>
                <MySwiper index={index} setIndex={setindex} list={['img1', 'img2', 'img3'].map(e => <img src={e} alt='err' />)} />
            </div> */}
            <FloatBottom show={show} setShow={setShow} height={300 + 40} style={{ padding: '1.6rem 2rem' }}>
                <div style={{ background: '#333', height: '300px', width: '100%' }}>111</div>
            </FloatBottom>
        </div >
    )
}

export default Index


