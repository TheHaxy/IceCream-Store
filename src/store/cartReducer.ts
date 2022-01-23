import {ADD_TO_CART, CartActionType, ProductCard, REMOVE_FROM_CART} from "./actionTypes";


const defaultState: Array<ProductCard> = JSON.parse(localStorage.getItem("PRODUCTS_STORAGE") || "[]")

const exportToStorage = (key: string, state: any) => {
    return localStorage.setItem(key, JSON.stringify(state))
}

export const cartReducer = (state = defaultState, action: CartActionType): Array<ProductCard> => {
    switch (action.type) {
        case ADD_TO_CART:
            exportToStorage("PRODUCTS_STORAGE", [...state, action.payload])
            return [...state, action.payload]
        case REMOVE_FROM_CART:
            exportToStorage("PRODUCTS_STORAGE", state.filter(product => product.id !== action.payload.id))
            return state.filter(product => product.id !== action.payload.id)
        default: return state
    }
}

