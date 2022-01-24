import React, {useState} from 'react';

import ProductPageClasses from "./ProductPage.module.scss"
import plus from "../../assets/plus.svg"
import minus from "../../assets/minus.svg"
import Button from "../UI/Button/Button";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import {useLocation} from "react-router-dom";
import {ProductCardType} from "../../store/actionTypes";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import LocationPanel from "../LocationPanel/LocationPanel";
import cart from "../../assets/cart-icon-button.svg"
import {addToCardAction} from "../../store/action";

const ProductPage = () => {
    const [counter, setCounter] = useState(1)
    const products: Array<ProductCardType> = useSelector((state: RootState) => state.catalogReducer)
    const location = useLocation()
    const dispatch = useDispatch()

    const thisProduct: ProductCardType = products.find((item) => `#${item.id}` === location.hash) as ProductCardType

    const addToCart = () => {
        thisProduct.number = counter
        dispatch(addToCardAction(thisProduct))
    }

    const minusOnClick = () => {
        counter > 1 && setCounter(counter-1)
    }

    const plusOnClick = () => {
        setCounter(counter+1)
    }
    return (
        <>
            <Header/>
            <main className={ProductPageClasses.product_page}>
                <LocationPanel location="Product Card"/>
                <section className={ProductPageClasses.product_page__content}>
                    <div className={ProductPageClasses.product_page__content__image_section}>
                        <img className={ProductPageClasses.product_page__content__image_section__image} src={thisProduct?.image}
                             alt="Product Image"/>
                    </div>
                    <div className={ProductPageClasses.product_page__content__info_section}>
                        <p className={ProductPageClasses.product_page__content__info_section__id}>SKU: {thisProduct?.id}</p>
                        <h1 className={ProductPageClasses.product_page__content__info_section__name}>{thisProduct?.name}</h1>
                        <p className={ProductPageClasses.product_page__content__info_section__description}>
                            <span
                                className={ProductPageClasses.product_page__content__info_section__description__span}>Description:</span>
                            {thisProduct?.text}
                        </p>
                        <div className={ProductPageClasses.product_page__content__info_section__price_section}>
                            <p className={ProductPageClasses.product_page__content__info_section__price_section__price}>${thisProduct?.price}</p>
                            <div
                                className={ProductPageClasses.product_page__content__info_section__price_section__counter}>
                                <img src={minus} alt="Plus" style={{cursor: "pointer"}} onClick={() => minusOnClick()}/>
                                <p>{counter}</p>
                                <img src={plus} alt="Minus" style={{cursor: "pointer"}} onClick={() => plusOnClick()}/>
                            </div>
                        </div>
                        <Button location="product_page" text="Add to cart" image={cart} onClick={() => addToCart()}/>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default ProductPage;