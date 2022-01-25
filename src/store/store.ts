import {combineReducers, createStore} from "redux";
import {cartReducer} from "./cartReducer";
import {catalogReducer} from "./catalogReducer";
import {signInReducer} from "./signInReducer";

const rootReducer = combineReducers({cartReducer, catalogReducer, signInReducer})

const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>

export default store