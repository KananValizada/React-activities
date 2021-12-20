import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react";
import { createStore } from "redux";
import { reducer } from "./reducer";

import "./index.css";
import App from "./App";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
