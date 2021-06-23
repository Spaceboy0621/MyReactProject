import "./css/index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import allReducer from "./reducers";
import { Provider } from "react-redux";

// ** Redux, Thunk & Root Reducer Imports
import thunk from 'redux-thunk'
import createDebounce from 'redux-debounced'
import { createStore, applyMiddleware, compose } from 'redux'

// ** init middleware
const middleware = [thunk, createDebounce()]

// ** Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// ** Create store
const store = createStore(allReducer, {}, composeEnhancers(applyMiddleware(...middleware)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
