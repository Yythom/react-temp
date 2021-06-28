import { createSlice } from '@reduxjs/toolkit'

/**
 * 初始化数据
 */
const initialState = {
    // active: 0,
}

/**
 * reducers
 */
const reducers = {
    name: (state, action) => {
        // state.active = action.payload
    },
}


const nameSlice = createSlice({
    name: 'name',
    initialState,
    reducers,
})

export const actions = nameSlice.actions;
export default nameSlice.reducer;