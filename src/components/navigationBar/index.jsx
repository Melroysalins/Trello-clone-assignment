import React, { useEffect, useState } from "react";
import "./index.css";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LoginMessage from "../loginMessage";
import { Avatar } from "@mui/material";
import AvatarComponent from "../avatar";
import { useNavigate } from "react-router";
import { getUser } from "../../services/getUser.api";
import { useDispatch, useSelector } from "react-redux";
import { addUserInfo } from "../../store/loginSlice";
import LogOut from "../logout";

const NavigationBar = () => {
  const [selectedinfo, setSelectedInfo] = useState("");
  const navigate = useNavigate();

  let userLogin = JSON.parse(localStorage.getItem("islogin"));

  console.log(userLogin);

  const selector = useSelector((store) => store?.login?.user);

  const dispatch = useDispatch();

  const getUserInfo = async () => {
    const _id = localStorage.getItem("userID");

    const resultInfo = await getUser({ _id });

    if (resultInfo?.status === 200) {
      dispatch(addUserInfo(resultInfo?.userInfo));
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="NavigationBar">
      <AssignmentIcon
        className="assignmentIcon"
        onClick={() => navigate("/")}
      />
      <div className="loginSignupContainner">
        {!selector?.islogin && (
          <>
            {" "}
            <LoginMessage
              message={"Login"}
              selectedinfo={selectedinfo}
              setSelectedInfo={setSelectedInfo}
            />
            <LoginMessage
              message={"Signup"}
              selectedinfo={selectedinfo}
              setSelectedInfo={setSelectedInfo}
            />
          </>
        )}
        {selector?.islogin && <LogOut />}
        <AvatarComponent />
      </div>
    </div>
  );
};

export default NavigationBar;
