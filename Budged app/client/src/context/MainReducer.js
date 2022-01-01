import { ADD_INCOME } from "../constants/actionTypes";

export default (state, action) => {
  switch (action.type) {
    case ADD_INCOME:
      return {
        ...state,
        incomes: [...state.incomes, action.payload],
      };

    default:
      return state;
  }
};
