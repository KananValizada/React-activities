import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const getFilterYear = (year) => {
    setFilterYear(year);
    console.log(filterYear);
  };
  const filteredItems = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filterYear} onGetYear={getFilterYear} />
      <ExpensesChart expenses={filteredItems} />
      <ExpensesList items={filteredItems} />
    </Card>
  );
}

export default Expenses;
