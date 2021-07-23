/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { actions } from './store/slice';
import './index.scss';

const Index = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [pageData, setPageData] = useState(null);
    const state = useSelector(state => state, shallowEqual);

    useEffect(() => {
        console.log(state, 'state');
    }, [])

    // useEffect(() => { // 解决弹框h5滚动穿透
    //     if (/**/) {
    //         console.log('开起', window.scrollY);
    //         setTop(window.scrollY)
    //         document.querySelector('.order_confirm_wrap')?.classList.add('fixed-wrap');
    //     } else {
    //         document.querySelector('.order_confirm_wrap')?.classList.remove('fixed-wrap')
    //         if (top) {
    //             window.scrollTo(0, top);
    //             setTop(0)
    //         }
    //     }
    // }, [/**/])

    return (
        <div className='name-wrap'>

        </div>
    )
}

export default Index;

