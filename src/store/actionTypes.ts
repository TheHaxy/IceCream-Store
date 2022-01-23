import {marketStorage} from "../mockdata/marketStorage";

export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const LOAD_MARKET = "LOAD_MARKET"

export type ProductCard = { name: string, text: string, id: string, price: number, image: string }

export type CartActionType = CartActionMapTypes[keyof CartActionMapTypes]

export type CartActionMapTypes = {
    [ADD_TO_CART]: {
        type: typeof ADD_TO_CART,
        payload: ProductCard
    }
    [REMOVE_FROM_CART]: {
        type: typeof REMOVE_FROM_CART,
        payload: ProductCard
    }
    [LOAD_MARKET]: {
        type: typeof LOAD_MARKET,
        payload: typeof marketStorage
    }
}