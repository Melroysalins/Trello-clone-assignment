import React from "react";
import "./index.css";

const LoginButton = ({ islogin }) => {
  return (
    <div className="LoginButton">
      <button>{islogin ? "Login" : "Signup"}</button>
    </div>
  );
};

export default LoginButton;
