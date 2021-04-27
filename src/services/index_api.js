import request from '../http/index'




export const getWxConfigs = async (data) => {
    const result = await request({
        method: 'post',
        url: '/official/authorize',
        data,
    })
    return result;
}