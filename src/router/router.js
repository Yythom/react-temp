import Rich from '@/pages/edit-rich/index'
import Dnd from '@/pages/dnd/index'
const BaseUrl = '/demo';

const router = () => {
    return {
        Dnd: {
            url: '/',
            desc: '富文本',
            page: Dnd
        },
        rich: {
            url: '/rich',
            desc: '富文本',
            page: Rich
        },
    }
}
export default router();