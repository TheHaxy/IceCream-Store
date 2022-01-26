import React, {useCallback, useEffect, useState} from 'react';

import {useLocation} from "react-router-dom";
import {ProductCardType} from "../../store/actionTypes";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {addToCardAction, loadCatalogAction} from "../../store/action";
import {catalogStorage} from "../../mockdata/catalogStorage";

import Button from "../UI/Button/Button";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import LocationPanel from "../LocationPanel/LocationPanel";

import ProductPageClasses from "./ProductPage.module.scss"
import cart from "../../assets/cart-icon-button.svg"
import plus from "../../assets/plus.svg"
import minus from "../../assets/minus.svg"
import addToCartImg from "../../assets/added-to-card.svg"

const ProductPage = () => {
    const [counter, setCounter] = useState(1)
    const [isAddedToCard, setIsAddedToCard] = useState(false)
    const [windowState, setWindowState] = useState(false)
    const location = useLocation()
    const dispatch = useDispatch()
    const products: Array<ProductCardType> = useSelector((state: RootState) => state.catalogReducer)
    const thisProduct: ProductCardType = products.find((item) => `#${item.id}` === location.hash) as ProductCardType

    useEffect(() => {
        dispatch(loadCatalogAction(localStorage?.CATALOG_STORAGE
            ? JSON.parse(localStorage.getItem('CATALOG_STORAGE') || '')
            : catalogStorage))
    }, [])

    const addToCart = () => {
        if (thisProduct.quantity >= counter) {
            if (localStorage.LOGIN_USER) {
                thisProduct.sum = counter
                console.log(thisProduct.sum)
                thisProduct.quantity = thisProduct.quantity - counter
                dispatch(addToCardAction(thisProduct))
                setIsAddedToCard(true)
                products.map((product: ProductCardType) => {
                    return(
                        product.id === thisProduct.id && [
                            product.quantity = thisProduct.quantity
                        ]
                    )
                })

                localStorage.setItem("CATALOG_STORAGE", JSON.stringify(products))
                setTimeout(() => setIsAddedToCard(false), 1000)
            } else setWindowState(true)
        }
    }

    const minusOnClick = useCallback(() => {
        counter > 1 && setCounter(counter - 1)
        setIsAddedToCard(false)
    }, [counter])

    const plusOnClick = useCallback(() => {
        counter < thisProduct.quantity && setCounter(counter + 1)
        console.log(thisProduct.quantity)
        setIsAddedToCard(false)
    }, [counter])

    return (
        <>
            <Header windowState={windowState}/>
            <main className={ProductPageClasses.product_page}>
                <LocationPanel location="Product Card"/>
                <section className={ProductPageClasses.product_page__content}>
                    <div className={ProductPageClasses.product_page__content__image_section}>
                        <img className={ProductPageClasses.product_page__content__image_section__image}
                             src={thisProduct?.image}
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
                            <p className={ProductPageClasses.product_page__content__info_section__price_section__price}>${thisProduct?.price * counter}</p>
                            <div
                                className={ProductPageClasses.product_page__content__info_section__price_section__counter}>
                                <img src={minus} alt="Plus" style={{cursor: "pointer"}} onClick={() => minusOnClick()}/>
                                <p>{counter}</p>
                                <img src={plus} alt="Minus" style={{cursor: "pointer"}} onClick={() => plusOnClick()}/>
                            </div>
                        </div>
                        <div className={ProductPageClasses.product_page__content__info_section__bth_section}>
                            <Button location="product_page" text="Add to cart" image={cart}
                                    onClick={() => addToCart()}/>
                            {isAddedToCard &&
                                <img src={addToCartImg} alt="Product added to cart"/>
                            }
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default ProductPage;