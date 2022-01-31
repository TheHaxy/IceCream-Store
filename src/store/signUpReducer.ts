import { UserType, ActionType, SIGN_UP } from "./actionTypes";
import { initialState } from "./state";

const exportToStorage = (key: string, state: object) => {
  return localStorage.setItem(key, JSON.stringify(state));
};

const defaultState: Array<UserType> = initialState.usersStorage;

export const signUpReducer = (
  state = defaultState,
  action: ActionType
): Array<UserType> => {
  switch (action.type) {
    case "SIGN_UP":
      if (state.find((user) => user.email === action.payload.email))
        return [...state];
      else {
        exportToStorage("USERS_STORAGE", [...state, action.payload]);
        return [...state, action.payload];
      }
    default:
      return [...state];
  }
};
