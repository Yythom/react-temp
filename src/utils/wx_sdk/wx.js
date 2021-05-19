/* eslint-disable no-undef */
const configWx = async () => {
    const host = document.location.href;
    let _res = await getWxConfigs({ url: host, })
    console.log(_res, 'getWxConfigs');
    if (_res) {
        const { appId, timestamp, nonceStr, signature } = _res;
        wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印
            appId: appId, // 必填，公众号的唯一标识
            timestamp: timestamp, // 必填，生成签名的时间戳
            nonceStr: nonceStr, // 必填，生成签名的随机串
            signature: signature, // 必填，签名
            jsApiList: [
                "scanQRCode",
            ], // 必填，需要使用的JS接口列表
            // openTagList: ["wx-open-launch-weapp"], // 可选，需要使用的开放标签列表，例如['wx-open-launch-app']
        });

        wx.ready(function () {
            console.log('ready');
            // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
        });
        wx.error(function (res) {
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
            console.log(res, 'error');
        });
    }
};