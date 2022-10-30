import {configureStore,combineReducers} from '@reduxjs/toolkit'
// import { configureStore } from '@reduxjs/toolkit';
// import { combineReducers } from 'redux';
import counterReducer from './counterSlice'
import productReducer from './productSlice'



//Create reducer

const rootReducer = combineReducers({
    counter:counterReducer,
    products:productReducer
})

//create store
const store = configureStore({
    reducer:rootReducer,
})
export default store;