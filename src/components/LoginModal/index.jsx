import React, { useState, useEffect } from "react";
import "./index.css";
import Login from "../Login";
import { useLocation } from "react-router";

const LoginModal = () => {
  const [islogin, setIsLogin] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/Login") {
      setIsLogin(true);
    } else if (location.pathname === "/SignUp") {
      setIsLogin(false);
    }
  }, [location.pathname]);
  return (
    <div className="LoginContainner">
      <div className="LoginMainContainner">
        <h4>{islogin ? "Login" : "Signup"}</h4>
        <Login islogin={islogin} setIsLogin={setIsLogin} />
      </div>
    </div>
  );
};

export default LoginModal;
