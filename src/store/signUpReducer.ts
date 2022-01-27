import {UserType, ActionType, SIGN_UP} from "./actionTypes";

const exportToStorage = (key: string, state: any) => {
    return localStorage.setItem(key, JSON.stringify(state))
}

const defaultState: Array<UserType> = JSON.parse(localStorage.getItem("USERS_STORAGE") || "[]")

export const signUpReducer = (state = defaultState, action: ActionType): Array<UserType> => {
    switch (action.type) {
        case "SIGN_UP":
            if (state.find((user) => user.email === action.payload.email)) return [...state]
            else{
                exportToStorage("USERS_STORAGE", [...state, action.payload])
                return [...state, action.payload]
            }
        default:
            return [...state]
    }
}