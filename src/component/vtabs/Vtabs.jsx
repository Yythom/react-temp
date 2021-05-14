import React, { useEffect, useState } from 'react';
import './vtabs.scss'
import { Tabs } from 'zarm';
const { Panel } = Tabs;
const Vtabs = ({
    list = [], // 左侧列表
    onChange, // change事件
    height = '100px', // vtab高度
    TabItemHeight = 40,
    style
    // windowTabsLength = 5, // 左侧列表显示的tabs数量
}) => {
    useEffect(() => {
        let res = document.querySelector('.custom-height').querySelectorAll('.za-tabs__tab')
        let arr = [...res]
        if (arr[0]) {
            arr.forEach(e => {
                e.style.height = TabItemHeight + 'px'
            })
        }
    }, [])
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
                className="custom-height"
                style={{ height }}
                direction="vertical"
                onChange={(i) => {
                    _onChange(i);
                    setIndex(i);
                }}
            >
                {
                    list.map((e, i) => {
                        return (
                            <Panel title={e.title} key={'vtabs' + i} >
                                <div className="content" key={i} style={{ height }}>
                                    {e.content}
                                </div>
                            </Panel>

                        )
                    })
                }

            </Tabs>
        </div>
    )
}
export default Vtabs;
