import React, { useEffect, useState } from 'react';
import './vtabs.scss'
import { vtablist } from './data';
import { Tabs, WhiteSpace } from 'antd-mobile';
const Vtabs = ({
    list = vtablist, // 左侧列表
    children, // 右侧渲染的内容
    onChange, // change事件
    height = '200px', // vtab高度
    windowTabsLength = 5, // 左侧列表显示的tabs数量
}) => {

    const [index, setIndex] = useState(0)

    const _onChange = (title, i) => {
        if (typeof onChange === 'function') {
            onChange(i);
        }
    }

    return (
        <div className='vTabs-wrap' style={{ height }}>
            <WhiteSpace />
            <Tabs
                height={100}
                initialPage={'t2'}
                onChange={(title, index) => {
                    _onChange(title, index)
                    setIndex(index)
                }}
                tabs={vtablist}
                tabBarPosition='left'
                tabDirection='vertical'
                renderTabBar={props => <Tabs.DefaultTabBar {...props} page={windowTabsLength} />}
            >
                {children}
            </Tabs>
            <WhiteSpace />
        </div>
    )
}
export default Vtabs;
