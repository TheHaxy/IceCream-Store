import React, {BaseSyntheticEvent, useEffect, useState} from 'react';

import signUpClasses from "./SignUp.module.scss"
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import closeIcon from "../../assets/Close.svg"
import {ObjectTyped} from "object-typed";

import {FormStateTypes} from "../../mockdata/validationPatterns"
import {useDispatch} from "react-redux";
import {signUpAction} from "../../store/action";
import {UserType} from "../../store/actionTypes";

const SignUp = ({
                    signUpState,
                    setSignUpState,
                    setSignInState
                }: { signUpState: boolean, setSignUpState: any, setSignInState: any }) => {
    const dispatch = useDispatch()
    const [formState, setFormState] = useState<FormStateTypes | null>(null)
    const [isDisableBtn, setIsDisableBtn] = useState(true)
    const [inputValue, setInputValue] = useState("")
    const validState: Array<boolean> = []

    const signUp = (e: BaseSyntheticEvent) => {
        e.preventDefault()
        const newUser: UserType = {
            name: formState?.text.value,
            email: formState?.email.value,
            password: formState?.password.value
        }
        dispatch(signUpAction(newUser))
        if (localStorage.LOGIN_USER) setSignUpState(false)
    }

    useEffect(() => {
        if (formState) {
            ObjectTyped.keys(formState).map((i) => {
                validState.push(formState[i].isValid)
            })
        }
        Object.keys(validState).map(() => {
            if (validState.filter((state) => !state).length || validState.length < 3) setIsDisableBtn(true);
            else setIsDisableBtn(false);
        })
    }, [formState, validState])

    const openSignIn = () => {
        setSignInState(true)
        setSignUpState(false)
    }
    return (
        <section className={signUpClasses[`background__${signUpState}`]}>
            <section className={signUpClasses[`background__${signUpState}__sign_up_window`]}>
                <h1 className={signUpClasses[`background__${signUpState}__sign_up_window__title`]}>Create an
                    account</h1>
                <form className={signUpClasses[`background__${signUpState}__sign_up_window__form`]}>
                    <img
                        src={closeIcon}
                        alt="Close Window"
                        className={signUpClasses[`background__${signUpState}__sign_up_window__form__close_icon`]}
                        onClick={() => setSignUpState(false)}
                    />
                    <Input
                        name="Name"
                        type="text"
                        placeholder="Your name"
                        formState={formState}
                        setFormState={setFormState}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                    />
                    <Input
                        name="Email"
                        type="email"
                        placeholder="Your email"
                        formState={formState}
                        setFormState={setFormState}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                    />
                    <Input
                        name="Password"
                        type="password"
                        placeholder="Enter your password"
                        formState={formState}
                        setFormState={setFormState}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                    />
                    <Button
                        location="sign"
                        text="Register"
                        image=""
                        onClick={(e) => signUp(e)}
                        isDisabled={isDisableBtn}
                    />
                </form>
                <div className={signUpClasses[`background__${signUpState}__sign_up_window__subtitle`]}>
                    <p>Do you already have an account?</p>
                    <span
                        className={signUpClasses[`background__${signUpState}__sign_up_window__subtitle__link`]}
                        onClick={() => openSignIn()}>Sing in</span>
                </div>
            </section>
        </section>
    );
};

export default SignUp;