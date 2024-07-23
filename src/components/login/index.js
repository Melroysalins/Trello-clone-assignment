import React, { useEffect, useState } from "react";
import "./index.css";
import LoginButton from "../loginButton";
import GoogleButton from "../googleButton";
import CustomizedSnackbars from "../snackBar";

const Login = ({ page, islogin, setIsLogin }) => {
  const [firstname, setFirstName] = useState("");

  const [lastname, setLastName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmpassword, setConfirmPassword] = useState("");

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
              <input
                type="text"
                placeholder="First Name"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
              />
            </>
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!islogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
        </div>
        <LoginButton
          islogin={islogin}
          firstname={firstname}
          lastname={lastname}
          password={password}
          confirmpassword={confirmpassword}
          email={email}
        />
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
