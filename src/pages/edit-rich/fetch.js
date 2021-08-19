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
        logging: true, //日志开关，便于查看html2canvas的内部执行流程
        useCORS: true,//允许加载跨域的图片
        tainttest: true, //检测每张图片都已经加载完成
    }).then((canvas) => {
        // const dataURL = canvas.toDataURL("image/png");
        // console.log(dataURL, 'dataURL');
        // /**  */
        canvas.toBlob((blob) => {
            let file = new File([blob], Math.random().toString(16).slice(2) + '.png');
            const formData = new FormData();
            const configs = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            };
            formData.append("file", file);

            axios.post('http://0.0.0.0:8701/upload', formData, configs).then(res => {
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