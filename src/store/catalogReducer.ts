import {CartActionType, LOAD_CATALOG, ProductCardType} from "./actionTypes";

const defaultState: Array<ProductCardType> = JSON.parse(localStorage.getItem("CATALOG_STORAGE") || "[]")

export const catalogReducer = (state = defaultState, action: CartActionType): Array<ProductCardType> => {
    switch (action.type) {
        case LOAD_CATALOG:
            localStorage.setItem("CATALOG_STORAGE", JSON.stringify(action.payload))
            return state

        default: return state
    }
}