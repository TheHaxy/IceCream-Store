import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ObjectTyped } from "object-typed";
import { FormStateTypes } from "../../mockdata/validationPatterns";
import {
  openSignInModalAction,
  openSignUpModalAction,
  signInAction,
  signUpAction,
} from "../../store/action";
import { UserType } from "../../store/actionTypes";

import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import signUpClasses from "./SignUp.module.scss";
import closeIcon from "../../assets/Close.svg";
import { RootState } from "../../store/store";

const SignUp = () => {
  const dispatch = useDispatch();
  const allUsers: Array<UserType> = useSelector(
    (state: RootState) => state.signUpReducer
  );
  const [formState, setFormState] = useState<FormStateTypes | null>(null);
  const [isDisableBtn, setIsDisableBtn] = useState(true);
  const [validState, setValidState] = useState<Array<boolean>>([])

  useEffect(() => {
    if (formState) {
      ObjectTyped.keys(formState).map((i) => {
        formState[i] && setValidState([...validState, !!formState[i]?.isValid]);
      });
    }
    Object.keys(validState).map(() => {
      if (validState.filter((state) => !state).length || validState.length < 3)
        setIsDisableBtn(true);
      else setIsDisableBtn(false);
    });
  }, [formState, validState]);

  const signUp = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const newUser: UserType = {
      name: formState?.text && formState?.text.value,
      email: formState?.email && formState?.email.value,
      password:formState?.password && formState?.password.value,
      cart: [],
    };
    dispatch(signUpAction(newUser));
    if (!allUsers.find((user) => user.email === newUser.email)) {
      dispatch(openSignUpModalAction(false));
      dispatch(signInAction(newUser));
    }
  };

  const openSignIn = () => {
    dispatch(openSignUpModalAction(false));
    dispatch(openSignInModalAction(true));
  };
  return (
    <section className={signUpClasses[`background`]}>
      <section className={signUpClasses[`background__sign_up_window`]}>
        <h1 className={signUpClasses[`background__sign_up_window__title`]}>
          Create an account
        </h1>
        <form className={signUpClasses[`background__sign_up_window__form`]}>
          <img
            src={closeIcon}
            alt="Close Window"
            className={
              signUpClasses[`background__sign_up_window__form__close_icon`]
            }
            onClick={() => dispatch(openSignUpModalAction(false))}
          />
          <Input
            name="Name"
            type="text"
            placeholder="Your name"
            formState={formState}
            setFormState={setFormState}
          />
          <Input
            name="Email"
            type="email"
            placeholder="Your email"
            formState={formState}
            setFormState={setFormState}
          />
          <Input
            name="Password"
            type="password"
            placeholder="Enter your password"
            formState={formState}
            setFormState={setFormState}
          />
          <Button
            location="sign"
            text="Register"
            image=""
            onClick={(e) => signUp(e)}
            isDisabled={isDisableBtn}
          />
        </form>
        <div className={signUpClasses[`background__sign_up_window__subtitle`]}>
          <p>Do you already have an account?</p>
          <span
            className={
              signUpClasses[`background__sign_up_window__subtitle__link`]
            }
            onClick={() => openSignIn()}
          >
            Sing in
          </span>
        </div>
      </section>
    </section>
  );
};

export default SignUp;
