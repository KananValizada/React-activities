import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import BackDrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxy";

const sideDrawer = (props) => {
  let attachClasses = [classes.SideDrawer, classes.Close];

  if (props.open) {
    attachClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <BackDrop show={props.open} clicked={props.closed} />
      <div className={attachClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthorised ={props.isAuth}/>
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
