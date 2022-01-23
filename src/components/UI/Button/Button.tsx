import React from 'react';

import ButtonClasses from "./Button.module.scss"
import cart from "../../../assets/cart-icon-button.svg"

const Button = () => {
    return (
        <button className={ButtonClasses.button}>
            <img src={cart} alt="Cart Icon"/>
            <p className={ButtonClasses.button__text}>Add to cart</p>
        </button>
    );
};

export default Button;