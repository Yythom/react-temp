import dayjs from "dayjs";

// 倒计时转化Fn 时间戳
function formatSeconds(value) {
    if (value === 0) return null;
    let theTime = parseInt(value);// 秒
    let theTime1 = 0;// 分
    let theTime2 = 0;// 小时
    let theTime3 = 0;// 天
    if (theTime > 60) {
        theTime1 = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (theTime1 > 60) {
            theTime2 = parseInt(theTime1 / 60);
            theTime1 = parseInt(theTime1 % 60);
        }
        if (theTime2 > 24) {
            theTime3 = parseInt(theTime2 / 24);
        }
    }

    let result = `${parseInt(theTime)}`;
    if (result < 10) {
        result = `0${result}`;
    }
    if (theTime1 > 0) {
        result = `${parseInt(theTime1)}:${result}`;

        if (theTime1 < 10) {
            result = `0${result}`;
        }
    } else {
        result = `${result}`;
    }
    if (theTime2 > 0) { // 暂时用不到
        if (theTime2 > 24) {
            result = `${theTime3}天${parseInt(theTime2 % 24)}:${result}`;
        } else {
            result = `${parseInt(theTime2)}:${result}`;
        }
    }

    if (value < 60) { // 60秒以内操作
        result = `00:${result}`;
    } else if (value === 60) {
        result = '01:00';
    }
    return result;
}


function formatUrl() {
    if (window.location.search) {
        let iterator = new URLSearchParams(window.location.search).entries();
        let _obj = {}
        function Next(params) {
            let a = params.next()
            if (a.value) {
                _obj[a.value[0]] = a.value[1]
                Next(iterator)
            }
        }
        Next(iterator);
        return { ..._obj, str: window.location.search }

    }
    return 'no find search-url'
}
/**
 * @param {*} setTimer -设置页面定时器id （用于清除）
 * @param {*} value -目标时间戳
 * @param {*} setTime -设置当前倒计时state str
 */
function countdown(setTimer, value, setTime) {
    let timer = setInterval(() => {
        value -= 1;
        let today_unix = dayjs().unix(); // 当前时间
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

// 范围随机数
function randomFrom(lowerValue, upperValue) {
    return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
}

export {
    formatSeconds,
    formatUrl,
    countdown,
    randomFrom,

}