import postReducer from "./post";
import { combineReducers } from "redux";

const reducers = combineReducers({
  posts: postReducer,
});

export default reducers;
