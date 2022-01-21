import React from 'react';

import store from "./store/store"
import { Provider } from 'react-redux'

import './App.css';


function App() {
  return (
      <Provider store={store}>
    <div className="App">
    </div>
      </Provider>
  );
}

export default App;
