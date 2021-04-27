/* eslint-disable no-unused-vars */
// import * as actionType from './contants'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getLocal } from '../utils/uitls';



/**
 * 初始化数据
 */
const initialState = {
    userInfo: getLocal('info') || {},
}
/**
 * reducers
 */
const reducers = {
    clear: (state, action) => {
        state.userInfo = {};
        console.log(state, '---------------------- clear');
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


        return data
    }
)

/**
 * 其它reducers，异步及其公共recuders
 * @param {*} builder 
 */
const extraReducers = builder => {
    builder.addCase(changeTokenActionAsync.fulfilled, (state, action) => {
        state.userInfo = action.payload
    });
    builder.addCase(userUpdata.fulfilled, (state, action) => {
        state.userInfo = { ...action.payload }
    })
}
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