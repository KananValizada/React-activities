import React from "react";
import {Route} from 'react-router-dom'
import "./styles.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBulider/BurgerBuilder";
import Checkout from './containers/Checkout/Checkout'

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Route path="/" exact component={BurgerBuilder}/>
        <Route path="/checkout" component={Checkout}/>
      </Layout>
    </div>
  );
}
