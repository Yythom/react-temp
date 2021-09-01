
import { Fragment } from 'react';
import { Button, Input } from 'zarm';
import UploadFile from './up';

function ProInput({ pro_props }) {
    return <Fragment>
        <Input   {...pro_props}>

        </Input>
    </Fragment >
}

function ProButton({ pro_props }) {

    return <button className='fc' {...pro_props}>
        {pro_props?.content || '按钮'}
    </button >
}

function Upload({ pro_props }) {
    const styles = pro_props?.style ? { ...pro_props?.style } : {};

    return <div  {...pro_props} style={{ width: '100%', height: '100%', ...styles, }}>
        <UploadFile  {...pro_props} />
    </div >
}

const ProComponent = {
    ProInput,
    ProButton,
    Upload,
}
export default ProComponent;