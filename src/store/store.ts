import {combineReducers, createStore} from "redux";
import {cartReducer} from "./cartReducer";
import {marketReducer} from "./marketReducer";

const store = createStore(combineReducers({ cartReducer, marketReducer }))

export default store