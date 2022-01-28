import { SIGN_IN, ActionType, LOG_OUT } from "./actionTypes";
import {initialState, InitStateType} from "./state";

const exportToStorage = (key: string, state: object) => {
    return localStorage.setItem(key, JSON.stringify(state))
}

const defaultState: InitStateType = initialState

export const loginReducer = (state = defaultState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "SIGN_IN":
            state.loginUser = action.payload
                exportToStorage("LOGIN_USER", action.payload)
                return state

        case "LOG_OUT":
            state.loginUser = {}
            state.cart = []
            localStorage.removeItem("LOGIN_USER")
            return state

        default:
            return state

    }
}