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

    return (
        <div className='name-wrap'>

        </div>
    )
}

export default Index;

