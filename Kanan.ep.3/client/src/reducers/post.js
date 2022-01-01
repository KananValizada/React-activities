import { CREATE, FETCH } from "../consts/actionTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];

    default:
      return posts;
  }
};