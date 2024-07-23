import React, { useState } from "react";
import "./index.css";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LoginMessage from "../loginMessage";

const NavigationBar = () => {
  const [selectedinfo, setSelectedInfo] = useState("");
  return (
    <div className="NavigationBar">
      <AssignmentIcon className="assignmentIcon" />
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
      </div>
    </div>
  );
};

export default NavigationBar;
