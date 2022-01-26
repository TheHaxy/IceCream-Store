import {ADD_TO_CART, ActionType, ProductCardType, REMOVE_FROM_CART, UserType} from "./actionTypes";

const defaultState: Array<ProductCardType> = localStorage.LOGIN_USER ? JSON.parse(localStorage.getItem("LOGIN_USER") || "").cart : ""

const exportToStorage = (key: string, state: any) => {
    return localStorage.setItem(key, JSON.stringify(state))
}

export const cartReducer = (state = defaultState, action: ActionType): Array<ProductCardType> => {
    switch (action.type) {
        case ADD_TO_CART:
            const thisProduct = localStorage.LOGIN_USER ? state.find((product) => product.id === action.payload.id) : ""
            if (thisProduct && thisProduct.sum && action.payload.sum) {
                thisProduct.sum += action.payload.sum
                const thisUser = JSON.parse(localStorage.getItem("LOGIN_USER") || "")
                thisUser.cart = [...state]
                exportToStorage("LOGIN_USER", thisUser)
                const allUsers = JSON.parse(localStorage.USERS_STORAGE)
                allUsers.map((user: UserType) => {
                    return (
                        user.email === thisUser.email && [
                            user.cart = thisUser.cart
                        ]
                    )
                })
                localStorage.setItem("USERS_STORAGE", JSON.stringify(allUsers))
                return [...state]
            } else {
                const thisUser = JSON.parse(localStorage.getItem("LOGIN_USER") || "")
                thisUser.cart = [...state, action.payload]
                exportToStorage("LOGIN_USER", thisUser)
                const allUsers = JSON.parse(localStorage.USERS_STORAGE)
                allUsers.map((user: UserType) => {
                    return (
                        user.email === thisUser.email && [
                            user.cart = thisUser.cart
                        ]
                    )
                })
                localStorage.setItem("USERS_STORAGE", JSON.stringify(allUsers))
                return [...state, action.payload]
            }
        case REMOVE_FROM_CART:
            const thisUser = JSON.parse(localStorage.getItem("LOGIN_USER") || "")
            thisUser.cart = state.filter(product => product.id !== action.payload.id)
            exportToStorage("LOGIN_USER", thisUser)
            const allUsers = JSON.parse(localStorage.USERS_STORAGE)
            allUsers.map((user: UserType) => {
                return (
                    user.email === thisUser.email && [
                        user.cart = thisUser.cart
                    ]
                )
            })
            localStorage.setItem("USERS_STORAGE", JSON.stringify(allUsers))
            return state.filter(product => product.id !== action.payload.id)

        default:
            return state
    }
}

