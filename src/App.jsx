/* eslint-disable no-undef */
import React from 'react'
//布局组件
import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import '@/assets/common.scss'
import BaseLayout from '@/component/BaseLyout/index'

function _App(props) {

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <Router>
            <Switch>
                <Route path='/' component={BaseLayout} ></Route>
                <Route path='/404' exact component={() => <h2>404</h2>}></Route>
                <Redirect to="/404" />
            </Switch>
        </Router>
    )
}

export default _App
