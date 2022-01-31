import React from "react";

import { Link } from "react-router-dom";
import { ProductCardType } from "../../store/actionTypes";

import ProductCardClasses from "./ProductCard.module.scss";

const ProductCard = ({ product }: { product: ProductCardType }) => {
  return (
    <Link
      to={{ pathname: `/product-page`, hash: `${product.id}` }}
      className={ProductCardClasses.product_card}
    >
      <div className={ProductCardClasses.product_card__icon_section}>
        <img src={product.image} alt="IceCream" />
      </div>
      <div className={ProductCardClasses.product_card__info_section}>
        <p className={ProductCardClasses.product_card__info_section__name}>
          {product.name}
        </p>
        <p
          className={ProductCardClasses.product_card__info_section__price}
        >{`$${product.price}`}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
