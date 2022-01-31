export const patterns: { [char: string]: RegExp } = {
  text: new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.{${2},})`),
  email: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,
  password: new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
  ),
};

export interface FormStateTypes {
  text?: {
    value: string;
    isValid: boolean;
  };
  password?: {
    value: string;
    isValid: boolean;
  };
  email?: {
    value: string;
    isValid: boolean;
  };
}
