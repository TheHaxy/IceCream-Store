import {CartActionType, LOAD_MARKET, ProductCard} from "./actionTypes";
import {marketStorage} from "../mockdata/marketStorage";

localStorage.setItem("MARKET_STORAGE", JSON.stringify(marketStorage))

const defaultState: Array<ProductCard> = JSON.parse(localStorage.getItem("MARKET_STORAGE") || "[]")

export const marketReducer = (state = defaultState, action: CartActionType): Array<ProductCard> => {
    switch (action.type) {
        case LOAD_MARKET:
            localStorage.setItem("MARKET_STORAGE", JSON.stringify(state))
            return state

        default: return state
    }
}