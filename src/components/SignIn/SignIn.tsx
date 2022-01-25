import React from 'react';

import signInClasses from "./SignIn.module.scss"
import closeIcon from "../../assets/Close.svg";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const SignIn = ({
                    setSignUpState,
                    signInState,
                    setSignInState
                }: { setSignUpState: any, signInState: string, setSignInState: any }) => {

    const signIn = () => {

    }

    const openSignUp = () => {
        setSignUpState("open")
        setSignInState("closed")
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
                        onClick={() => setSignInState("closed")}
                    />
                    <Input name="Email" type="email" placeholder="Your email"/>
                    <Input name="Password" type="password" placeholder="Enter your password"/>
                    <Button location="sign" text="Sign in" image="" onClick={() => signIn()}/>
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