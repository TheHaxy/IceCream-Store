import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useLocation } from "react-router-dom";
import { ProductCardType } from "../../store/actionTypes";
import { RootState } from "../../store/store";
import {
  addToCardAction,
  loadCatalogAction,
  openSignInModalAction,
} from "../../store/action";

import Button from "../UI/Button/Button";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LocationPanel from "../LocationPanel/LocationPanel";

import ProductPageClasses from "./ProductPage.module.scss";
import cart from "../../assets/cart-icon-button.svg";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import addToCartImg from "../../assets/added-to-card.svg";

const ProductPage = () => {
  const [counter, setCounter] = useState(1);
  const [isAddedToCard, setIsAddedToCard] = useState(false);
  const [isDisableBtn, setIsDisableBtn] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const thisState = useSelector((state: RootState) => state.cartReducer);
  const thisProduct: ProductCardType = thisState.catalog.find(
    (item) => `#${item.id}` === location.hash
  ) as ProductCardType;

  useEffect(() => {
    if (thisProduct.quantity < counter) setCounter(thisProduct.quantity);
    if (thisProduct.quantity < 1) setIsDisableBtn(true);
  }, [thisState.loginUser.cart]);

  const addToCart = () => {
    if (thisState.loginUser.name) {
      thisProduct.sum = thisProduct.sum ? thisProduct.sum + counter : counter;
      thisProduct.quantity = thisProduct.quantity - counter;
      dispatch(addToCardAction(thisProduct));
      setIsAddedToCard(true);
      thisState.catalog.map((product: ProductCardType) => {
        return (
          product.id === thisProduct.id && [
            (product.quantity = thisProduct.quantity),
          ]
        );
      });
      setTimeout(() => setIsAddedToCard(false), 1000);
      dispatch(loadCatalogAction(thisState.catalog));
    } else {
      setCounter(1);
      dispatch(openSignInModalAction(true));
    }
  };

  const minusOnClick = useCallback(() => {
    if (counter > 1) {
      setCounter(counter - 1);
      counter <= thisProduct.quantity + 1 && setIsDisableBtn(false);
      setIsAddedToCard(false);
    }
  }, [counter]);

  const plusOnClick = useCallback(() => {
    if (counter < thisProduct.quantity) {
      setIsDisableBtn(false);
      setCounter(counter + 1);
    }
  }, [counter]);

  return (
    <>
      <Header />
      <main className={ProductPageClasses.product_page}>
        <LocationPanel location="Product Card" />
        <section className={ProductPageClasses.product_page__content}>
          <div
            className={ProductPageClasses.product_page__content__image_section}
          >
            <img
              className={
                ProductPageClasses.product_page__content__image_section__image
              }
              src={thisProduct?.image}
              alt="Product Image"
            />
          </div>
          <div
            className={ProductPageClasses.product_page__content__info_section}
          >
            <p
              className={
                ProductPageClasses.product_page__content__info_section__id
              }
            >
              SKU: {thisProduct?.id}
            </p>
            <h1
              className={
                ProductPageClasses.product_page__content__info_section__name
              }
            >
              {thisProduct?.name}
            </h1>
            <p
              className={
                ProductPageClasses.product_page__content__info_section__description
              }
            >
              <span
                className={
                  ProductPageClasses.product_page__content__info_section__description__span
                }
              >
                Description:
              </span>
              {thisProduct?.text}
            </p>
            <div
              className={
                ProductPageClasses.product_page__content__info_section__price_section
              }
            >
              <p
                className={
                  ProductPageClasses.product_page__content__info_section__price_section__price
                }
              >
                ${thisProduct?.price * counter}
              </p>
              <div
                className={
                  ProductPageClasses.product_page__content__info_section__price_section__counter
                }
              >
                <img
                  src={minus}
                  alt="Plus"
                  style={{ cursor: "pointer" }}
                  onClick={() => minusOnClick()}
                />
                <p>{counter}</p>
                <img
                  src={plus}
                  alt="Minus"
                  style={{ cursor: "pointer" }}
                  onClick={() => plusOnClick()}
                />
              </div>
            </div>
            <div
              className={
                ProductPageClasses.product_page__content__info_section__bth_section
              }
            >
              <Button
                location="product_page"
                text="Add to cart"
                image={cart}
                onClick={() => addToCart()}
                isDisabled={isDisableBtn}
              />
              {isAddedToCard && (
                <img src={addToCartImg} alt="Product added to cart" />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
