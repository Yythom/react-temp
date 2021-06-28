/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
// import * as actionType from './contants'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

/**
 * 初始化数据
 */
const initialState = {
    test: 0
}
/**
 * reducers
 */
const reducers = {
    test: (state, action) => {
        state.test = action.payload;
    }
}

// 登入
const testAsync = createAsyncThunk(
    'user/testAsync',
    async (data, thunkAPI) => { // data 微信获取到的信息
        console.log(data, '异步接收到的data');

        return data
    }
)

/**
 * @param {*} builder 
 * 监听异步完成处理state
 */
const extraReducers = {  // 两种写法
    [testAsync.fulfilled](state, action) {
        console.log(action.payload, 'state接受到的payload');
        state.userInfo = action.payload
    },
}

// const extraReducers = builder => {
//     builder.addCase(testAsync.fulfilled, (state, action) => {
//         console.log(action.payload, 'payload');
//         state.userInfo = action.payload
//     });
// }

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers,
    extraReducers,
})


export const actions = {
    ...testSlice.actions,
    testAsync,
};
export default testSlice.reducer;