import React from 'react';

import CartPageClasses from "./CartPage.module.scss"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LocationPanel from "../LocationPanel/LocationPanel";
import Button from "../UI/Button/Button";
import ProductCardToCart from "../ProductCardToCart/ProductCardToCart";

const CartPage = () => {
    return (
        <>
            <Header/>
            <main className={CartPageClasses.cart_page}>
                <LocationPanel location="Basket"/>
                <section className={CartPageClasses.cart_page__content}>
                    <div className={CartPageClasses.cart_page__content__products_section}>
                        <h1 className={CartPageClasses.cart_page__content__products_section__title}>Basket</h1>
                        <div className={CartPageClasses.cart_page__content__products_section__list}>
                            <ProductCardToCart/>
                            <ProductCardToCart/>
                            <ProductCardToCart/>
                        </div>
                    </div>
                    <div className={CartPageClasses.cart_page__content__price_section}>
                        <div className={CartPageClasses.cart_page__content__price_section__price_block}>
                            <p className={CartPageClasses.cart_page__content__price_section__price_block__sub_total}>Sub
                                total:</p>
                            <p className={CartPageClasses.cart_page__content__price_section__price_block__price}>3222</p>
                        </div>
                        <Button location="cart_page" text="Check out" image=""/>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export default CartPage;