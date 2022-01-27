import React from 'react';

import store from "./store/store"
import {Provider} from 'react-redux'
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

import MainCatalog from "./components/MainCatalog/MainCatalog";
import ProductPage from "./components/ProductPage/ProductPage";
import CartPage from "./components/CartPage/CartPage";

import './App.scss';

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
                        <Redirect from="/" to="/main-page"/>
                    </Switch>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
