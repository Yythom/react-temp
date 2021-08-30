import { Form, Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useEffect } from 'react';
import ImgCrop from 'antd-img-crop';

function UploadFile() {

    const [OSSData, setOSSData] = useState(null)

    const init = async () => {
        let res = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    dir: 'user-dir/',
                    expire: '1577811661',
                    host: '//www.mocky.io/v2/5cc8019d300000980a055e76',
                    accessId: 'c2hhb2RhaG9uZw==',
                    policy: 'eGl4aWhhaGFrdWt1ZGFkYQ==',
                    signature: 'ZGFob25nc2hhbw==',
                })
            }, 2000);
        });
        return res
    };

    useEffect(() => {
        init();
    }, []);

    const props = {
        name: 'file',
        // listType: "picture",
        listType: "picture-card",
        maxCount: 1,
        data: OSSData,
        action: 'http://49.234.41.182:8701/upload',
    };

    const be = async () => {
        let res = await init();
        console.log(res);
    };


    return (
        <div>
            <ImgCrop rotate>
                <Upload {...props} beforeUpload={be}>
                    +
                    {/* <Button icon={<UploadOutlined />}>Click to Upload</Button> */}
                </Upload>
            </ImgCrop>
        </div>
    )
}

export default UploadFile;