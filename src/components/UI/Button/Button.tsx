import React, {MouseEventHandler} from 'react';

import ButtonClasses from "./Button.module.scss"

const Button = ({location, text, image, onClick, isDisabled}: {location: string, text: string, image?: string, onClick: MouseEventHandler<HTMLButtonElement>, isDisabled?:boolean}) => {
    return (
        <button className={ButtonClasses[`button__${location}`]} onClick={onClick} disabled={isDisabled}>
            {location === "product_page" &&
                <img src={image} alt="Cart Icon"/>
            }
            <p className={ButtonClasses[`button__text`]}>{text}</p>
        </button>
    );
};

export default Button;