import React from 'react';

import ProductCardClasses from "./ProductCardToCart.module.scss"

import removeIcon from "../../assets/Remove icon.svg"
import {ProductCardType} from "../../store/actionTypes";
import {useDispatch} from "react-redux";
import {removeFromCartAction} from "../../store/action";


const ProductCardToCart = ({product}: {product: ProductCardType}) => {
    const dispatch = useDispatch()

    const removeProduct = () => {
        dispatch(removeFromCartAction(product))
    }

    return (
        <div className={ProductCardClasses.product_card}>
            <div className={ProductCardClasses.product_card__image_section}>
                <img src={product.image} alt="Ice Cream" className={ProductCardClasses.product_card__image_section__image}/>
            </div>
            <div className={ProductCardClasses.product_card__info_section}>
                <div className={ProductCardClasses.product_card__info_section__first_side}>
                <p className={ProductCardClasses.product_card__info_section__first_side__name}>{product.name}</p>
                <p className={ProductCardClasses.product_card__info_section__first_side__count}>{product.number} pcs.</p>
                </div>
                <div className={ProductCardClasses.product_card__info_section__second_side}>
                    <p className={ProductCardClasses.product_card__info_section__second_side__price}>{product.price * product.number}</p>
                    <img src={removeIcon} alt="Remove" onClick={() => removeProduct()}/>
                </div>
            </div>
        </div>
    );
};

export default ProductCardToCart;