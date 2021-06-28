/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useTransition } from "react";
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { Button, Input } from "zarm";
import useHttp from "src/hook/useHttp";
import { actions } from './store/slice';
import List from "./other/showList";
import './index.scss';
import { hideLoading, showLoading } from "@/utils/Toast";
import { getTestList } from "@/services/test";

// const initialResource = fetchProfileData();


const Index = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [pageData, setPageData] = useState(1);
    const state = useSelector(state => state, shallowEqual);
    // const [isloading, res, refresh] = useHttp();
    const [isPending, startTransition] = useTransition();
    const [_res, setres] = useState(null);
    // useEffect(() => {
    //     console.log(res, isloading, 'result');
    // }, [res])
    console.log(isPending, 'isPending');
    // isloading ? showLoading() : hideLoading();

    return (
        <div className='name-wrap'>
            {/* {isloading && 'loading'} */}
            <div
                onClick={() => {
                    // startTransition(() => {
                    //     getTestList({ page: 1 }).then(res => {
                    //         setres(res)
                    //     })
                    // });
                }}
            >刷新</div>
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

