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
            <Route path='/' component={BaseLayout} ></Route>
        </Router>
    )
}

export default _App
