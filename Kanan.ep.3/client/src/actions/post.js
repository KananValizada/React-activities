import * as api from "../api";
import { CREATE } from "../consts/actionTypes";

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    //dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
