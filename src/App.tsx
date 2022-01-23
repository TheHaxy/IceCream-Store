import React from 'react';

import store from "./store/store"
import { Provider } from 'react-redux'

import './App.scss';
import MainCatalog from "./components/MainCatalog/MainCatalog";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductPage from "./components/ProductPage/ProductPage";


function App() {
  return (
      <Provider store={store}>
    <div className="App">
      <Header/>
      <ProductPage/>
      <Footer/>
    </div>
      </Provider>
  );
}

export default App;
