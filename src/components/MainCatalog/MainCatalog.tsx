import React from "react";
import { useSelector } from "react-redux";

import { ProductCardType } from "../../store/actionTypes";
import { RootState } from "../../store/store";

import ProductCard from "../ProductCard/ProductCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import mainCatalogClasses from "./MainCatalog.module.scss";
import heartIcon from "../../assets/heart-icon.svg";

const MainCatalog = () => {
  const products: Array<ProductCardType> = useSelector(
    (state: RootState) => state.catalogReducer
  );

  return (
    <>
      <Header />
      <main className={mainCatalogClasses.main}>
        <section className={mainCatalogClasses.main__content}>
          <h1 className={mainCatalogClasses.main__content__title}>
            I <img src={heartIcon} alt="Heart Icon" /> ICE CREAM
          </h1>
          <div className={mainCatalogClasses.main__content__catalog}>
            {products.map((product: ProductCardType) => {
              return <ProductCard product={product} key={product.id} />;
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MainCatalog;
