import React from 'react';

import store from "./store/store"
import {Provider} from 'react-redux'

import './App.scss';
import MainCatalog from "./components/MainCatalog/MainCatalog";
import ProductPage from "./components/ProductPage/ProductPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import CartPage from "./components/CartPage/CartPage";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route path="/main-page"><MainCatalog/></Route>
                        <Route path="/main-page"><MainCatalog/></Route>
                        <Route path="/product-page"><ProductPage/></Route>
                        <Route path="/cart-page"><CartPage/></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
