import {
    ADD_TO_CART,
    ActionMapTypes,
    LOAD_CATALOG,
    ProductCardType,
    REMOVE_FROM_CART,
    UserType,
    SIGN_UP,
    SIGN_IN,
    LOG_OUT,
} from "./actionTypes";

export function addToCardAction(payload: ProductCardType): ActionMapTypes["ADD_TO_CART"] {
    return  {
        type: ADD_TO_CART,
        payload
    }
}

export function removeFromCartAction(payload: ProductCardType): ActionMapTypes["REMOVE_FROM_CART"] {
    return  {
        type: REMOVE_FROM_CART,
        payload
    }
}

export function loadCatalogAction(payload: Array<ProductCardType>): ActionMapTypes["LOAD_CATALOG"] {
    return {
        type: LOAD_CATALOG,
        payload
    }
}

export function signUpAction(payload: UserType): ActionMapTypes["SIGN_UP"] {
    return {
        type: SIGN_UP,
        payload
    }
}

export function signInAction(payload: UserType): ActionMapTypes["SIGN_IN"] {
    return {
        type: SIGN_IN,
        payload
    }
}

export function logOutAction(payload: UserType): ActionMapTypes["LOG_OUT"] {
    return {
        type: LOG_OUT,
        payload
    }
}