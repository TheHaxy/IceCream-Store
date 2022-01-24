import {CartActionType, LOAD_CATALOG, ProductCardType} from "./actionTypes";

const defaultState: Array<ProductCardType> = []

export const catalogReducer = (state = defaultState, action: CartActionType): (ProductCardType | Array<ProductCardType>)[] => {
    switch (action.type) {
        case LOAD_CATALOG:
            localStorage.setItem("CATALOG_STORAGE", JSON.stringify(action.payload))
            return [...action.payload]

        default:
            return state
    }
}