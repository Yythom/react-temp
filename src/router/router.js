import CreatePage from '@/pages/create_page/index'

const BaseUrl = '/demo';

const router = () => {
    return {
        CreatePage: {
            url: '/',
            desc: '创建页面',
            page: CreatePage
        },
    }
}
export default router();