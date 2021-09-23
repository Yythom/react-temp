/* eslint-disable no-undef */
import request from '../../http';
import Config from './mapConfig';

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
    window.location.href = `${Config.MAP_SERVER_URL}/tools/poimarker?type=0&marker=${map.marker}&key=${Config.LOCATION_KEY}&referer=hb-h5`
    // }
}

const getDetailLocation = async (desc) => {//'腾讯位置服务返回' 位置获取坐标
    const url = `${Config.MAP_SERVER_URL}/ws/geocoder/v1/?address=${desc}&get_poi=1&poi_options=radius=1000&key=${Config.LOCATION_KEY}`;
    const res = await request({
        method: 'GET',
        url,
    });
    const { data } = res;
    if (data.status !== 0 && data.result) {
        console.warn(data.message);
        return null;
    }
    const { result } = data
    const locationInfo = {
        address: Object.values(result.address_components).join(''), // 地址文字
        adcode: result.ad_info.adcode,
        latitude: result.location.lat,
        longitude: result.location.lng,
        name: desc,
        province: result.address_components.province, // 省
        city: result.address_components.city, // 市
        district: result.address_components.district, // 区
        street: result.address_components.street, // 街
    };
    return locationInfo
}


const getNearby = async (latitude, longitude) => {//'腾讯位置服务返回' 坐标获取位置
    const url = `${Config.MAP_SERVER_URL}/ws/geocoder/v1/?location=${latitude},${longitude}&get_poi=1&poi_options=radius=1000&key=${Config.LOCATION_KEY}`;
    const res = await request({
        method: 'GET',
        url,
    });
    const { data } = res;
    if (data.status !== 0 && data.result) {
        console.warn(data.message);
        return null;
    }
    const { result } = data;
    const locationInfo = {
        address: result.address,
        adcode: result.ad_info.adcode,
        latitude,
        longitude,
        name: result.formatted_addresses.recommend,
        province: result.address_component.province, // 省
        city: result.address_component.city, // 市
        district: result.address_component.district, // 区
        street: result.address_component.street, // 街
    };
    return locationInfo;
}


const getLocation = async () => {
    function getPosition() {
        let flag = false;
        return new Promise((resolve, reject) => {
            if (window.location.href.indexOf('https') === -1) { // 当用户为https时候
                if (window.location.href.indexOf('localhost') !== -1) {
                    flag = true;
                } else {
                    reject('请使用https访问获取定位');
                    return
                }
            } else {
                flag = true
            }
            if (!flag) return
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    let latitude = position.coords.latitude
                    let longitude = position.coords.longitude
                    let data = {
                        latitude: latitude,
                        longitude: longitude
                    }
                    resolve(data)
                }, function () {
                    reject(arguments)
                })
            } else {
                reject('你的浏览器不支持当前地理位置信息获取');
            }
        })
    }
    // 获取当前经纬度坐标
    return new new Promise((resolve, reject) => {
        getPosition().then(result => {
            // 返回结果示例：
            // {latitude: 30.318030999999998, longitude: 120.05561639999999}
            // 一般小数点后只取六位，所以用以下代码搞定
            let queryData = {
                latitude: String(result.latitude).match(/\d+\.\d{0,6}/)[0],
                longtitude: String(result.longitude).match(/\d+\.\d{0,6}/)[0],
            }
            // 
            getNearby(Number(queryData.latitude), Number(queryData.longtitude)).then(res => {
                console.log(res);
                if (res) {
                    resolve(res)
                } else resolve(false)
            })
        }).catch(err => {
            console.log(err);
            resolve(false)
        })
    })();

}


export {
    goMap, // 一键导航
    getDetailLocation, // 位置-获取坐标
    getNearby, // 坐标-获取位置
    getLocation, // 当前定位地址详情
}