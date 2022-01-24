import React from 'react';

import ProductCardClasses from "./ProductCardToCart.module.scss"

import removeIcon from "../../assets/Remove icon.svg"
import iceCream from "../../assets/ice cream.svg"

const ProductCardToCart = () => {
    return (
        <div className={ProductCardClasses.product_card}>
            <div className={ProductCardClasses.product_card__image_section}>
                <img src={iceCream} alt="Ice Cream" className={ProductCardClasses.product_card__image_section__image}/>
            </div>
            <div className={ProductCardClasses.product_card__info_section}>
                <div className={ProductCardClasses.product_card__info_section__first_side}>
                <p className={ProductCardClasses.product_card__info_section__first_side__name}>Snow Tender Ice Cream</p>
                <p className={ProductCardClasses.product_card__info_section__first_side__count}>1 pcs.</p>
                </div>
                <div className={ProductCardClasses.product_card__info_section__second_side}>
                    <p className={ProductCardClasses.product_card__info_section__second_side__price}>232</p>
                    <img src={removeIcon} alt="Remove"/>
                </div>
            </div>
        </div>
    );
};

export default ProductCardToCart;