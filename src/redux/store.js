import {combineReducers, createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import products from './productsDuck'

const rootReducer = combineReducers({
    products
})

export default function (){
    let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
    return store
}