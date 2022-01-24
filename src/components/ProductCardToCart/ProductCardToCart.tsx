import React from 'react';

import ProductCardClasses from "./ProductCardToCart.module.scss"

import removeIcon from "../../assets/Remove icon.svg"
import {ProductCardType} from "../../store/actionTypes";
import {useDispatch} from "react-redux";
import {removeFromCartAction} from "../../store/action";
import {Link} from "react-router-dom";

const ProductCardToCart = ({product}: {product: ProductCardType}) => {
    const dispatch = useDispatch()

    const removeProduct = () => {
        dispatch(removeFromCartAction(product))
    }

    return (
        <div className={ProductCardClasses.product_card}>
            <Link to={{pathname: `/product-page`, hash: `${product.id}`}} className={ProductCardClasses.product_card__image_section}>
                <img src={product.image} alt="Ice Cream" className={ProductCardClasses.product_card__image_section__image}/>
            </Link>
            <div className={ProductCardClasses.product_card__info_section}>
                <div className={ProductCardClasses.product_card__info_section__first_side}>
                <p className={ProductCardClasses.product_card__info_section__first_side__name}>{product.name}</p>
                <p className={ProductCardClasses.product_card__info_section__first_side__count}>{product.sum} pcs.</p>
                </div>
                <div className={ProductCardClasses.product_card__info_section__second_side}>
                    <p className={ProductCardClasses.product_card__info_section__second_side__price}>${product.price * product.sum!}</p>
                    <img src={removeIcon} alt="Remove" style={{cursor: "pointer"}} onClick={() => removeProduct()}/>
                </div>
            </div>
        </div>
    );
};

export default ProductCardToCart;