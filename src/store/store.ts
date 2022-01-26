import {combineReducers, createStore} from "redux";
import {cartReducer} from "./cartReducer";
import {catalogReducer} from "./catalogReducer";
import {signUpReducer} from "./signUpReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {loginReducer} from "./loginReducer";


export const rootReducer = combineReducers({cartReducer, catalogReducer, signUpReducer, loginReducer})

const store = createStore(rootReducer, composeWithDevTools())

export type RootState = ReturnType<typeof rootReducer>

export default store