import Demo from '@/pages/demo/index'
const BaseUrl = '/demo';

const router = () => {
    return {
        demo: {
            url: BaseUrl,
            desc: '主页',
            page: Demo
        },
    }
}
export default router();