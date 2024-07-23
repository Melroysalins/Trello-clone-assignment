import React from "react";
import "./index.css";

const GoogleButton = ({ islogin }) => {
  return (
    <div className="loginwithGoogleButton">
      <button>{islogin ? " Login with google" : " Signup with google"}</button>
    </div>
  );
};

export default GoogleButton;
