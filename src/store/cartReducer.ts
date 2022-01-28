import {
  ADD_TO_CART,
  ActionType,
  REMOVE_FROM_CART,
  UserType,
} from "./actionTypes";
import { initialState, InitStateType } from "./state";

const defaultState: InitStateType = initialState;

const exportToStorage = (key: string, state: Object) => {
  return localStorage.setItem(key, JSON.stringify(state));
};

export const cartReducer = (
  state = defaultState,
  action: ActionType
): InitStateType => {
  switch (action.type) {
    case ADD_TO_CART:
      const thisProduct = state.loginUser.cart
        ? state.loginUser.cart.find(
            (product) => product.id === action.payload.id
          )
        : "";
      if (thisProduct && thisProduct.sum && action.payload.sum) {
        const thisUser = state.loginUser;
        thisUser.cart = state.loginUser.cart && [...state.loginUser.cart];
        exportToStorage("LOGIN_USER", thisUser);
        const allUsers = JSON.parse(localStorage.getItem("USERS_STORAGE") || "[]");
        allUsers.map((user: UserType) => {
          return user.email === thisUser.email && [(user.cart = thisUser.cart)];
        });
        exportToStorage("USERS_STORAGE", allUsers);
        return state;
      } else {
        const thisUser = state.loginUser;
        thisUser.cart = state.loginUser.cart && [...state.loginUser.cart, action.payload];
        exportToStorage("LOGIN_USER", thisUser);
        const allUsers = JSON.parse(localStorage.getItem("USERS_STORAGE") || "[]");
        allUsers.map((user: UserType) => {
          return user.email === thisUser.email && [(user.cart = thisUser.cart)];
        });
        exportToStorage("USERS_STORAGE", allUsers);
        return { ...state, cart: [...state.cart, action.payload] };
      }

    case REMOVE_FROM_CART:
      state.loginUser.cart =
        state.loginUser.cart &&
        state.loginUser.cart.filter(
          (product) => product.id !== action.payload.id
        );
      exportToStorage("LOGIN_USER", state.loginUser);
      const allUsers = JSON.parse(localStorage.getItem("USERS_STORAGE") || "[]")
      allUsers.map((user: UserType) => {
        return (
          user.email === state.loginUser.email && [
            (user.cart = state.loginUser.cart),
          ]
        );
      });
      exportToStorage("USERS_STORAGE", allUsers);
      state.loginUser.cart &&
        state.loginUser.cart.filter(
          (product) => product.id !== action.payload.id
        );
      return state;
    default:
      return state;
  }
};
