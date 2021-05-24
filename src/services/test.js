import request from '../http/index'


const getTestList = async (data) => {
    const result = await request({
        method: 'post',
        url: '/hb/v1/home/online',
        data: { area: '510107', shop_name: '', brand: '', page: 1, pageSize: 10, ...data, },
    })
    return result;
}


export {
    getTestList,
}

