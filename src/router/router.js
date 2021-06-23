import Demo from '@/pages/demo/index'
import Rich from '@/pages/edit-rich/index'
const BaseUrl = '/demo';

const router = () => {
    return {
        demo: {
            url: BaseUrl,
            desc: '主页',
            page: Demo
        },
        rich: {
            url: '/',
            desc: '富文本',
            page: Rich
        },
    }
}
export default router();