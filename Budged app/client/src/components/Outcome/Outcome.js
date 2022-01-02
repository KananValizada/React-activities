import React, { useContext } from "react";
import classes from "./styles.module.css";
import { GlobalContext } from "../../context/GlobalState";

const Outcome = () => {
  const { incomes, expenses } = useContext(GlobalContext);
  console.log("Outc");
  console.log(expenses);

  let incomeAmount = 0;
  let expenseAmount = 0;

  if (expenses.length > 0) {
    for (let index = 0; index < expenses.length; index++) {
      expenseAmount += Number(expenses[index].amount);
    }
  }

  if (incomes.length > 0) {
    for (let index = 0; index < incomes.length; index++) {
      incomeAmount += Number(incomes[index].amount);
    }
  }

  return (
    <div className={classes.outcome}>
      <h1 className={classes.outcomeTitle}>BUDGET APP</h1>
      <div className={classes.balance}>
        <p>Your Balance</p>
        <p>$ {Number(incomeAmount) - Number(expenseAmount)}</p>
      </div>
      <div className={classes.result}>
        <div className={classes.resultIncome}>
          <p>Income</p>
          <p>+${incomeAmount}</p>
        </div>
        <div className={classes.resultExpence}>
          <p>Expenses</p>
          <p>-${expenseAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default Outcome;
