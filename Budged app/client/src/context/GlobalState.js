import { createContext, useReducer } from "react";
import { ADD_INCOME } from "../constants/actionTypes";
import MainReducer from "./MainReducer";

const INITIAL_STATE = {
  incomes: [],
  expenses: [],
};

export const GlobalContext = createContext(INITIAL_STATE);

export const GlobaleReducer = (props) => {
  const [state, dispatch] = useReducer(MainReducer, INITIAL_STATE);

  const addIncome = (income) => {
    dispatch({ type: ADD_INCOME, payload: income });
  };

  return (
    <GlobalContext.Provider
      value={{ incomes: state.incomes, expenses: state.expenses, addIncome }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
