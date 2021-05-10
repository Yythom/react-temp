/* eslint-disable no-undef */
function goMap(desc, lat, lng) {
    let isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1; //android终端
    let isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

    console.log(navigator.userAgent);
    // if (isiOS) {
    //     window.location.href = `maps://?saddr=&daddr=${desc}`
    // }
    // if (isAndroid) {
    let map = {
        marker: `coord:${lat},${lng}`
    }
    window.location.href = `https://apis.map.qq.com/tools/poimarker?type=0&marker=${map.marker}&key=4I7BZ-HIS3P-ELWD3-L2R4G-MOYBJ-OLBXZ&referer=hb-h5`
    // }
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

export {
    goMap, // 一键导航
    getLal,  // 对指定地址进行解析
    getAddress, // 经纬度解析地址
}