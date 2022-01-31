import { ActionType } from "./actionTypes";

interface modalType {
  signIn: boolean;
  signUp: boolean;
}

const defaultState: modalType = { signIn: false, signUp: false };

export const modalReducer = (
  state = defaultState,
  action: ActionType
): modalType => {
  switch (action.type) {
    case "OPEN_SIGN_IN_MODAL":
      state.signIn = action.payload;
      return state;
    case "OPEN_SIGN_UP_MODAL":
      state.signUp = action.payload;
      return state;

    default:
      return state;
  }
};
