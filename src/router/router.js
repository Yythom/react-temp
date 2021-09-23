
import Dnd from '@/pages/dnd/index'
// eslint-disable-next-line no-unused-vars
const BaseUrl = '/demo';

const router = () => {
    return {
        Dnd: {
            url: '/',
            desc: '富文本',
            page: Dnd
        },
    }
}
export default router();