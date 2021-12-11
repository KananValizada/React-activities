import { CREATE, FETCH } from "../constants/actionTypes";

export default (message = [], action) => {
  switch (action.type) {
    case FETCH:
      return action.payload;
    case CREATE:
      return [...message, action.payload];
    default:
      return message;
  }
};
