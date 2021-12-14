import { combineReducers } from "redux";

import message from "./message";
import auth from "./auth";

export const reducers = combineReducers({ message, auth });
