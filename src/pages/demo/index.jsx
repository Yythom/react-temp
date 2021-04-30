import { getWxConfigs } from '../../services/index_api'
import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { actions as testActions } from '../../../src/store/demo'

import './index.scss'


const Index = () => {
    const dispatch = useDispatch();
    const demoStore = useSelector(state => state.demo, shallowEqual);
    useEffect(() => {
        console.log(demoStore);
    }, [])

    const handleClick = async () => {
        dispatch(testActions.test(111))
    }

    const handleClickAsync = async () => {
        getWxConfigs().then(res => {
            console.log(res);
        })
        dispatch(testActions.testAsync({ a: 111 }))

    }


    return (
        <div className='$_wrap' style={{ paddingBottom: `env(safe-area-inset-bottom)` }} >
            <button onClick={handleClick}>测试action</button>
            <button onClick={handleClickAsync}>测试异步aciton</button>
            <button onClick={() => {
                console.log(demoStore);
            }}>输出</button>
        </div>
    )
}

export default Index


