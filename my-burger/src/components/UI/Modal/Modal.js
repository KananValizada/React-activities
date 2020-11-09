import React from "react";
import classes from "./Modal.module.css";
import Aux from "../../../hoc/Auxy";
import BackDrop from "../Backdrop/Backdrop";

const modal = (props) => (
  <Aux>
    <BackDrop show={props.show} clicked={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "TranslateY(0)" : "TranslateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default modal;
