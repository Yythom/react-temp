function getCode() {
    const wxAppId = 'wxaf9e884cd4ab31b0';
    const aliAppId = '2021002101634074';
    const local = window.location.href;
    const p = new URLSearchParams(window.location.search);
    const code = p.get('code') || p.get('auth_code');

    if (/MicroMessenger/.test(window.navigator.userAgent)) { // 微信
        if (code) {
            localStorage.setItem('wx_code', code)
            window.location.href = `https://shop.integral.haimeiyx.com/integral?code=${code}`
            console.log(code, 'wx---pay-----code');
        }
        if (!code) {
            window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wxAppId}&redirect_uri=${local}&response_type=code&scope=snsapi_base&state=${configState}#wechat_redirect`;
        }
    }
    else if (/AlipayClient/.test(window.navigator.userAgent)) { // 支付宝
        if (code) {
            localStorage.setItem('zfb_code', code)
            window.location.href = `https://shop.integral.haimeiyx.com/integral?code=${code}`
            console.log(code, 'zfb----pay-----code');
        }
        if (!code) {
            window.location.href = `https://openauth.alipay.com/oauth2/publicAppAuthorize.htm?app_id=${aliAppId}&scope=auth_base&state=${configState}&redirect_uri=${encodeURIComponent(local)}`;
        }
    }
    else {
        localStorage.removeItem('wx_code', code)
        localStorage.removeItem('zfb_code', code)
        console.log('请使用微信或支付宝扫码');
    }
}

export default getCode;