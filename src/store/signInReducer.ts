import {UserType, CartActionType, SIGN_UP, SIGN_IN} from "./actionTypes";

const exportToStorage = (key: string, state: any) => {
    return localStorage.setItem(key, JSON.stringify(state))
}

const defaultState: Array<UserType> = JSON.parse(localStorage.getItem("USERS_STORAGE") || "[]")

export const signInReducer = (state = defaultState, action: CartActionType): Array<UserType> => {
    switch (action.type) {
        case "SIGN_UP":
            if (state.find((user) => user.email === action.payload.email)) return [...state]
            else{
                exportToStorage("USERS_STORAGE", [...state, action.payload])
                exportToStorage("LOGIN_USER", action.payload)
                return [...state, action.payload]
            }

        case "SIGN_IN":
            if (state.find((user) => user.email === action.payload.email)) {
                exportToStorage("LOGIN_USER", action.payload)
                return [...state]
            }
            else return [...state]

        default:
            return [...state]
    }
}