import React from "react";
import "./index.css";
import { useNavigate } from "react-router";

const LoginMessage = ({ message, selectedinfo, setSelectedInfo }) => {
  const navigate = useNavigate();

  const handleLoginMessage = () => {
    setSelectedInfo(message);

    message === "Login" ? navigate("/Login") : navigate("/SignUp");
  };
  return (
    <div
      className={message === selectedinfo ? "selected" : "LoginSignupDiv"}
      onClick={() => handleLoginMessage()}
    >
      <p>{message}</p>
    </div>
  );
};

export default LoginMessage;
