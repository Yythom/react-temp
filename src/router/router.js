import Demo from '@/pages/demo/index'


let BaseUrl = '/demo';

let router = () => {
    return {
        demo: {
            url: BaseUrl,
            desc: '主页',
            page: Demo
        },
    }
}
export default router();