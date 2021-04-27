/* eslint-disable no-undef */
import React from 'react';
import './index.scss';
import 'animate.css';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
//路由
import router from '../../router/router';
import { useEffect } from 'react';
import Bar from '../../pages/custom-tab-bar/index'
import Header from '../header/Index';

function _Layout(props) {
    // const history = useHistory();

    useEffect(() => {
        console.log('layout loading');
        if (navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1) {
            console.log('wx');
        } else if (navigator.userAgent.toLowerCase().indexOf('alipayclient') !== -1) {
            // props.setBrowser('zfb');
        } else {
            // props.setBrowser('other');
        }
    }, [])




    return (
        <div className='layout animate__fadeIn animate__animated'>
            <Header />
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
            <Bar />
        </div>
    )
}
export default _Layout