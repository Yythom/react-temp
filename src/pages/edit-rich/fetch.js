import axios from 'axios';
import html2canvas from 'html2canvas';

/**
 * 
 * @param {*} _class 
 */
const htmlToimage = (_class) => {
    // return new Promise((resolve, reject) => {
    html2canvas(document.querySelector(`.${_class}`), {
        scale: 6,
        dpi: 400,
        allowTaint: false,
        useCORS: true,
    }).then((canvas) => {
        /**  */
        canvas.toBlob((blob) => {
            let file = new File([blob], Math.random().toString(16).slice(2) + '.png');
            const formData = new FormData();
            const configs = {
                headers: { 'Content-Type': 'multipart/form-data' },
            };
            formData.append("file", file);

            axios.post('http://49.234.41.182:8701/upload', formData, configs).then(res => {
                // console.log(res.request.response);
                console.log(res);
                console.log(res?.data[file.name]?.url);
            })
            // resolve(file);
        });
    });
    // });
};

export {
    htmlToimage,

}