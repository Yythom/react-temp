function startScan(onOk) {
    console.log('新版 TODO');
    var u = navigator.userAgent;
    let isBrowser = 'other';
    if (u.toLowerCase().indexOf('micromessenger') !== -1) {
        isBrowser = 'wx'
    }
    if (localStorage.getItem('scan') && isBrowser === 'wx') {
        // eslint-disable-next-line no-undef
        wx.scanQRCode({
            needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
            success: function (res) {
                var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                console.log('原始数据', result);
                onOk(result.replace('CODE_128', '').replace(',', ''))
            }
        })
    } else if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        if (window?.webkit?.messageHandlers) {

        } else {
            console.log('不支持扫码');
        }
    } else if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        if (window.WebViewJavascriptBridge) {
            // window.WebViewJavascriptBridge.init(function (message, responseCallback) { })
            // window.WebViewJavascriptBridge.callHandler("findResultCode", "", function (result) {
            //     // console.log(result, "result");
            //     onOk(result)
            // })
        } else {
            console.log('不支持扫码 window.WebViewJavascriptBridge--no');
        }
    } else {
        console.log('不支持扫码');
    }
}


export default startScan