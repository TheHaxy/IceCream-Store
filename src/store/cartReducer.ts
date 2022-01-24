import {ADD_TO_CART, CartActionType, ProductCardType, REMOVE_FROM_CART} from "./actionTypes";


const defaultState: Array<ProductCardType> = JSON.parse(localStorage.getItem("CART_STORAGE") || "[]")

const exportToStorage = (key: string, state: any) => {
    return localStorage.setItem(key, JSON.stringify(state))
}

export const cartReducer = (state = defaultState, action: CartActionType): Array<ProductCardType> => {
    switch (action.type) {
        case ADD_TO_CART:
            exportToStorage("CART_STORAGE", [...state, action.payload])
            const thisProduct = state.find((product) => product.id === action.payload.id)
            if (thisProduct) {
                thisProduct.sum! += action.payload.sum!
                return [...state]
            }
            return [...state, action.payload]
        case REMOVE_FROM_CART:
            exportToStorage("CART_STORAGE", state.filter(product => product.id !== action.payload.id))
            return state.filter(product => product.id !== action.payload.id)
        default: return state
    }
}

