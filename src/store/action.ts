import {
    ActionMapTypes,
    ADD_TO_CART,
    LOAD_CATALOG,
    LOG_OUT,
    OPEN_SIGN_IN_MODAL, OPEN_SIGN_UP_MODAL,
    ProductCardType,
    REMOVE_FROM_CART,
    SIGN_IN,
    SIGN_UP,
    UserType,
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

export function openSignInModalAction(payload: boolean): ActionMapTypes["OPEN_SIGN_IN_MODAL"] {
    return {
        type: OPEN_SIGN_IN_MODAL,
        payload
    }
}

export function openSignUpModalAction(payload: boolean): ActionMapTypes["OPEN_SIGN_UP_MODAL"] {
    return {
        type: OPEN_SIGN_UP_MODAL,
        payload
    }
}