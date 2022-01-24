import React from 'react';

import HeaderClasses from "./Header.module.scss"
import logo from "../../assets/logo.svg"
import cartIcon from "../../assets/cart-icon.svg"
import userIcon from "../../assets/user-icon.svg"

import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={HeaderClasses.header}>
            <nav className={HeaderClasses.header__nav}>
                <img src={logo} alt="Logo"/>
                <div className={HeaderClasses.header__nav__bths_container}>
                    <div className={HeaderClasses.header__nav__bths_container__login_bths_container}>
                        <img src={userIcon} alt="User Icon"/>
                        <p className={HeaderClasses.header__nav__bths_container__login_bths_container__bth}>
                            Sign up
                        </p>
                        <p>/</p>
                        <p className={HeaderClasses.header__nav__bths_container__login_bths_container__bth}>
                            Sign in
                        </p>
                    </div>
                    <Link to="/cart-page" className={HeaderClasses.header__nav__bths_container__cart}>
                        <img src={cartIcon} alt="Cart Icon"/>
                        Cart
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;