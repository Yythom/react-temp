console.log(process.env);

export const baseURL = process.env.NODE_ENV === 'development'
    // ? 'http://49.234.41.182:8701'
    ? 'https://api-malicake-mall.fosuss.com'
    : process.env.HOSTURL || 'http://localhost:8701';
//接口地址
export const timeout = 10000                    //请求延迟
