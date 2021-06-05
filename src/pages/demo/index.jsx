/* eslint-disable no-unused-vars */
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
// import { DIY_DATA } from './picker_data'
import address from './address.json'
import { getTestList } from '@/services/test'
import Sort from './sort'



const Index = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [list, setList] = useState([]);
    const demoStore = useSelector(state => state.demo, shallowEqual);
    useEffect(() => {
        console.log(testActions);
        // setList([1, 2, 3, 4, 5, 6, 7])
        console.log(formatUrl());
    }, [])

    const handleClick = async () => {
        dispatch(testActions.test(111))
    }

    const handleClickAsync = async () => {
        // let res = await getWxConfigs();
        dispatch(testActions.testAsync())
    }
    const [sort, setSort] = useState(false)
    return (
        <div className='demo_wrap' style={{ paddingBottom: `calc(env(safe-area-inset-bottom) + 1rem)` }} >
            {/* coustom */}
            <Button size='xs' onClick={handleClick}>测试action</Button>
            <Button size='xs' onClick={handleClickAsync}>测试异步aciton</Button>
            <Button size='xs' onClick={() => {
                console.log(demoStore);
            }}>输出</Button>

            {/* <PullBox
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

                {list.map((e, i) => {
                    return <Cell key={'list_pull_' + i}>{e}</Cell>
                })}
            </PullBox> */}
        </div >
    )
}

export default Index


