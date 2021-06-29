/* eslint-disable no-unused-vars */
// basic
import { useEffect, useState } from 'react'
import Header from '@/component/header/Index'
import { useHistory } from 'react-router'

// store
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { actions as testActions } from '@/store/demo'

// custom compontent
import { formatSeconds, formatUrl } from '@/utils/format.js'
import { Button, Cell, Picker, SwipeAction } from 'zarm'
import './index.scss'



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
    const [uploader, setuploader] = useState(null);

    useEffect(() => {
    }, [])


    return (
        <div className='demo_wrap' style={{ paddingBottom: `calc(env(safe-area-inset-bottom) + 1rem)` }} >
            {/* coustom */}
            <Button size='xs' onClick={handleClick}>测试action</Button>
            <Button size='xs' onClick={handleClickAsync}>测试异步aciton</Button>
            <Button size='xs' onClick={() => {
                console.log(demoStore);
            }}>输出</Button>



        </div >
    )
}

export default Index


