import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.css";

const LoginMessage = ({ message, selectedinfo, setSelectedInfo }) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("Info-->", selectedinfo);
  useEffect(() => {
    console.log("Current pathname:", location.pathname);

    console.log("Current message:", message);

    if (location.pathname === "/Login" && message === "Login") {
      console.log("Setting selected info to Login");
      setSelectedInfo("Login");
    } else if (location.pathname === "/SignUp" && message === "SignUp") {
      console.log("Setting selected info to SignUp");
      setSelectedInfo("SignUp");
    }
  }, [location.pathname, message, setSelectedInfo]);

  const handleLoginMessage = () => {
    setSelectedInfo(message);
    message === "Login" ? navigate("/Login") : navigate("/SignUp");
  };

  return (
    <div
      className={message === selectedinfo ? "selected" : "LoginSignupDiv"}
      onClick={handleLoginMessage}
    >
      <p>{message}</p>
    </div>
  );
};

export default LoginMessage;
