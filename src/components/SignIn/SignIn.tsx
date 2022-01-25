import React, {BaseSyntheticEvent, useEffect, useState} from 'react';

import signInClasses from "./SignIn.module.scss"
import closeIcon from "../../assets/Close.svg";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import {useDispatch} from "react-redux";
import {FormStateTypes} from "../../mockdata/validationPatterns";
import {signInAction} from "../../store/action";
import {UserType} from "../../store/actionTypes";
import {ObjectTyped} from "object-typed";


const SignIn = ({
                    setSignUpState,
                    signInState,
                    setSignInState,
                }: { setSignUpState: any, signInState: boolean, setSignInState: any, children?: any }) => {
    const dispatch = useDispatch()
    const [formState, setFormState] = useState<FormStateTypes | null>(null)
    const [inputValue, setInputValue] = useState("")
    const [isDisableBtn, setIsDisableBtn] = useState(true)
    const validState: Array<boolean> = []

    const signIn = (e: BaseSyntheticEvent) => {
        console.log(formState)
        e.preventDefault()
        const thisUser: UserType = {
            email: formState?.email.value,
            password: formState?.password.value
        }
        dispatch(signInAction(thisUser))
        if (localStorage.LOGIN_USER) setSignInState(false)
    }

    const openSignUp = () => {
        setSignUpState(true)
        setSignInState(false)
    }

    useEffect(() => {
        if (formState) {
            ObjectTyped.keys(formState).map((i) => {
                validState.push(formState[i].isValid)
            })
        }
        Object.keys(validState).map(() => {
            if (validState.filter((state) => !state).length || validState.length < 2) setIsDisableBtn(true);
            else setIsDisableBtn(false);
        })
    }, [formState, validState])

    return (
        <section className={signInClasses[`background__${signInState}`]}>
            <section className={signInClasses[`background__${signInState}__sign_up_window`]}>
                <h1 className={signInClasses[`background__${signInState}__sign_up_window__title`]}>Log in to your
                    account</h1>
                <form className={signInClasses[`background__${signInState}__sign_up_window__form`]}>
                    <img
                        src={closeIcon}
                        alt="Close Window"
                        className={signInClasses[`background__${signInState}__sign_up_window__form__close_icon`]}
                        onClick={() => setSignInState(false)}
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
                        text="Sign in"
                        image=""
                        onClick={(e) => signIn(e)}
                        isDisabled={isDisableBtn}
                    />
                </form>
                <div className={signInClasses[`background__${signInState}__sign_up_window__subtitle`]}>
                    <pre>No account? </pre>
                    <span
                        className={signInClasses[`background__${signInState}__sign_up_window__subtitle__link`]}
                        onClick={() => openSignUp()}>Create one</span>
                </div>
            </section>
        </section>
    );
};

export default SignIn;