
import { Button } from 'antd';
import { Fragment } from 'react';
import { Input } from 'zarm';
import UploadFile from './up';

function ProInput(props) {
    const pro_data = props?.pro_data || {}
    return <Fragment>
        <Input  {...props} {...pro_data}>

        </Input>
    </Fragment >
}

function ProButton(props) {
    const pro_data = props?.pro_data || {}
    console.log(pro_data, 'pro_data');
    return <Button {...props} {...pro_data}>
        按钮
    </Button >
}

function Upload(props) {
    const pro_data = props?.pro_data || {}
    return <UploadFile />
}

const pro = {
    ProInput,
    ProButton,
    Upload,
}
export default pro;