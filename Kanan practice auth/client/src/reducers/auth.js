import { AUTH, LOGOUT } from "../constants/actionTypes";

export default (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.token }));
      console.log("KKKKaa");
      return { ...state, authData: action.data, loading: false, error: null };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
    default:
      console.log("zazaza");
      return state;
  }
};