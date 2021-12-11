import { CREATE, FETCH } from "../constants/actionTypes";
import * as api from "../api/index";

export const getMessages = () => async (dispatch) => {
  try {
    const { data } = api.fetchMessages();
    dispatch({ type: FETCH, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createMessage = (message) => async (dispatch) => {
  try {
    const { data } = api.createMessage(message);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
