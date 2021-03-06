import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import App from "./App";
import reducer from './store/reducers/burgerBuilder';
import orderReducer from './store/reducers/order';
import authReducer from './store/reducers/auth'

const composeEnhancers = process.env.NODE_ENV === 'test'?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: null || compose;

const rootReducer = combineReducers({
  burgerBuilder:reducer,
  order:orderReducer,
  auth:authReducer
})


const store = createStore(rootReducer,composeEnhancers(
  applyMiddleware(thunk)
))



const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
