import { CREATE, GET } from "../consts/actionTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case GET:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];

    default:
      posts;
  }
};
