import { T } from 'react-toast-mobile'

/**
 * 单个确认按钮
 * @param {*} title 
 * @param {*} msg 
 */
function t_alert(title = '提示', msg = '这是一个提示', onOk = Function.prototype) {
    T.alert({
        title: title,
        message: msg,
        text: 'ok',
        fn: () => onOk()
    });
}


/**
 * 确认自定义多按钮
 * @param {*} title 
 * @param {*} msg 
 * @param {Array} ------ [ { text: 'btn',  fn: () => { }} ]
 */
function t_confirm(title = 'Title', msg = 'this is msg',
    btns = [
        {
            text: '确认',
            fn: Function.prototype
        },
        {
            text: '取消',
            fn: Function.prototype,
        },
        {
            text: '自定义',
            fn: Function.prototype,
        },
    ]) {
    T.confirm({
        title: title,
        message: msg,
        option: btns,
    });
}

// let notice = true
function t_notice(msg = '这是一个提示') {
    T.clear();
    // console.log(notice);
    // if (!notice) return
    // if (notice) {
    T.notify(msg);
    //     notice = false
    //     setTimeout(() => {
    //         notice = true
    //     }, 2000);
    // }
}

function t_loading(msg = '加载中') {
    T.clear();
}

/**
 * 进度条
 * @param {*} msg 
 * @param {Function} onOk 
 */
const t_progress = (msg = 'loading...', onOk = Function.prototype) => {
    T.progress.start(msg)
    let i = 0.1;
    let interval = setInterval(() => {
        i += 0.1 * Math.random();
        if (i >= 1) {
            clearInterval(interval);
            i = 1;
            onOk()
            T.progress.done('上传完成!');
            return;
        };
        T.progress.set(i)
    }, 200)
}
export {
    t_alert,
    t_confirm,
    t_notice,
    t_loading,
    t_progress,
}