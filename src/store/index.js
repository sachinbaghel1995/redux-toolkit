// import { configure } from "@testing-library/react"
// import { createStoreHook } from "react-redux"
// import { configureStore, createStore } from "@reduxjs/toolkit"
// import { legacy_createStore as createStore} from 'redux'
import { legacy_createStore as createStore,legacy_createStore} from 'redux'
const counterReducer=(state={counter:0},action)=>{
    if(action.type==='increment'){
        return {
            counter:state.counter+1
        }
        
    }
    if(action.type=='decrement'){
        return {
            counter:state.counter-1
        }
    }
    if(action.type=='increase'){
        return {
            counter:state.counter+action.amount
        }
    }
    if(action.type=='decrease'){
        return {
            counter:state.counter-action.amount
        }
    }
    return state
}
const store=legacy_createStore(counterReducer)


export default store