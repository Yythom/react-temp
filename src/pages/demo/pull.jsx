/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from 'react';
import { Pull, Cell, BackToTop } from 'zarm';

const REFRESH_STATE = {
    normal: 0, // 普通
    pull: 1, // 下拉刷新（未满足刷新条件）
    drop: 2, // 释放立即刷新（满足刷新条件）
    loading: 3, // 加载中
    success: 4, // 加载成功
    failure: 5, // 加载失败
};

const LOAD_STATE = {
    normal: 0, // 普通
    abort: 1, // 中止
    loading: 2, // 加载中
    success: 3, // 加载成功
    failure: 4, // 加载失败
    complete: 5, // 加载完成（无新数据）
};



const PullBox = ({ isWindowBox = false, isTopBtn = false, reqParams = {}, reqApi }) => {
    const pullRef = useRef();
    const [bodyScroll, setBodyScroll] = useState(false);
    const [dataSource, setDataSource] = useState([]);
    const [refreshing, setRefreshing] = useState(REFRESH_STATE.normal);
    const [loading, setLoading] = useState(LOAD_STATE.normal);
    const [page, setPage] = useState(1)

    useEffect(() => {
        setDataSource([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        setBodyScroll(isWindowBox);
    }, [])




    // 模拟请求数据
    const refreshData = async () => {
        setRefreshing(REFRESH_STATE.loading);
        setPage(1);
        // let res = await reqApi({ ...reqParams, page:1, pageSize: 10 });
        // if (res) {
        //     setDataSource([...dataSource, res.list]);
        // } else {
        //     setRefreshing(REFRESH_STATE.failure);

        // }
        // setRefreshing(REFRESH_STATE.success);


        setTimeout(() => {
            // setRefreshing(REFRESH_STATE.success);
            setRefreshing(REFRESH_STATE.failure);
        }, 1000);
    };

    // 模拟加载更多数据
    const loadData = async () => {
        setLoading(LOAD_STATE.loading);

        // let loadingState = LOAD_STATE.success;
        // let res = await reqApi({ ...reqParams, page: page + 1 })
        // if (res) {
        //     if (res.list[0]) {
        //         setPage(page + 1);
        //         setDataSource([...dataSource, res.list]);
        //     } else {
        //         console.log('加载完了');
        //     }
        // } else {
        //     loadingState = LOAD_STATE.failure
        // }
        // setLoading(loadingState);

        setTimeout(() => {
            let loadingState = LOAD_STATE.failure;
            // let loadingState = LOAD_STATE.success;
            // 成功？
            // setDataSource([...dataSource, 1, 2, 3, 4, 5, 6, 7,8]);
            setLoading(loadingState);
        }, 1000);
    };


    const style = bodyScroll ? {} : { overflowY: 'auto', maxHeight: 400 };

    const scrollContainer = () => {
        return bodyScroll ? window : pullRef.current && pullRef.current.scrollContainer;
    };

    return (
        <div style={{ position: 'relative' }}>
            <Pull
                ref={pullRef}
                style={style}
                refresh={{
                    state: refreshing,
                    handler: refreshData,
                    // render: (refreshState, percent) => {
                    //   const cls = 'custom-control';
                    //   switch (refreshState) {
                    //     case REFRESH_STATE.pull:
                    //       return (
                    //         <div className={cls}>
                    //           <ActivityIndicator loading={false} percent={percent} />
                    //           <span>下拉刷新</span>
                    //         </div>
                    //       );

                    //     case REFRESH_STATE.drop:
                    //       return (
                    //         <div className={cls}>
                    //           <ActivityIndicator loading={false} percent={100} />
                    //           <span>释放立即刷新</span>
                    //         </div>
                    //       );

                    //     case REFRESH_STATE.loading:
                    //       return (
                    //         <div className={cls}>
                    //           <ActivityIndicator type="spinner" />
                    //           <span>加载中</span>
                    //         </div>
                    //       );

                    //     case REFRESH_STATE.success:
                    //       return (
                    //         <div className={cls}>
                    //           <Icon type="right-round" theme="success" />
                    //           <span>加载成功</span>
                    //         </div>
                    //       );

                    //     case REFRESH_STATE.failure:
                    //       return (
                    //         <div className={cls}>
                    //           <Icon type="wrong-round" theme="danger" />
                    //           <span>加载失败</span>
                    //         </div>
                    //       );

                    //     default:
                    //   }
                    // },
                }}
                load={{
                    state: loading,
                    distance: 200,
                    handler: loadData,
                    // render: (loadState) => {
                    //   const cls = 'custom-control';
                    //   switch (loadState) {
                    //     case LOAD_STATE.loading:
                    //       return <div className={cls}><ActivityIndicator type="spinner" /></div>;

                    //     case LOAD_STATE.failure:
                    //       return <div className={cls}>加载失败</div>;

                    //     case LOAD_STATE.complete:
                    //       return <div className={cls}>我是有底线的</div>;
                    //   }
                    // },
                }}
            >
                {dataSource.map(e => {
                    return <Cell>{e}</Cell>
                })}
            </Pull>
            <BackToTop scrollContainer={scrollContainer} onClick={() => console.log('click back to top')}>
                <div
                    style={{
                        width: 60,
                        height: 60,
                        lineHeight: '60px',
                        textAlign: 'center',
                        backgroundColor: '#fff',
                        color: '#999',
                        fontSize: '14px',
                        borderRadius: 30,
                        boxShadow: '0 2px 10px 0 rgba(0, 0, 0, 0.2)',
                        cursor: 'pointer',
                    }}
                >
                    Up
               </div>
            </BackToTop>
        </div>
    );
};
export default PullBox