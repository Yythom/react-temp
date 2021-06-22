import html2canvas from 'html2canvas';

/**
 * 
 * @param {*} _class 
 */
const htmlToimage = (_class) => {
    return new Promise((resolve, reject) => {
        html2canvas(document.querySelector(`.${_class}`), {
            scale: 2,
            allowTaint: false,
            useCORS: true,
        }).then((canvas) => {
            /**  */
            canvas.toBlob((blob) => {
                let file = new File([blob], "ssssss");
                resolve(file);
            });
        });
    });
};

export {
    htmlToimage,

}