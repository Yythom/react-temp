import Demo from '@/pages/demo/index'
import CreatePage from '@/pages/create_page/index'

const BaseUrl = '/demo';

const router = () => {
    return {
        demo: {
            url: BaseUrl,
            desc: '主页',
            page: Demo
        },
        CreatePage: {
            url: '/',
            desc: '创建页面',
            page: CreatePage
        },
    }
}
export default router();