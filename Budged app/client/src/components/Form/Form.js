import React from "react";
import classes from "./styles.module.css";

const Form = () => {
  return (
    <div className={classes.Form}>
      <form className={classes.incomeForm}>
        <input placeholder="Add Income.." />
        <input type="number" />
        <button
          style={{
            background: "green",
            color: "white",
            width: "75px",
            padding: "10px",
          }}
        >
          Submit
        </button>
      </form>
      <form className={classes.incomeForm}>
        <input placeholder="Add Expense.." />
        <input type="number" />
        <button
          style={{
            background: "red",
            color: "white",
            width: "75px",
            padding: "10px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
