/* eslint-disable no-unused-vars */
// import * as actionType from './contants'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getLocal } from '../utils/uitls';

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
        state.location = action.payload;
    },
}

const localSlice = createSlice({
    name: 'location',
    initialState,
    reducers,
})

export const actions = {
    ...localSlice.actions,
};
export default localSlice.reducer;