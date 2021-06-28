import { combineReducers } from '@reduxjs/toolkit'

import tabSlice from '@/pages/custom-tab-bar/store/slice'

import demoSlice from './demoSlice'
import userSlice from './userSlice'
import localSlice from './locationSlice'


/**
 * 合并reducers
 */
const reducers = {
    tabSlice,
    userSlice,
    localSlice,
    demoSlice,
}

const reducer = combineReducers(reducers)
export default reducer;