import React, { useEffect } from "react";
import classes from "./styles.module.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const TransactionHistory = () => {
  const { incomes, expenses } = useContext(GlobalContext);

  console.log(incomes);

  return (
    <div className={classes.history}>
      <div>
        <h3>Transaction History</h3>
        {incomes.length > 0 &&
          incomes.map((income) => (
            <>
              <div className={classes.incomeList}>
                <span>{income.desc}</span>
                <span>$ {income.amount}</span>
              </div>
              <button>delete</button>
            </>
          ))}
      </div>
      <div>
        <h3>Transaction History</h3>
        {expenses.length > 0 &&
          expenses.map((income) => (
            <>
              <div className={classes.expenseList}>
                <span>{income.desc}</span>
                <span>$ {income.amount}</span>
              </div>
              <button>delete</button>
            </>
          ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
