/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Tabs } from 'zarm';
import './wtabs.scss';

const { Panel } = Tabs;
const Wtabs = ({
    list = [], // 左侧列表
    onChange, // change事件
    height = '100px', // vtab高度
    style
    // windowTabsLength = 5, // 左侧列表显示的tabs数量
}) => {

    const [index, setIndex] = useState(0)


    const _onChange = (i) => {
        if (typeof onChange === 'function') {
            onChange(i);
        }
    }

    return (
        <div className='auto_tabs_wrap' style={{ height, ...style }}>
            <Tabs
                // swipeable
                scrollable
                className="tabs"
                style={{ height }}
                onChange={(i) => {
                    _onChange(i);
                    setIndex(i);
                }}
            >
                {
                    list.map((e, i) => {
                        return (
                            <Panel title={e.title} key={'w_wtabs' + i}>
                                <div className="content" style={{ height: `calc(${height} - 4.6rem)` }} >
                                    {e.content}
                                    {/* <div style={{ height: '300px', background: 'blue' }}></div> */}
                                </div>
                            </Panel>
                        )
                    })
                }

            </Tabs>
        </div>
    )
}
export default Wtabs;
