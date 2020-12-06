import React, { Component } from "react";
import { connect } from 'react-redux'
import Aux from "../../hoc/Auxy";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar isAuth={this.props.isAutherized} drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer 
          isAuth={this.props.isAutherized}
          closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAutherized : state.auth.token != null
  }
}

export default connect(mapStateToProps)(Layout);
