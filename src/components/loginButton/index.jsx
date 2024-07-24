import React, { useState } from "react";
import "./index.css";
import {
  LoginValidation,
  SignUpValidation,
} from "../../utils/loginValidations";
import { loginUser } from "../../services/login.api";
import CustomizedSnackbars from "../snackBar";
import { signupUser } from "../../services/signup.api";
import { useDispatch } from "react-redux";
import { addUserInfo } from "../../store/loginSlice";
import { useNavigate } from "react-router";
import { getAllTaskList } from "../../services/getTaskList";
import { addUserTask } from "../../store/taskSlice";

const LoginButton = ({
  islogin,
  firstname,
  lastname,
  email,
  password,
  confirmpassword,
}) => {
  const [open, setOpen] = useState(false);

  const [message, setMessage] = useState("");

  const [severity, setSeverity] = useState("success");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log("Login clicked");
    let validationResult = LoginValidation({ email, password });

    const result = await loginUser({ email, password });

    if (result?.status !== 200) {
      setOpen(true);
      setMessage(result?.message);
      setSeverity("error");
    } else {
      localStorage.setItem("userID", result?.userInfo?._id);
      localStorage.setItem("islogin", true);

      dispatch(addUserInfo(result?.userInfo));

      navigate("/");

      if (result?.status === 200) {
        const result = await getAllTaskList();

        if (result?.status === 200) {
          dispatch(addUserTask(result?.taskList));
        }
      }
    }
  };

  const handleSignUp = async () => {
    let validationResult = SignUpValidation({
      firstname,
      lastname,
      email,
      password,
      confirmpassword,
    });

    if (!validationResult.length) {
      const result = await signupUser({ email, password, firstname, lastname });

      if (result?.status === 200) {
        localStorage.setItem("userID", result?.userInfo?._id);
        localStorage.setItem("islogin", true);

        dispatch(addUserInfo(result?.userInfo));

        navigate("/");
      }
    } else {
      setOpen(true);
      setMessage(validationResult);
      setSeverity("error");
    }
  };

  return (
    <div className="LoginButton">
      <button
        onClick={() => {
          if (islogin) {
            handleLogin();
          } else {
            handleSignUp();
          }
        }}
      >
        {islogin ? "Login" : "Signup"}
      </button>
      <CustomizedSnackbars
        open={open}
        message={message}
        severity={severity}
        setOpen={setOpen}
      />
    </div>
  );
};

export default LoginButton;
