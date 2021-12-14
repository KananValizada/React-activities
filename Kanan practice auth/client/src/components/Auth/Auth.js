import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signin, signup } from "../../actions/auth";

const SignUp = () => {
  const dispatch = useDispatch();
  const [authData, setAuthData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isSignIn, setIsSignIn] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(authData);
    if (isSignIn) {
      dispatch(signin({ email: authData.email, password: authData.password }));
    } else {
      dispatch(signup(authData));
    }
  };
  return (
    <form onSubmit={submitHandler}>
      {!isSignIn && (
        <>
          <label>Name</label>
          <input
            type="string"
            onChange={(e) => setAuthData({ ...authData, name: e.target.value })}
          />
        </>
      )}
      <label>Email</label>
      <input
        type="email"
        onChange={(e) => setAuthData({ ...authData, email: e.target.value })}
      />
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => setAuthData({ ...authData, password: e.target.value })}
      />
      <button type="submit">Təsdiqlə</button>
      <button type="button" onClick={() => setIsSignIn((state) => !state)}>
        {isSignIn ? "Qeydiyyat" : "Daxil ol"}
      </button>
    </form>
  );
};

export default SignUp;
