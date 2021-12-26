import * as api from "../api/posts";
import { FETCH_POSTS, CREATE_POST, DELETE_POST } from "../consts/actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getPosts();

    dispatch({ type: FETCH_POSTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (newPost) => async (dispatch) => {
  try {
    const { data } = await api.createPost(newPost);

    dispatch({ type: CREATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE_POST, payload: id });
  } catch (error) {
    console.log(error);
  }
};
