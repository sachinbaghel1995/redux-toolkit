// import { configure } from "@testing-library/react"
// import { createStoreHook } from "react-redux"
// import { configureStore, createStore } from "@reduxjs/toolkit"
// import { legacy_createStore as createStore} from 'redux'
import { legacy_createStore as createStore,legacy_createStore} from 'redux'
const initialState={counter:0,showCounter:true}
const counterReducer=(state=initialState,action)=>{
    if(action.type==='increment'){
        return {
            counter:state.counter+1,
            showCounter:state.showCounter
        }
        
    }
    if(action.type==='decrement'){
        return {
            counter:state.counter-1,
            showCounter:state.showCounter
        }
    }
    if(action.type==='increase'){
        return {
            counter:state.counter+action.amount,
            showCounter:state.showCounter
        }
    }
    if(action.type==='decrease'){
        return {
            counter:state.counter-action.amount,
            showCounter:state.showCounter
        }
    }
    if(action.type==='toggle'){
        return {
            counter:state.counter-action.amount,
            showCounter:!state.showCounter
        }
    }
    return state
}
const store=legacy_createStore(counterReducer)


export default store