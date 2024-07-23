import React, { useEffect, useState } from "react";
import "./index.css";
import LoginButton from "../loginButton";
import GoogleButton from "../googleButton";

const Login = ({ page, islogin, setIsLogin }) => {
  useEffect(() => {
    if (page === "Login") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);
  return (
    <div className="LoginMainContainner">
      <div className="LoginInfoContainner">
        <div className="formContainner">
          {!islogin && (
            <>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </>
          )}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          {!islogin && <input type="password" placeholder="Confirm Password" />}
        </div>
        <LoginButton islogin={islogin} />
        <div className="LoginSignUpMessage">
          {islogin ? (
            <>
              {" "}
              <p>Don't have an account ?</p>
              <span onClick={() => setIsLogin(!islogin)}>Signup</span>
            </>
          ) : (
            <>
              {" "}
              <p>Already have an account ?</p>
              <span onClick={() => setIsLogin(!islogin)}>Login</span>
            </>
          )}
        </div>
        <div className="loginwithGoogle">
          <GoogleButton islogin={islogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
