import axios from "axios";
import React, { useState } from "react";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObj = {
      "Project-ID": "e0617955-eda0-4f5e-9a51-c376fc20225d",
      "User-Name": userName,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", { headers: authObj });

      localStorage.setItem("username", userName);
      localStorage.setItem("password", password);
      window.location.reload();
    } catch (error) {
      setError("Sorry, but wrong credencials");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="input"
            placeholder="Username"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <h3>{error}</h3>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
