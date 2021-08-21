import axios from 'axios';
/**
 * 
 * @param {*} _class 
 */
const uploadFile = (file, cb) => {
    const formData = new FormData();
    const configs = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };
    formData.append("file", file);

    axios.post('http://49.234.41.182:8701/upload', formData, configs).then(res => {
        // console.log(res.request.response);
        console.log(res?.data[file.name]?.url);
        res?.data[file.name]?.url && cb(res?.data[file.name]?.url)
    })
    // resolve(file);
};

export {
    uploadFile,
}