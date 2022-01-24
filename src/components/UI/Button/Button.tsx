import React from 'react';

import ButtonClasses from "./Button.module.scss"

const Button = ({location, text, image, onClick}: {location: string, text: string, image: string, onClick: Function}) => {
    return (
        <button className={ButtonClasses[`button__${location}`]}>
            {location === "product_page" &&
                <img src={image} alt="Cart Icon"/>
            }
            <p className={ButtonClasses[`button__text`]}>{text}</p>
        </button>
    );
};

export default Button;