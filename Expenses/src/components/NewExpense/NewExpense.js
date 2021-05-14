import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isNew, setIsNew] = useState(false);
  const saveExpenseDate = (savedExpenseDate) => {
    const expense = {
      ...savedExpenseDate,
      id: Math.random().toString()
    };

    props.onAddExpense(expense);
  };

  const showExpenseFormHandler = () => {
    setIsNew(true);
  };
  const hideExpenseFormHandler = () => {
    setIsNew(false);
  };

  let content = <button onClick={showExpenseFormHandler}>New Expense</button>;

  if (isNew === true) {
    content = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDate}
        cancel={hideExpenseFormHandler}
      />
    );
  }
  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
