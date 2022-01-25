import {
    ADD_TO_CART,
    CartActionMapTypes,
    LOAD_CATALOG,
    ProductCardType,
    REMOVE_FROM_CART,
    UserType,
    SIGN_IN,
} from "./actionTypes";

export function addToCardAction(payload: ProductCardType): CartActionMapTypes["ADD_TO_CART"] {
    return  {
        type: ADD_TO_CART,
        payload
    }
}

export function removeFromCartAction(payload: ProductCardType): CartActionMapTypes["REMOVE_FROM_CART"] {
    return  {
        type: REMOVE_FROM_CART,
        payload
    }
}

export function loadCatalogAction(payload: Array<ProductCardType>): CartActionMapTypes["LOAD_CATALOG"] {
    return {
        type: LOAD_CATALOG,
        payload
    }
}

export function signInAction(payload: UserType): CartActionMapTypes["SIGN_IN"] {
    return {
        type: SIGN_IN,
        payload
    }
}