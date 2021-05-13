import React, { useEffect, useState } from 'react';
import './wtabs.scss'
import { vtablist } from './data';
import { Tabs, WhiteSpace } from 'antd-mobile';
const Wtabs = ({
    list = vtablist, // 左侧列表
    children, // 右侧渲染的内容
    onChange, // change事件
    height = 200, // wtab高度
    windowTabsLength = 6, // 左侧列表显示的tabs数量
}) => {

    const [index, setIndex] = useState(0)
    const _onChange = (title, i) => {
        if (typeof onChange === 'function') {
            onChange(i);
        }
    }

    return (
        <div className='vTabs-wrap' style={{ height }}>
            <Tabs
                initialPage={'t2'}
                onChange={(title, index) => {
                    _onChange(title, index)
                    setIndex(index)
                }}
                tabs={list}
                // swipeable={false}
                destroyInactiveTab
                renderTabBar={props => <Tabs.DefaultTabBar {...props} page={windowTabsLength} />}
            >
                {
                    children
                }
            </Tabs>
        </div>
    )
}
export default Wtabs;
