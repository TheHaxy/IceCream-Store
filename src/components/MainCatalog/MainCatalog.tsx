import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {loadCatalogAction} from "../../store/action";
import {catalogStorage} from "../../mockdata/catalogStorage";
import {ProductCardType} from "../../store/actionTypes";
import {RootState} from "../../store/store";
import ProductCard from "../ProductCard/ProductCard";

import MainCatalogClasses from "./MainCatalog.module.scss"
import heartIcon from "../../assets/heart-icon.svg"

const MainCatalog = () => {
    const dispatch = useDispatch()
    const products: Array<ProductCardType> = useSelector((state: RootState) => state.catalogReducer)
    useEffect(() => {
        dispatch(loadCatalogAction(localStorage?.CATALOG_STORAGE ? JSON.parse(localStorage.getItem('CATALOG_STORAGE') || '') : catalogStorage))
    }, [])
    return (
        <main className={MainCatalogClasses.main}>
            <section className={MainCatalogClasses.main__content}>
            <h1 className={MainCatalogClasses.main__content__title}>
                I <img src={heartIcon} alt="Heart Icon"/> ICE CREAM
            </h1>
                <div className={MainCatalogClasses.main__content__catalog}>
                    {products.map((product: ProductCardType) => {
                        return <ProductCard product={product} key={product.id}/>
                    })}
                </div>
            </section>
        </main>
    );
};

export default MainCatalog;