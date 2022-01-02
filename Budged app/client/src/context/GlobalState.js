import { createContext, useEffect, useReducer } from "react";
import { ADD_EXPENSE, ADD_INCOME } from "../constants/actionTypes";
import MainReducer from "./MainReducer";

const INITIAL_STATE = {
  incomes: !localStorage.getItem("incomes")
    ? []
    : JSON.parse(localStorage.getItem("incomes")),
  expenses: !localStorage.getItem("expenses")
    ? []
    : JSON.parse(localStorage.getItem("expenses")),
};

export const GlobalContext = createContext(INITIAL_STATE);

export const GlobaleReducer = (props) => {
  const [state, dispatch] = useReducer(MainReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("incomes", JSON.stringify(state.incomes));
    localStorage.setItem("expenses", JSON.stringify(state.expenses));
  }, [state]);

  const addIncome = (income) => {
    dispatch({ type: ADD_INCOME, payload: income });
  };
  const addExpense = (expense) => {
    dispatch({ type: ADD_EXPENSE, payload: expense });
  };

  return (
    <GlobalContext.Provider
      value={{
        incomes: state.incomes,
        expenses: state.expenses,
        addIncome,
        addExpense,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
