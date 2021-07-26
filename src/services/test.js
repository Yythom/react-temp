import request from '../http/index'


const getTestList = async (data) => {
    const result = await request({
        method: 'post',
        url: '/login',
        data: { page: 1, pageSize: 10, ...data, },
    })
    return result;
}


export {
    getTestList,
}

