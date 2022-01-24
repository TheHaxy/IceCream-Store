import {catalogStorage} from "../mockdata/catalogStorage";

export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const LOAD_CATALOG = "LOAD_CATALOG"

export type ProductCardType = { name: string, text: string, id: string, price: number, image: string }

export type CartActionType = CartActionMapTypes[keyof CartActionMapTypes]

export type CartActionMapTypes = {
    [ADD_TO_CART]: {
        type: typeof ADD_TO_CART,
        payload: ProductCardType
    }
    [REMOVE_FROM_CART]: {
        type: typeof REMOVE_FROM_CART,
        payload: ProductCardType
    }
    [LOAD_CATALOG]: {
        type: typeof LOAD_CATALOG,
        payload: typeof catalogStorage
    }
}