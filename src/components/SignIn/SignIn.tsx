import React, { BaseSyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FormStateTypes } from "../../mockdata/validationPatterns";
import {
  openSignInModalAction,
  openSignUpModalAction,
  signInAction,
} from "../../store/action";
import { UserType } from "../../store/actionTypes";
import { ObjectTyped } from "object-typed";
import { RootState } from "../../store/store";

import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import signInClasses from "./SignIn.module.scss";
import closeIcon from "../../assets/Close.svg";

const SignIn = () => {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState<FormStateTypes | null>(null);
  const [isDisableBtn, setIsDisableBtn] = useState(true);
  const [validState, setValidState] = useState<Array<boolean>>([])
  const allUsers: Array<UserType> = useSelector(
    (state: RootState) => state.signUpReducer
  );

  useEffect(() => {
    if (formState) {
      ObjectTyped.keys(formState).map((i) => {
        formState[i] && setValidState([...validState, !!formState[i]?.isValid]);
      });
    }
    Object.keys(validState).map(() => {
      if (validState.filter((state) => !state).length || validState.length < 2)
        setIsDisableBtn(true);
      else setIsDisableBtn(false);
    });
  }, [formState, validState]);

  const signIn = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const thisUser: UserType | undefined = allUsers.find(
      (user) =>
          formState?.email && user.email === formState?.email.value &&
          formState?.password && user.password === formState?.password.value
    );
    if (thisUser) {
      dispatch(signInAction(thisUser));
      dispatch(openSignInModalAction(false));
    }
  };

  const openSignUp = () => {
    dispatch(openSignInModalAction(false));
    dispatch(openSignUpModalAction(true));
  };

  return (
    <section className={signInClasses[`background`]}>
      <section className={signInClasses[`background__sign_up_window`]}>
        <h1 className={signInClasses[`background__sign_up_window__title`]}>
          Log in to your account
        </h1>
        <form className={signInClasses[`background__sign_up_window__form`]}>
          <img
            src={closeIcon}
            alt="Close Window"
            className={
              signInClasses[`background__sign_up_window__form__close_icon`]
            }
            onClick={() => dispatch(openSignInModalAction(false))}
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
            text="Sign in"
            image=""
            onClick={(e) => signIn(e)}
            isDisabled={isDisableBtn}
          />
        </form>
        <div className={signInClasses[`background__sign_up_window__subtitle`]}>
          <pre>No account? </pre>
          <span
            className={
              signInClasses[`background__sign_up_window__subtitle__link`]
            }
            onClick={() => openSignUp()}
          >
            Create one
          </span>
        </div>
      </section>
    </section>
  );
};

export default SignIn;
