import { combineReducers } from '@reduxjs/toolkit'

import tarbarReducer from '../pages/custom-tab-bar/store/slice'
import demo from './demo'
import userReducer from './userStore'
import localReducer from './locationStore'


/**
 * 合并reducers
 */
const reducers = {
    tabbar: tarbarReducer,
    userStore: userReducer,
    localStore: localReducer,
    demo: demo,
}

const reducer = combineReducers(reducers)
export default reducer;