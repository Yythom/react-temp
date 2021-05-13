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
import MySwiper from '@/component/swiper/MySwiper'
import { T } from 'react-toast-mobile'
import './index.scss'
import { t_confirm, t_alert, t_notice, t_progress } from '@/utils/Toast'
import Vtabs from '@/component/vtabs/Vtabs'
import { Tabs } from 'antd-mobile'
import Wtabs from '@/component/tabs/Wtabs'



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
            <div className='swiper_wrap'>
                <MySwiper list={['https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0199a155c4790f32f8755e6604d4d5.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623485291&t=604e35751d08384c4891ca7ddf168a05', 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Frms.zhubajie.com%2Fresource%2Fredirect%3Fkey%3Dtianpeng%2F2015-11%2F14%2Fproduct%2F5646e9d57392f.jpg&refer=http%3A%2F%2Frms.zhubajie.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623485291&t=8c4fbf45b63e5fc9850299676231625a', 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F013cfe5c1b446da80121df904624c3.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623485291&t=577eeeae616121b118debea5ce7bc7dc'].map(e => <img src={e} alt='err' />)} />
            </div>


            <Vtabs height='250px'>children</Vtabs>
            <Wtabs >children</Wtabs>
            <FloatBottom show={show} setShow={setShow} height={300 + 40} style={{ padding: '1.6rem 2rem' }}>
                <div style={{ background: '#333', height: '300px', width: '100%' }}>111</div>
            </FloatBottom>
        </div >
    )
}

export default Index


