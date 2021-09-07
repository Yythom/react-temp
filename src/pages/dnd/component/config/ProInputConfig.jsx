
import { Fragment, useState } from 'react';
import { Button, Input } from 'antd';


function ProInputConfig({ changeProps }) {
    return <Fragment>
        {/* 修改配置项 */}
        <div style={{ width: '100%' }}>
            <div style={{ width: '120px' }}> 内边距:</div>
            <Input
                type="text"
                placeholder='10'
                onBlur={(e) => {
                    changeProps({ attr: 'style', value: `${e.target.value / 2}px`, key: 'padding' },)
                }} />
        </div>


    </Fragment >
}

export default ProInputConfig;