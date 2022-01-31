import {ActionType, LOAD_CATALOG, ProductCardType} from "./actionTypes";
import {initialState} from "./state";

const defaultState: Array<ProductCardType> = initialState.catalog

export const catalogReducer = (state = defaultState, action: ActionType): (ProductCardType | Array<ProductCardType>)[] => {
    switch (action.type) {
        case LOAD_CATALOG:
            localStorage.setItem("CATALOG_STORAGE", JSON.stringify(action.payload))
            return [...action.payload]

        default:
            return state
    }
}