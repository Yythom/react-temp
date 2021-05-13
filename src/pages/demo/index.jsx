import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { actions as testActions } from '@/store/demo'

import './index.scss'
import Header from '../../component/header/Index'
import { useHistory } from 'react-router'
import { formatUrl } from '@/utils/format.js'
import { getWxConfigs } from '@/services/index_api'




const Index = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const demoStore = useSelector(state => state.demo, shallowEqual);
    useEffect(() => {
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


    return (
        <div className='demo_wrap' style={{ paddingBottom: `env(safe-area-inset-bottom)` }} >
            <Header onClick={() => history.goBack()} />
            <button onClick={handleClick}>测试action</button>
            <button onClick={handleClickAsync}>测试异步aciton</button>
            <button onClick={() => {

                console.log(demoStore);
            }}>输出</button>
        </div >
    )
}

export default Index


