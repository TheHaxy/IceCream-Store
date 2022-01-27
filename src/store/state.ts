import {ProductCardType, UserType} from "./actionTypes";
import {catalogStorage} from "../mockdata/catalogStorage";

export interface InitStateType {
    cart: Array<ProductCardType>,
    catalog: Array<ProductCardType>,
    usersStorage: Array<UserType>,
    loginUser: UserType,
}

export const initialState: InitStateType = {
    cart: localStorage.LOGIN_USER ? JSON.parse(localStorage.getItem("LOGIN_USER") || "").cart : "",
    catalog: localStorage.CATALOG_STORAGE ? JSON.parse(localStorage.getItem("CATALOG_STORAGE") || "") : catalogStorage,
    usersStorage: JSON.parse(localStorage.getItem("USERS_STORAGE") || "[]"),
    loginUser: localStorage.LOGIN_USER ? JSON.parse(localStorage.getItem("LOGIN_USER") || "") : "",
}
