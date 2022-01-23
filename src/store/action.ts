import {ADD_TO_CART, CartActionMapTypes, LOAD_MARKET, ProductCard, REMOVE_FROM_CART} from "./actionTypes";

export function addToCardAction(payload: ProductCard): CartActionMapTypes["ADD_TO_CART"] {
    return  {
        type: ADD_TO_CART,
        payload
    }
}

export function removeFromCartAction(payload: ProductCard): CartActionMapTypes["REMOVE_FROM_CART"] {
    return  {
        type: REMOVE_FROM_CART,
        payload
    }
}

export function loadMarketAction(payload: Array<ProductCard>): CartActionMapTypes["LOAD_MARKET"] {
    return {
        type: LOAD_MARKET,
        payload
    }
}