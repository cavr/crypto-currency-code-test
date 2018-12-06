import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

import CurrencyContainer from './components/CurrencyContainer';

const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>     
      <CurrencyContainer />
      </Provider>
    );
  }
}

export default App;
