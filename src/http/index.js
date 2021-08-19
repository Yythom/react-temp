import { hideLoading, showLoading, showToast } from '@/utils/Toast'
import axios from 'axios'
import { baseURL, timeout } from './config'

// let pending = []; //声明一个数组用于存储每个请求的取消函数和axios标识
// let removePending = (config) => {
//     // console.log(config);
//     for (let i in pending) {
//         if (pending[i].url === axios.defaults.baseURL + config.url) { //在当前请求在数组中存在时执行取消函数
//             pending[i].f(); //执行取消操作
//             console.log(pending[i].url);
//         }
//     }
// }

function request(config) {
    showLoading();
    const instance = axios.create({
        baseURL,
        timeout,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJtZXNzYWdlIjp7InNob3BfYWNjb3VudF9pZCI6IjEiLCJ0b2tlbl9mbGFnIjoiUHpQaFkzeHlCeDdYb0lTayJ9LCJleHAiOjE2MzE4ODg5OTF9.wwHqvuAOiTcH8Mkm67ax3WlfmH1Mucg9Fdouybfmne0',
        }
    })

    //! 数据过滤
    instance.interceptors.response.use(res => {
        return res.data
    })

    //请求拦截
    instance.interceptors.request.use(function (res) {
        // removePending(config); //在一个axios发送前执行一下判定操作，在removePending中执行取消操作
        /**
         * @addToken
         */
        return res
    }, function (error) {

        return Promise.reject(error)
    })

    // 此处封装一层捕捉错误
    return new Promise((resolve, reject) => {
        instance(config).then(res => {
            hideLoading()
            if (res.code != '0') {
                showToast.message(res.msg, 'error')
                resolve(false)
            } else {
                resolve(res.result || res.data)
            }

        }).catch(err => {
            hideLoading();
            if (err.response) {


            }
            resolve(false);
        })
    })
}
export default request;
