/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
import { formatSeconds } from './format'
import dayjs from 'dayjs'



function getLocal(key) {
    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key))
    } else return false
}

/**
 * @param {jsx绑定函数} func 
 * @param {延迟} threshold 
 * @param {是否直接执行} immediate
 */
function debounce(func, threshold = 500, immediate = false) {
    if (typeof func !== 'function') {
        throw new Error('First argument of debounce function should be a function');
    }
    let timer = null;
    return function debounced(...args) {
        const context = this;
        const callNow = immediate && !timer;
        const later = () => {
            timer = null;
            if (!immediate) func.apply(context, args);
        };
        ////console.log('please wait');
        clearTimeout(timer);
        timer = setTimeout(later, threshold);
        if (callNow) func.apply(context, args);
        // console.log(func);

    };
}

function throttle(fn, wait = 500, isImmediate = false) {
    var flag = true;
    if (isImmediate) {
        return function () {
            if (flag) {
                fn.apply(this, arguments);
                flag = false;
                setTimeout(() => {
                    flag = true
                }, wait)
            }
        }
    }
    return function () {
        if (flag == true) {
            flag = false
            setTimeout(() => {
                fn.apply(this, arguments)
                flag = true
            }, wait)
        }
    }
}

const formDateMonth = (date, type) => {
    // new Date((1597307920.273 * 1000) - 86400000 *2).toLocaleString()

    date = new Date(date * 1000)
    // let current = (new Date().getTime()) - (86400000 * 1);//当前时间的前24小时
    let current = new Date(new Date().toLocaleDateString()).getTime(); //当天的0点
    // console.log(new Date(current))
    let month = (date.getMonth() + 1 + '').length === 1 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1; //月
    let day = (date.getDate() + '').length === 1 ? '0' + date.getDate() : date.getDate(); //日
    let hour = (date.getHours() + '').length === 1 ? '0' + date.getHours() : date.getHours(); //时
    let minute = (date.getMinutes() + '').length === 1 ? '0' + date.getMinutes() : date.getMinutes(); //分

    if (date.getTime() < current) { //今天0点之前的消息
        if (date.getTime() > (current - 86400000)) { //昨天
            if (type === 'showTime') {
                return `昨天 ${hour}:${minute}`
            }
            return `昨天`
        }
        return `${month}-${day}`
        // return `${month}-${day} ${hour}:${minute}`
    } else {
        return `${hour}:${minute}`
    }
}

const isMobile = (s) => /^1[3-9][0-9]{9}$/.test(s);


const systemScreen = () => {
    //（浏览器窗口上边界内容高度）
    function getDocumentTop() {
        var scrollTop = 0,
            bodyScrollTop = 0,
            documentScrollTop = 0;
        if (document.body) {
            bodyScrollTop = document.body.scrollTop;
        }
        if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        // console.log("scrollTop:" + scrollTop);
        return scrollTop;
    }

    //可视窗口高度（屏幕可以看见的高度）
    function getWindowHeight() {
        var windowHeight = 0;
        if (document.compatMode === "CSS1Compat") {
            windowHeight = document.documentElement.clientHeight;
        } else {
            windowHeight = document.body.clientHeight;
        }
        // console.log("windowHeight:" + windowHeight);
        return windowHeight;
    }

    //滚动条滚动高度（即整个网页的高度）
    function getScrollHeight() {
        var scrollHeight = 0,
            bodyScrollHeight = 0,
            documentScrollHeight = 0;
        if (document.body) {
            bodyScrollHeight = document.body.scrollHeight;
        }
        if (document.documentElement) {
            documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        // console.log("scrollHeight:" + scrollHeight);
        return scrollHeight;
    }
    let obj = {
        getDocumentTop: getDocumentTop(),
        getWindowHeight: getWindowHeight(),
        getScrollHeight: getScrollHeight(),
    }
    return obj
}

// 一键导航
function goMap(desc, lat, lng) {
    let isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1; //android终端
    let isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isiOS) {
        // window.location.href = `maps://?saddr=&daddr=${desc}`
    }
    if (isAndroid) {
    }
    let map = {
        marker: `coord:${lat},${lng}`
    }
    window.location.href = `https://apis.map.qq.com/tools/poimarker?type=0&marker=${map.marker}&key=4I7BZ-HIS3P-ELWD3-L2R4G-MOYBJ-OLBXZ&referer=hb-h5`
}

async function getLal(address) {
    //对指定地址进行解析
    geocoder.getLocation(address);
    return new Promise((resolve, reject) => {
        geocoder.setError((err) => {
            message.destroy();
            setTimeout(() => {
                message.error('地址输入错误');
            }, 200);
            resolve(false)
            // console.log(address + '地址输入错误', err)
        })
        //设置服务请求成功的回调函数
        geocoder.setComplete((res) => {
            resolve(res.detail)
        })
    });
}
async function getAddress(lat, lng) {
    let coord = new qq.maps.LatLng(lat, lng);
    //对指定地址进行解析
    geocoder.getAddress(coord);
    return new Promise((resolve, reject) => {
        geocoder.setError((err) => {
            message.destroy();
            setTimeout(() => {
                message.error('地址输入错误');
            }, 200);
            resolve(false)
            // console.log(address + '地址输入错误', err)
        })
        //设置服务请求成功的回调函数
        geocoder.setComplete((res) => {
            resolve(res.detail)
        })
    });
}



/**
 * @param {*} setTimer -设置页面定时器id （用于清除）
 * @param {*} value -目标时间戳
 * @param {*} setTime -设置当前倒计时state str
 */
function countdown(setTimer, value, setTime) {
    let timer = setInterval(() => {
        value -= 1;
        let today_unix = dayjs(dayjs().format('YYYY-MM-DD')).unix(); // 当前时间
        let un = value - today_unix;
        if (un > 0) {
            setTime(formatSeconds(un));
        } else {
            setTime('');
            clearInterval(timer);
        }
    }, 999.8)
    setTimer(timer);
}

const voiceBroadcast = (text) => {
    var url = "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&text=" + encodeURI(text); // baidu文字转语音
    var voiceContent = new Audio(url);
    console.log(voiceContent);
    voiceContent.src = url;
    voiceContent.play();
};


function getValue(search, key) {
    //1.找出key第一次出现的位置
    var start = search.indexOf(key);
    if (start == -1) {
        return;//说明没有字符串中key
    } else {
        //2.找出键值对结束的位置
        var end = search.indexOf("&", start);
        if (end == -1) {
            //这是最后一个键值对
            end = search.length;
        }
    }
    //3.将这个键值对提取出来
    var str = search.substring(start, end);

    //4.key=value   获取value
    var arr = str.split("=");
    return arr[1];
}
function getStorageSync(key) {
    let temp = JSON.parse(localStorage.getItem(key)).data
    return temp
}
function setStorageSync(key, value) {
    let temp = JSON.stringify({ data: value });
    localStorage.setItem(key, temp);
}


export {
    getLocal,

    debounce,
    throttle,

    goMap,
    getLal,
    getAddress,

    countdown,
    formDateMonth,
    isMobile,

    getStorageSync,
    setStorageSync,

    getValue,
    voiceBroadcast,

    systemScreen,
}