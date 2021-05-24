// basic
import React, { useEffect, useState } from 'react'
import Header from '@/component/header/Index'
import { useHistory } from 'react-router'

// store
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { actions as testActions } from '@/store/demo'

// custom compontent
import { formatSeconds, formatUrl } from '@/utils/format.js'
import { getWxConfigs } from '@/services/index_api'
import FloatBottom from '@/component/Float/FloatBottom'

import { showToast, showLoading } from '@/utils/Toast'
import Vtabs from '@/component/vtabs/Vtabs'
import Wtabs from '@/component/tabs/Wtabs'

import { Button, Cell, Picker, SwipeAction } from 'zarm'

import './index.scss'
import Drop from '@/component/drop/DropDwon'
import PullBox from '../../component/pullBox/pull'
import showModal from '@/utils/modal'
import MySwiper from '@/component/swiper/MySwiper'
import dayjs from 'dayjs'
import { countdown } from '@/utils/uitls'
import { DIY_DATA } from './picker_data'
import { getTestList } from '@/services/test'



const Index = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [list, setList] = useState([]);
    const demoStore = useSelector(state => state.demo, shallowEqual);
    useEffect(() => {
        console.log(testActions);
        setList([1, 2, 3, 4, 5, 6, 7])
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

    const [time, setTime] = useState('')
    const [timer, setTimer] = useState('');

    const [picker, setPicker] = useState(false)
    return (
        <div className='demo_wrap' style={{ paddingBottom: `calc(env(safe-area-inset-bottom) + 1rem)` }} >
            <Header onClick={() => history.goBack()} title='demo' right='right' />

            {/* coustom */}
            <Button size='xs' onClick={handleClick}>测试action</Button>
            <Button size='xs' onClick={handleClickAsync}>测试异步aciton</Button>
            <Button size='xs' onClick={() => {
                console.log(demoStore);
            }}>输出</Button>

            {/* Toast */}
            <div>
                <h1>Toast</h1>
                <div>
                    <Button size='xs' onClick={() => { showToast.message('这是一个提示') }}>普通提示</Button>
                    <Button size='xs' onClick={() => { showToast.message('成功', 'success') }}>成功提示</Button>
                    <Button size='xs' onClick={() => { showToast.message('成功', 'error') }}>错误提示</Button>
                </div>
            </div>

            {/* modal */}
            <div>
                <h1>modal</h1>
                <div>
                    <Button size='xs' onClick={() => { showModal.alert('alert', 'test') }}>普通提示Modal</Button>
                    <Button size='xs' onClick={() => {
                        showModal.confirm('alert', <div>
                            <input type="text" />
                        </div>)
                    }}>自定义内容modal</Button>
                    <Button size='xs' onClick={() => { showModal.confirm('提示', '请确认xxx', () => { console.log('确认了') }) }} >操作确认Modal</Button>
                </div>
            </div>

            {/* loading */}
            <div>
                <h1>loading 3s</h1>
                <div>
                    <Button size='xs' onClick={() => { showLoading('加载中', 3000) }}>普通提示</Button>
                </div>
            </div>

            {/* float */}
            <div>
                <h1>float</h1>
                <div>
                    <Button size='xs' onClick={() => { setShow(true); }}>下浮层</Button>
                    <FloatBottom className='test__-' show={show} setShow={setShow} style={{ padding: '1.6rem 2rem' }}>
                        <div style={{ background: '#333', height: '300px', width: '100%' }}>111</div>
                    </FloatBottom>
                </div>
            </div>

            {/* picker */}
            <div>
                <h1>picker</h1>
                <div>
                    <Button size='xs' onClick={() => setPicker(true)}>自定义picker</Button>
                    <Picker
                        visible={picker}
                        title="custom title"
                        cancelText="Cancel"
                        okText="Ok"
                        dataSource={DIY_DATA}
                        valueMember={'code'}
                        // value={[1, 2]}
                        itemRender={(data) => data.name}
                        onOk={(selected) => {
                            console.log('DIY Picker onOk: ', selected);
                            // showToast.message('这是一个提示')
                        }}
                        onCancel={() => setPicker(!picker)}
                    />
                </div>
            </div>

            {/* float */}
            <div>
                <h1>format</h1>
                <div>
                    <Button size='xs' onClick={() => { countdown(setTimer, 1628919059, setTime) }}>倒计时</Button>
                    <Button size='xs' onClick={() => { console.log(formatUrl()); }}>search参数</Button>
                    <div>{time}</div>
                </div>
            </div>

            {/* dropDown */}
            <div style={{ position: 'sticky', top: '4.4rem', zIndex: '99', background: 'pink' }}>
                <h1>dropDown</h1>
                <div>
                    <Button size='xs' onClick={() => { setDrop(!drop); setDrop1(false) }}>
                        开关1
                </Button>
                    <Button size='xs' onClick={() => { setDrop1(!drop1); setDrop(false) }}>
                        开关2
                </Button>
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
            </div>


            {/* swiper */}
            <div>
                <h1>swiper</h1>
                <MySwiper height='12rem' style={{ borderRadius: '0.6rem', margin: '0 0.6rem' }} list={['https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0199a155c4790f32f8755e6604d4d5.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623485291&t=604e35751d08384c4891ca7ddf168a05', 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Frms.zhubajie.com%2Fresource%2Fredirect%3Fkey%3Dtianpeng%2F2015-11%2F14%2Fproduct%2F5646e9d57392f.jpg&refer=http%3A%2F%2Frms.zhubajie.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623485291&t=8c4fbf45b63e5fc9850299676231625a', 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F013cfe5c1b446da80121df904624c3.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1623485291&t=577eeeae616121b118debea5ce7bc7dc']} />
            </div>


            {/*  SwipeAction */}
            <div>
                <h1>滑块</h1>
                <SwipeAction
                    autoClose
                    left={[
                        <Button size='xs' size="lg" shape="rect" theme="primary" onClick={() => console.log('左按钮1')}>
                            左按钮1 </Button>,
                    ]}
                    right={[
                        <Button size='xs' size="lg" shape="rect" theme="danger" onClick={() => console.log('右按钮1')}>右按钮2</Button>,
                    ]}
                    onOpen={() => console.log('open')}
                    onClose={() => console.log('close')}
                >
                    <Cell style={{ marginBottom: '4px' }}>左右都能滑动（自动关闭）</Cell>
                </SwipeAction>
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
            <div>
                <h1>下拉刷新</h1>
            </div>
            <PullBox
                isTopBtn
                isWindowBox={false}
                maxHeight={300}
                request={{
                    params: {
                        page: 1,
                    },
                    http: getTestList
                }}
                onScrollBottom={(_list) => {
                    console.log(_list);
                }}
            >
                {/* <div style={{ height: '200px', background: '#999' }}>111</div> */}
                {list.map((e, i) => {
                    return <Cell key={'list_pull_' + i}>{e}</Cell>
                })}
            </PullBox>
        </div >
    )
}

export default Index


