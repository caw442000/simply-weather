import React from "react";
import ReactDOM from "react-dom";

// import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { store } from './createStore';
// import thunk from "redux-thunk";
// import logger from "redux-logger";


// import rootReducer from './store/reducers';
// // export const middlewares = [thunk]


import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
      <App />,document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
