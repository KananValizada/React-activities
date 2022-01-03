import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";
import LoginForm from "./components/LoginForm";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="e0617955-eda0-4f5e-9a51-c376fc20225d"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
    />
  );
};

export default App;
