import React, {useState, useEffect} from 'react';

import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logOutAction} from "../../store/action";
import {RootState} from "../../store/store";

import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import Button from "../UI/Button/Button";

import headerClasses from "./Header.module.scss"
import logo from "../../assets/logo.svg"
import cartIcon from "../../assets/cart-icon.svg"
import userIcon from "../../assets/user-icon.svg"

const Header = (windowState: any) => {
    const dispatch = useDispatch()
    const [signUpState, setSignUpState] = useState(false)
    const [signInState, setSignInState] = useState(false)
    const loginUser = useSelector((state: RootState) => state.loginReducer)
    const cartLength = useSelector((state: RootState) => state.cartReducer.length)

    useEffect(() => {
        if (windowState.windowState) setSignInState(windowState.windowState)
    }, [windowState.windowState])

    const logOut = () => {
        dispatch(logOutAction(loginUser))
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
                            <div>
                                <p>{loginUser.name}</p>
                                <p>{loginUser.email}</p>
                            </div>
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