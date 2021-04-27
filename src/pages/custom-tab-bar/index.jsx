import React, { memo, useState } from 'react'

import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { actions } from './store/slice'
import './index.scss'


const bar_height = 60;
export default memo(() => {
    const dispatch = useDispatch();
    const tabbarState = useSelector(state => state.tabbar, shallowEqual);
    const history = useHistory();
    const [tabBars] = useState([
        {
            url: '/demo',
            text: '首页',
            icon: <i className='iconfont icon-home' />,
            iconColor: '',
            activeIcon: <i className='iconfont icon-home_1' />,
            activeIconColor: '#ff8c2d',
        },
        {
            url: '/pages/center/index',
            text: '个人中心',
            icon: <i className='iconfont icon-wode1' />,
            iconColor: '',
            activeIcon: <i className='iconfont  icon-wode' />,
            activeIconColor: '#ff8c2d',
        },
    ])
    console.log(tabbarState);
    const handleClick = (url, index) => {
        history.push(url)
        dispatch(actions.changetab(index))
    }

    return (
        <div className='tabbar-wrap' style={{ height: bar_height * 2 + 'rpx', paddingBottom: `env(safe-area-inset-bottom)` }} >
            {
                tabBars[0] && tabBars.map((item, index) => {
                    return (
                        <div key={item.url} className={`${index === tabbarState.active ? 'text-main _widthAuto' : '_widthAuto'}`} onClick={() => handleClick(item.url, index)} >
                            <div className='icon_wrap' style={{ borderRadius: '50%', }}>
                                <div style={index === tabbarState.active && item.activeIcon ? { color: item.activeIconColor } : { color: item.iconColor }}>
                                    {
                                        index === tabbarState.active && item.activeIcon ? item.activeIcon : item.icon
                                    }
                                </div>

                            </div>
                            <span style={index === tabbarState.active && item.activeIcon ? { color: item.activeIconColor } : { color: item.iconColor }}>{item.text}</span>
                        </div>
                    )
                })
            }
        </div>
    )
})


