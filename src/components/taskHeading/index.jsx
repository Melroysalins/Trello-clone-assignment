import React from "react";
import "./index.css";

const TaskHeading = ({ title }) => {
  return (
    <div className="TaskHeading">
      <p>{title}</p>
    </div>
  );
};

export default TaskHeading;
