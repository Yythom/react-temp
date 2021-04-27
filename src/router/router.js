import Demo from '../pages/demo/index.jsx'


let BaseUrl = '/hb';

let router = () => {
    return {
        demo: {
            url: '/demo',
            desc: '主页',
            page: Demo
        },
    }
}
export default router();