/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useTransition, startTransition } from "react";
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { Button, Input } from "zarm";
import useHttp from "src/hook/useHttp";
import { actions } from './store/slice';
import List from "./other/showList";
import './index.scss';
import { hideLoading, showLoading } from "@/utils/Toast";

// const initialResource = fetchProfileData();


const Index = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [pageData, setPageData] = useState(1);
    const state = useSelector(state => state, shallowEqual);
    const { isloading, result, refresh } = useHttp();

    useEffect(() => {
        console.log(result, isloading, 'result');
    }, [result])

    isloading ? showLoading() : hideLoading();
    return (
        <div className='name-wrap'>
            {isloading && 'loading'}
            <Input onChange={(e) => {
                // console.log(e);
                // setPageData(e)
                startTransition(() => {
                    setPageData(e);
                });
            }} />
            <List value={pageData} />
            {pageData}
        </div>
    )
}

export default Index;

