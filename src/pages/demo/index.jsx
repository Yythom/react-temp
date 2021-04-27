import { getWxConfigs } from '../../services/index_api'
import React, { useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { actions } from '../../../src/store/userStore'

import './index.scss'


const Index = () => {
    const dispatch = useDispatch();
    const userStore = useSelector(state => state.userStore, shallowEqual);
    useEffect(() => {
        console.log(actions);
    }, [])

    const handleClick = async () => {
        getWxConfigs().then(res => {

        })
        dispatch(actions.changeTokenActionAsync({ a: 1 }))
    }

    return (
        <div className='$_wrap' style={{ paddingBottom: `env(safe-area-inset-bottom)` }} >
            <button onClick={handleClick}>测试action</button>
            <button onClick={() => {
                console.log(userStore)
            }}>输出</button>
        </div>
    )
}

export default Index


