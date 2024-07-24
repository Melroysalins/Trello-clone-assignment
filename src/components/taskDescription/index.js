import React from "react";
import "./index.css";

const TaskDescription = ({ description }) => {
  return (
    <div className="TaskDescription">
      <p>{description}</p>
    </div>
  );
};

export default TaskDescription;
