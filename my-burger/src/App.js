import React from "react";
import {Route} from 'react-router-dom'
import "./styles.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBulider/BurgerBuilder";
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth'

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Route path="/" exact component={BurgerBuilder}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/auth" component={Auth}/>
        <Route path="/orders" component={Orders}/>
      </Layout>
    </div>
  );
}
