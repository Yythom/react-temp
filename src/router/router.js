import Rich from '@/pages/edit-rich/index'
import Tiny from '@/pages/edit-rich/tinymce'
import Jodit from '@/pages/edit-rich/JoditEditor'
import Wang from '@/pages/edit-rich/wang'
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
        tiny: {
            url: '/tiny',
            desc: '富文本',
            page: Tiny
        },
        Jodit: {
            url: '/jod',
            desc: '富文本',
            page: Jodit
        },
        Wang: {
            url: '/wang',
            desc: '富文本',
            page: Wang
        },
    }
}
export default router();