import { combineReducers } from '@reduxjs/toolkit'
import demo from './demo'
import userReducer from './userStore'
import localReducer from './locationStore'


/**
 * 合并reducers
 */
const reducers = {
    userStore: userReducer,
    localStore: localReducer,
    demo: demo,
}

const reducer = combineReducers(reducers)
export default reducer;