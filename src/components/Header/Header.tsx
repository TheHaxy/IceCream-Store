import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import {
  logOutAction,
  openSignInModalAction,
  openSignUpModalAction,
} from "../../store/action";
import { RootState } from "../../store/store";

import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import Button from "../UI/Button/Button";

import headerClasses from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import cartIcon from "../../assets/cart-icon.svg";
import userIcon from "../../assets/user-icon.svg";

const Header = () => {
  const dispatch = useDispatch();
  const loginUser = useSelector(
    (state: RootState) => state.loginReducer.loginUser
  );
  const signUpState = useSelector(
    (state: RootState) => state.modalReducer.signUp
  );
  const signInState = useSelector(
    (state: RootState) => state.modalReducer.signIn
  );

  const logOut = () => {
    dispatch(logOutAction(loginUser));
  };

  return (
    <header className={headerClasses.header}>
      <nav className={headerClasses.header__nav}>
        <Link to="/main-page">
          <img src={logo} alt="Logo" />
        </Link>
        <div className={headerClasses.header__nav__bths_container}>
          {!loginUser.name ? (
            <div
              className={
                headerClasses.header__nav__bths_container__login_bths_container
              }
            >
              <img src={userIcon} alt="User Icon" />
              <p
                className={
                  headerClasses.header__nav__bths_container__login_bths_container__bth
                }
                onClick={() => dispatch(openSignUpModalAction(true))}
              >
                Sign up
              </p>
              <p>/</p>
              <p
                className={
                  headerClasses.header__nav__bths_container__login_bths_container__bth
                }
                onClick={() => dispatch(openSignInModalAction(true))}
              >
                Sign in
              </p>
            </div>
          ) : (
            <div
              className={
                headerClasses.header__nav__bths_container__user_info_container
              }
            >
              <div>
                <p>{loginUser.name}</p>
                <p>{loginUser.email}</p>
              </div>
              <Button
                location={"header"}
                text={"Log out"}
                onClick={() => {
                  logOut();
                }}
              />
            </div>
          )}
          <Link
            to="/cart-page"
            className={headerClasses.header__nav__bths_container__cart}
          >
            {loginUser.cart?.length ? (
              <span
                className={
                  headerClasses.header__nav__bths_container__cart__counter
                }
              >
                {loginUser.cart.length}
              </span>
            ) : (
              ""
            )}
            <img src={cartIcon} alt="Cart Icon" />
            Cart
          </Link>
        </div>
      </nav>
      {signUpState && <SignUp />}
      {signInState && <SignIn />}
    </header>
  );
};

export default Header;
