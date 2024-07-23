import React, { useEffect, useState } from "react";
import "./index.css";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LoginMessage from "../loginMessage";
import { Avatar } from "@mui/material";
import AvatarComponent from "../avatar";
import { useNavigate } from "react-router";

const NavigationBar = () => {
  const [selectedinfo, setSelectedInfo] = useState("");
  const navigate = useNavigate();
  localStorage.setItem("islogin", true);
  let info;
  useEffect(() => {
    info = localStorage.getItem("islogin");
  }, []);
  return (
    <div className="NavigationBar">
      <AssignmentIcon
        className="assignmentIcon"
        onClick={() => navigate("/")}
      />
      <div className="loginSignupContainner">
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
        <AvatarComponent />
      </div>
    </div>
  );
};

export default NavigationBar;
