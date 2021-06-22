/* eslint-disable no-undef */
import React from 'react';
import './index.scss';
import 'animate.css';
import { Redirect, Route, Switch } from 'react-router-dom';
//路由
import router from '../../router/router';
import { useEffect } from 'react';
import Bar from '@/pages/custom-tab-bar/index'

function _Layout(props) {

    useEffect(() => {
        console.log('layout loading');
        if (navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1) {
            localStorage.setItem('Browser', 'wx');
        } else if (navigator.userAgent.toLowerCase().indexOf('alipayclient') !== -1) {
            localStorage.setItem('Browser', 'zfb');
        } else {
            localStorage.setItem('Browser', 'other');
        }
    }, [])

    return (
        <div className='layout animate__fadeIn animate__animated' style={{ boxSizing: 'border-box', paddingBottom: '6.1rem' }}>
            <Switch>
                { // 路由组件
                    Object.values(router).map(e => {
                        return (
                            <Route path={e.url} exact component={e.page} key={e.url} />
                        )
                    })

                }
                <Redirect to="/404" />
            </Switch>
            {/* <Bar /> */}
        </div>
    )
}
export default _Layout