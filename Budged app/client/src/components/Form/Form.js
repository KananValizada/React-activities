import React, { useContext, useState } from "react";
import classes from "./styles.module.css";
import { GlobalContext } from "../../context/GlobalState";

const Form = () => {
  const [incomes, setIncomes] = useState({ desc: "", amount: 0 });
  const [expense, setExpense] = useState({ desc: "", amount: 0 });
  const { addIncome, addExpense } = useContext(GlobalContext);

  const incomeSubmitBtn = (e) => {
    e.preventDefault();
    addIncome(incomes);
    setIncomes({ desc: "", amount: 0 });
  };

  const expenseSubmitBtn = (e) => {
    e.preventDefault();
    addExpense(expense);
    setExpense({ desc: "", amount: 0 });
  };
  return (
    <div className={classes.Form}>
      <form className={classes.incomeForm}>
        <input
          placeholder="Add Income.."
          value={incomes.desc}
          onChange={(e) => setIncomes({ ...incomes, desc: e.target.value })}
        />
        <input
          type="number"
          value={incomes.amount}
          onChange={(e) => setIncomes({ ...incomes, amount: e.target.value })}
        />
        <button
          style={{
            background: "green",
            color: "white",
            width: "75px",
            padding: "10px",
          }}
          type="button"
          onClick={incomeSubmitBtn}
        >
          Submit
        </button>
      </form>
      <form className={classes.incomeForm}>
        <input
          placeholder="Add Expense.."
          value={expense.desc}
          onChange={(e) => setExpense({ ...expense, desc: e.target.value })}
        />
        <input
          type="number"
          value={expense.amount}
          onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
        />
        <button
          style={{
            background: "red",
            color: "white",
            width: "75px",
            padding: "10px",
          }}
          onClick={expenseSubmitBtn}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
