import React from 'react';

import ProductCardClasses from "./ProductCard.module.scss"

import {ProductCardType} from "../../store/actionTypes";

const ProductCard = ({product}: { product: ProductCardType }) => {
    return (
        <div className={ProductCardClasses.product_card}>
            <div className={ProductCardClasses.product_card__icon_section}>
                <img src={product.image} alt="IceCream Image"/>
            </div>
            <div className={ProductCardClasses.product_card__info_section}>
                <p className={ProductCardClasses.product_card__info_section__name}>{product.name}</p>
                <p className={ProductCardClasses.product_card__info_section__price}>{`$${product.price}`}</p>
            </div>
        </div>
    );
};

export default ProductCard;