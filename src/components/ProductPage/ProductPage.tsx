import React from 'react';

import ProductPageClasses from "./ProductPage.module.scss"
import image from "../../assets/ice cream.svg"
import plus from "../../assets/plus.svg"
import minus from "../../assets/minus.svg"
import Button from "../UI/Button/Button";

const ProductPage = () => {
    return (
        <main className={ProductPageClasses.product_page}>
            <div className={ProductPageClasses.product_page__location}>
                <p className={ProductPageClasses.product_page__location__last_location}>Main page</p>
                <p className={ProductPageClasses.product_page__location__last_location}>/</p>
                <p>Product card</p>
            </div>
            <section className={ProductPageClasses.product_page__content}>
                <div className={ProductPageClasses.product_page__content__image_section}>
                    <img className={ProductPageClasses.product_page__content__image_section__image} src={image} alt="Product Image"/>
                </div>
                <div className={ProductPageClasses.product_page__content__info_section}>
                    <p className={ProductPageClasses.product_page__content__info_section__id}>SKU: BXD100BLK</p>
                    <h1 className={ProductPageClasses.product_page__content__info_section__name}>Snow Tender Ice Cream</h1>
                    <p className={ProductPageClasses.product_page__content__info_section__description}>
                        <span className={ProductPageClasses.product_page__content__info_section__description__span}>Description:</span>
                        Chocolate ice cream has a bright, rich and refreshing taste of the ingredient it contains. Thanks to liquid nitrogen shock freezing (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, all the flavors, vitamins and nutrients are preserved by 99%.

                        Blast freezing with liquid nitrogen (-193°C), which freezes all the ingredients instantly and gives the ice cream an amazingly delicate texture, preserving all the flavors, vitamins and nutrients by 99%.
                    </p>
                    <div className={ProductPageClasses.product_page__content__info_section__price_section}>
                        <p className={ProductPageClasses.product_page__content__info_section__price_section__price}>$243.00</p>
                        <div className={ProductPageClasses.product_page__content__info_section__price_section__counter}>
                        <img src={minus} alt="Plus"/>
                            <p>1</p>
                            <img src={plus} alt="Minus"/>
                        </div>
                    </div>
                    <Button/>
                </div>
            </section>
        </main>
    );
};

export default ProductPage;