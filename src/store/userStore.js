/* eslint-disable no-unused-vars */
// import * as actionType from './contants'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getLocal } from '../utils/uitls';



/**
 * 初始化数据
 */
const initialState = {
    userInfo: getLocal('info') || {},
    test: 0
}
/**
 * reducers
 */
const reducers = {
    clear: (state, action) => {
        state.userInfo = {};
        console.log(state, '---------------------- clear');
    },
    test: (state, action) => {
        state.test = action.payload;
    }
}

// 更新用户信息
const userUpdata = createAsyncThunk(
    'user/user_updata',
    async (data, thunkAPI) => {
        return {}
    }
)

// 登入
const changeTokenActionAsync = createAsyncThunk(
    'user/changeTokenActionAsync',
    async (data, thunkAPI) => { // data 微信获取到的信息
        console.log(data, 'datadata');

        return data
    }
)

/**
 * @param {*} builder 
 * 监听异步完成处理state
 */
const extraReducers = {
    [changeTokenActionAsync.fulfilled](state, action) {
        console.log(action.payload, 'payload');
        state.userInfo = action.payload
    },
    [userUpdata.fulfilled](state, action) {
        state.userInfo = { ...action.payload }
    },
}

// const extraReducers = builder => {
//     builder.addCase(changeTokenActionAsync.fulfilled, (state, action) => {
//         console.log(action.payload, 'payload');
//         state.userInfo = action.payload
//     });
//     builder.addCase(userUpdata.fulfilled, (state, action) => {
//         state.userInfo = { ...action.payload }
//     })
// }

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers,
    extraReducers,
})


export const actions = {
    ...userSlice.actions,
    changeTokenActionAsync,
    userUpdata,
};
export default userSlice.reducer;