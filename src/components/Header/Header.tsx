import React, {useState, useMemo} from 'react';

import headerClasses from "./Header.module.scss"
import logo from "../../assets/logo.svg"
import cartIcon from "../../assets/cart-icon.svg"
import userIcon from "../../assets/user-icon.svg"

import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import Button from "../UI/Button/Button";

const Header = () => {
    const [signUpState, setSignUpState] = useState(false)
    const [signInState, setSignInState] = useState(false)
    const [loginUser, setLoginUser] = useState(localStorage.LOGIN_USER && JSON.parse(localStorage.getItem("LOGIN_USER") || ""))
    const cartLength = useSelector((state: RootState) => state.cartReducer.length)

    useMemo(() => {
        if (localStorage.LOGIN_USER) {
            setLoginUser(JSON.parse(localStorage.getItem("LOGIN_USER") || ""))
            console.log(loginUser)
        }
    }, [localStorage.LOGIN_USER])

    const logOut = () => {
        localStorage.removeItem("LOGIN_USER")
        setLoginUser("")
    }

    return (
        <header className={headerClasses.header}>
            <nav className={headerClasses.header__nav}>
                <Link to="/main-page">
                    <img src={logo} alt="Logo"/>
                </Link>
                <div className={headerClasses.header__nav__bths_container}>
                    {!loginUser ?
                        <div className={headerClasses.header__nav__bths_container__login_bths_container}>
                            <img src={userIcon} alt="User Icon"/>
                            <p className={headerClasses.header__nav__bths_container__login_bths_container__bth}
                               onClick={() => setSignUpState(true)}>
                                Sign up
                            </p>
                            <p>/</p>
                            <p className={headerClasses.header__nav__bths_container__login_bths_container__bth}
                               onClick={() => setSignInState(true)}>
                                Sign in
                            </p>
                        </div>
                        : <div className={headerClasses.header__nav__bths_container__user_info_container}>
                            <p>{loginUser.email}</p>
                            <Button location={"header"} text={"Log out"} onClick={() => {
                                logOut()
                            }}/>
                        </div>
                    }
                    <Link to="/cart-page" className={headerClasses.header__nav__bths_container__cart}>
                        {cartLength
                            ? <span
                                className={headerClasses.header__nav__bths_container__cart__counter}>{cartLength}</span>
                            : ""
                        }
                        <img src={cartIcon} alt="Cart Icon"/>
                        Cart
                    </Link>
                </div>
            </nav>
            <SignUp
                signUpState={signUpState}
                setSignUpState={setSignUpState}
                setSignInState={setSignInState}
            />
            <SignIn
                signInState={signInState}
                setSignInState={setSignInState}
                setSignUpState={setSignUpState}
            />
        </header>
    );
};

export default Header;