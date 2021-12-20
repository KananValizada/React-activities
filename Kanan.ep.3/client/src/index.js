import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { reducer } from "./reducers";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import CreatePost from "./components/createPost";

const store = createStore(reducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
    <CreatePost />
  </Provider>,
  document.getElementById("root")
);
