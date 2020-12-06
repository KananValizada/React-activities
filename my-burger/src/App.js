import React, { Component } from "react";
import {Route ,Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import "./styles.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBulider/BurgerBuilder";
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';
import Auth from './containers/Auth/Auth'
import Logout from './containers/Auth/Logout/Logout'
import * as actions from './store/actions/index'

class App extends Component {
  componentDidMount(){
    this.props.onAutoSignIn()
  }

  render() {

    let routes = (
      <Layout>
        <Route path="/" exact component={BurgerBuilder}/>
        <Route path="/auth" component={Auth}/>
        <Redirect to="/" />
      </Layout>
    )

    if(this.props.isAuthenticated){
      routes = (
        <Layout>
        <Route path="/" exact component={BurgerBuilder}/>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/orders" component={Orders}/>
        <Redirect to="/" />
      </Layout>
      )
    }

    return (<div className="App">
      {routes}
    </div>
    )
  };
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAutoSignIn : () => dispatch(actions.checkAuthStatus())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
