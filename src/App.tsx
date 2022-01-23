import React from 'react';


import Footer from "./components/Footer/Footer";

import './App.scss';

function App() {
  return (
    <Footer/>
// import store from "./store/store"
// import { Provider } from 'react-redux'

import Header from "./components/Header/Header";

import './App.scss';


function App() {
  return (
      // <Provider store={store}>
    <div className="App">
      <Header/>
    </div>
      // </Provider>
  );
}

export default App;
