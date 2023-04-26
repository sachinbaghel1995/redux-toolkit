// import { configure } from "@testing-library/react"
// import { createStoreHook } from "react-redux"
// import { configureStore, createStore } from "@reduxjs/toolkit"
// import { legacy_createStore as createStore} from 'redux'
import { legacy_createStore as createStore,legacy_createStore} from 'redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { shallowEqual } from 'react-redux'
const initialState={counter:0,showCounter:true}

const counterSlice=createSlice({
   name:'counter',
   initialState:initialState,
   reducers:{
    increment(state){
state.counter++
    },
    decrement(state){
state.counter--
    },
    increase(state,action){
       state.counter= state.counter+action.payload
    },
    toggleCounter(state){
        state.showCounter=!state.showCounter
    },

   }
})

const store=configureStore({
    reducer:counterSlice.reducer
})
export const counterActions=counterSlice.actions


export default store