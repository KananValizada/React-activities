import React from "react";
import classes from "./styles.module.css";

const Outcome = () => {
  return (
    <div className={classes.outcome}>
      <h1 className={classes.outcomeTitle}>BUDGET APP</h1>
      <div className={classes.balance}>
        <p>Your Balance</p>
        <p>$ 1000</p>
      </div>
      <div className={classes.result}>
        <div className={classes.resultIncome}>
          <p>Income</p>
          <p>+$2000</p>
        </div>
        <div className={classes.resultExpence}>
          <p>Expenses</p>
          <p>-$1000</p>
        </div>
      </div>
    </div>
  );
};

export default Outcome;
