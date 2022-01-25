import React from 'react';

import signUpClasses from "./SignUp.module.scss"
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

import closeIcon from "../../assets/Close.svg"

const SignUp = ({
                    signUpState,
                    setSignUpState,
                    setSignInState
                }: { signUpState: string, setSignUpState: any, setSignInState: any }) => {

    const signUp = () => {

    }

    const openSignIn = () => {
        setSignInState("open")
        setSignUpState("closed")
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
                        onClick={() => setSignUpState("closed")}
                    />
                    <Input name="Name" type="text" placeholder="Your name"/>
                    <Input name="Email" type="email" placeholder="Your email"/>
                    <Input name="Password" type="password" placeholder="Enter your password"/>
                    <Button location="sign" text="Register" image="" onClick={() => signUp()}/>
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