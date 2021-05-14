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
import { showToast, showLoading } from '@/utils/Toast'
import Vtabs from '@/component/vtabs/Vtabs'
import Wtabs from '@/component/tabs/Wtabs'


import { Button, Cell, Popup, SwipeAction } from 'zarm'

import './index.scss'
import Drop from '@/component/drop/DropDwon'



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

    const [drop, setDrop] = useState(false)
    const [drop1, setDrop1] = useState(false)
    return (
        <div className='demo_wrap' style={{ paddingBottom: `calc(env(safe-area-inset-bottom) + 1rem)` }} >
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
                    <button onClick={() => { showToast.message('这是一个提示') }}>普通提示</button>
                    <button onClick={() => { showToast.message('成功', 'success') }}>成功提示</button>
                    <button onClick={() => { showToast.message('成功', 'error') }}>错误提示</button>
                </div>
            </div>
            <div>
                <h1>loading</h1>
                <div>
                    <button onClick={() => { showLoading('加载中') }}>普通提示</button>
                </div>
            </div>

            {/* float */}
            <div>
                <h1>float</h1>
                <div>
                    <button onClick={() => { setShow(true); }}>下浮层</button>
                    <FloatBottom className='test__-' show={show} setShow={setShow} style={{ padding: '1.6rem 2rem' }}>
                        <div style={{ background: '#333', height: '300px', width: '100%' }}>111</div>
                    </FloatBottom>
                </div>
            </div>

            {/* swiper */}
            <MySwiper height={200} list={['https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0199a155c4790f32f8755e6604d4d5.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623485291&t=604e35751d08384c4891ca7ddf168a05', 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Frms.zhubajie.com%2Fresource%2Fredirect%3Fkey%3Dtianpeng%2F2015-11%2F14%2Fproduct%2F5646e9d57392f.jpg&refer=http%3A%2F%2Frms.zhubajie.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623485291&t=8c4fbf45b63e5fc9850299676231625a', 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F013cfe5c1b446da80121df904624c3.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623485291&t=577eeeae616121b118debea5ce7bc7dc']} />

            {/*  SwipeAction */}
            <div>
                <h1>滑块</h1>
                <SwipeAction
                    autoClose
                    left={[
                        <Button size="lg" shape="rect" theme="primary" onClick={() => console.log('左按钮1')}>
                            左按钮1 </Button>,
                    ]}
                    right={[
                        <Button size="lg" shape="rect" theme="danger" onClick={() => console.log('右按钮1')}>右按钮2</Button>,
                    ]}
                    onOpen={() => console.log('open')}
                    onClose={() => console.log('close')}
                >
                    <Cell style={{ marginBottom: '4px' }}>左右都能滑动（自动关闭）</Cell>
                </SwipeAction>
            </div>

            <h1>dropDown</h1>
            <div>
                <button onClick={() => { setDrop(!drop); setDrop1(false) }}>
                    开关1
                </button>
                <button onClick={() => { setDrop1(!drop1); setDrop(false) }}>
                    开关2
                </button>
                <Drop
                    spaceName='test'
                    setShow={() => { setDrop(!drop); setDrop1(false) }}
                    show={drop}
                    itemHeight="40"
                    onChange={(type) => {
                        console.log('选择了=----', type);
                    }}
                    list={[
                        {
                            text: '1111',
                        },
                        {
                            text: '2222',
                        },
                        {
                            text: '3333',
                        },
                        {
                            text: '3333',
                        }
                    ]}
                />
                <Drop
                    spaceName='test'
                    setShow={() => { setDrop1(!drop1); setDrop(false) }}
                    show={drop1}
                    itemHeight="20"
                    onChange={(type) => {
                        console.log('选择了=----', type);
                    }}
                    list={[
                        {
                            text: '2',
                        },
                        {
                            text: '2',
                        },
                        {
                            text: '2',
                        },
                        {
                            text: '3',
                        }
                    ]}
                />
            </div>


            <Vtabs
                height='100px'
                style={{ marginBottom: '4px' }}
                TabItemHeight={60}
                list={[
                    {

                        title: '标签1',
                        content: <div>
                            <span>111段字</span>
                        </div>
                    },
                    {
                        title: '标签2',
                        content: <div>
                            <span>222段字</span>
                        </div>
                    },
                ]}></Vtabs>

            <Wtabs height='200px' list={[
                {
                    title: '标签1',
                    content: <div>
                        <span>111段字</span>
                    </div>
                },
                {
                    title: '标签2',
                    content: <div>
                        <span>222段字</span>
                    </div>
                }
            ]}></Wtabs>



        </div >
    )
}

export default Index


