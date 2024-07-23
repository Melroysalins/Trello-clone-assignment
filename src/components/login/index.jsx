import React, { useState } from "react";
import "./index.css";

const LoginMessage = ({ message, selectedinfo, setSelectedInfo }) => {
  return (
    <div
      className={message === selectedinfo ? "selected" : "LoginSignupDiv"}
      onClick={() => setSelectedInfo(message)}
    >
      <p>{message}</p>
    </div>
  );
};

export default LoginMessage;
