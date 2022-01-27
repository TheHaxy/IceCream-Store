import React from 'react';

import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LocationPanel from "../LocationPanel/LocationPanel";
import Button from "../UI/Button/Button";
import ProductCardToCart from "../ProductCardToCart/ProductCardToCart";

import CartPageClasses from "./CartPage.module.scss"
import {ProductCardType} from "../../store/actionTypes";

const CartPage = () => {
    let allPrice = 0
    const products: Array<ProductCardType> | undefined = useSelector((state: RootState) => state.loginReducer.loginUser.cart)
    const orderPlaced = () => {
    }
    return (
        <>
            <Header/>
            <main className={CartPageClasses.cart_page}>
                <LocationPanel location="Basket"/>
                <section className={CartPageClasses.cart_page__content}>
                    <div className={CartPageClasses.cart_page__content__products_section}>
                        <h1 className={CartPageClasses.cart_page__content__products_section__title}>Basket</h1>
                        <div className={CartPageClasses.cart_page__content__products_section__list}>
                            {products && products.map((product) => {
                                allPrice += product.price * product.sum!
                                return <ProductCardToCart product={product} key={product.id}/>
                            })}
                        </div>
                    </div>
                    <div className={CartPageClasses.cart_page__content__price_section}>
                        <div className={CartPageClasses.cart_page__content__price_section__price_block}>
                            <p className={CartPageClasses.cart_page__content__price_section__price_block__sub_total}>Sub
                                total:</p>
                            <p className={CartPageClasses.cart_page__content__price_section__price_block__price}>{`$${allPrice}`}</p>
                        </div>
                        <Button location="cart_page" text="Check out" onClick={() => orderPlaced()}/>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default CartPage;