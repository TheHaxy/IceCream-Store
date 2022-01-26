import React from 'react';

import {Link} from "react-router-dom";

import FooterClasses from "./Footer.module.scss"

import logo from "../../assets/logo.svg"

const Footer = () => {
    return (
        <footer className={FooterClasses.footer}>
            <nav className={FooterClasses.footer__nav}>
                <Link to="/main-page">
                <img src={logo} alt="Logo"/>
                </Link>
                <div className={FooterClasses.footer__nav__contacts_container}>
                    <p>Our Products</p>
                    <p>Privacy Terms</p>
                    <p>Twitter</p>
                    <p>Facebook</p>
                    <p>Email</p>
                </div>
            </nav>
            <div className={FooterClasses.footer__copyright_info}>
                <p className={FooterClasses.footer__copyright_info__content}>© 2021 Justice-team. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;