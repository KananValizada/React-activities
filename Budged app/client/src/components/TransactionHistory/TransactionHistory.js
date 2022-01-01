import React, { useEffect } from "react";
import classes from "./styles.module.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const TransactionHistory = () => {
  const { incomes } = useContext(GlobalContext);

  console.log(incomes);

  return (
    <div className={classes.history}>
      <div>
        <h3>Transaction History</h3>
      </div>
      <div>
        <h3>Transaction History</h3>
      </div>
    </div>
  );
};

export default TransactionHistory;
