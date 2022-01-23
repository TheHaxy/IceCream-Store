import React from 'react';

import store from "./store/store"
import { Provider } from 'react-redux'

import './App.scss';
import MainCatalog from "./components/MainCatalog/MainCatalog";


function App() {
  return (
      <Provider store={store}>
    <div className="App">
      <MainCatalog/>
    </div>
      </Provider>
  );
}

export default App;
