/* eslint-disable no-unused-vars */
// import * as actionType from './contants'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getLocal } from '../utils/uitls';
import { actions as testActions } from './demo'
/**
 * 初始化数据
 */
const initialState = {
    location: getLocal('location') || null,
}
/**
 * reducers
 */
const reducers = {
    setLocationAction: (state, action) => {
        console.log(action.payload);
        state.location = action.payload;
    },
}

/**
 * 监听处理state
 */
const extraReducers = {
    [testActions.test](state, payload) {  // 当test触发的时候 会同时触发关联
        console.log('同时触发了 ，locationStore');
    },
};

const localSlice = createSlice({
    name: 'location',
    initialState,
    reducers,
    extraReducers,
})


export const actions = { // action.setLocationAction()
    ...localSlice.actions,

};
export default localSlice.reducer; // 切片reducer 