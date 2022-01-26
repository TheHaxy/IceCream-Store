import {UserType, SIGN_IN, ActionType, LOG_OUT} from "./actionTypes";

const exportToStorage = (key: string, state: any) => {
    return localStorage.setItem(key, JSON.stringify(state))
}

const defaultState: UserType  = localStorage.LOGIN_USER ? JSON.parse(localStorage.getItem("LOGIN_USER") || "") : ""

export const loginReducer = (state = defaultState, action: ActionType): UserType => {
    switch (action.type) {
        case "SIGN_IN":
                exportToStorage("LOGIN_USER", action.payload)
                return action.payload

        case "LOG_OUT":
            localStorage.removeItem("LOGIN_USER")
            return defaultState

        default:
            return state

    }
}