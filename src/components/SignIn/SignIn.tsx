import React, {BaseSyntheticEvent, useState} from 'react';

import signInClasses from "./SignIn.module.scss"
import closeIcon from "../../assets/Close.svg";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import {useDispatch} from "react-redux";
import {FormStateTypes} from "../../mockdata/validationPatterns";


const SignIn = ({
                    setSignUpState,
                    signInState,
                    setSignInState,
                }: { setSignUpState: any, signInState: boolean, setSignInState: any, children?: any }) => {
    const [formState, setFormState] = useState<FormStateTypes | null>(null)
    const [inputValue, setInputValue] = useState("")
    const signIn = (e: BaseSyntheticEvent) => {
        e.preventDefault()
        console.log('=======>formState', formState)
    }

    const openSignUp = () => {
        setSignUpState(true)
        setSignInState(false)
    }
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