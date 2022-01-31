import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadCatalogAction, removeFromCartAction } from "../../store/action";
import { Link } from "react-router-dom";
import { ProductCardType } from "../../store/actionTypes";

import ProductCardClasses from "./ProductCardInCart.module.scss";
import removeIcon from "../../assets/Remove icon.svg";
import { RootState } from "../../store/store";

const ProductCardInCart = ({ product }: { product: ProductCardType }) => {
  const products: Array<ProductCardType> = useSelector(
    (state: RootState) => state.catalogReducer
  );
  const dispatch = useDispatch();

  const removeProduct = () => {
    products.map((item: ProductCardType) => {
      return (
        item.id === product.id && [
          item.quantity = product.sum
            ? item.quantity + product.sum
            : item.quantity,
          item.sum = 0,
        ]
      );
    });
    dispatch(loadCatalogAction(products));
    dispatch(removeFromCartAction(product));
  };

  return (
    <div className={ProductCardClasses.product_card}>
      <Link
        to={{ pathname: `/product-page`, hash: `${product.id}` }}
        className={ProductCardClasses.product_card__image_section}
      >
        <img
          src={product.image}
          alt="Ice Cream"
          className={ProductCardClasses.product_card__image_section__image}
        />
      </Link>
      <div className={ProductCardClasses.product_card__info_section}>
        <div
          className={ProductCardClasses.product_card__info_section__first_side}
        >
          <p
            className={
              ProductCardClasses.product_card__info_section__first_side__name
            }
          >
            {product.name}
          </p>
          <p
            className={
              ProductCardClasses.product_card__info_section__first_side__count
            }
          >
            {product.sum} pcs.
          </p>
        </div>
        <div
          className={ProductCardClasses.product_card__info_section__second_side}
        >
          <p
            className={
              ProductCardClasses.product_card__info_section__second_side__price
            }
          >
            ${product.sum && product.price * product.sum}
          </p>
          <img
            src={removeIcon}
            alt="Remove"
            style={{ cursor: "pointer" }}
            onClick={() => removeProduct()}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCardInCart;
