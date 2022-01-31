export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const LOAD_CATALOG = "LOAD_CATALOG";
export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";
export const LOG_OUT = "LOG_OUT";
export const OPEN_SIGN_IN_MODAL = "OPEN_SIGN_IN_MODAL";
export const OPEN_SIGN_UP_MODAL = "OPEN_SIGN_UP_MODAL";

export type ProductCardType = {
  name: string;
  text: string;
  id: string;
  price: number;
  image: string;
  sum?: number;
  quantity: number;
};
export type UserType = {
  name?: string;
  email?: string;
  password?: string;
  cart?: Array<ProductCardType>;
};

export type ActionType = ActionMapTypes[keyof ActionMapTypes];

export type ActionMapTypes = {
  [ADD_TO_CART]: {
    type: typeof ADD_TO_CART;
    payload: ProductCardType;
  };
  [REMOVE_FROM_CART]: {
    type: typeof REMOVE_FROM_CART;
    payload: ProductCardType;
  };
  [LOAD_CATALOG]: {
    type: typeof LOAD_CATALOG;
    payload: Array<ProductCardType>;
  };
  [SIGN_UP]: {
    type: typeof SIGN_UP;
    payload: UserType;
  };
  [SIGN_IN]: {
    type: typeof SIGN_IN;
    payload: UserType;
  };
  [LOG_OUT]: {
    type: typeof LOG_OUT;
    payload: UserType;
  };
  [OPEN_SIGN_IN_MODAL]: {
    type: typeof OPEN_SIGN_IN_MODAL;
    payload: boolean;
  };
  [OPEN_SIGN_UP_MODAL]: {
    type: typeof OPEN_SIGN_UP_MODAL;
    payload: boolean;
  };
};
