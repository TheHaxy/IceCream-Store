export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"
export const LOAD_CATALOG = "LOAD_CATALOG"
export const SIGN_UP = "SIGN_UP"
export const SIGN_IN = "SIGN_IN"

export type ProductCardType = { name: string, text: string, id: string, price: number, image: string, sum?: number, quantity: number }
export type UserType = { name?: any, email: any, password: any }

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
        payload: Array<ProductCardType>
    }
    [SIGN_UP]: {
        type: typeof SIGN_UP,
        payload: UserType
    }
    [SIGN_IN]: {
        type: typeof SIGN_IN,
        payload: UserType
    }
}