import {combineReducers, createStore} from "redux";
import {cartReducer} from "./cartReducer";
import {catalogReducer} from "./catalogReducer";

const rootReducer = combineReducers({ cartReducer, catalogReducer })

const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>

export default store