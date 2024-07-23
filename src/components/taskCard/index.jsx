import React from "react";
import "./index.css";
import TaskHeading from "../taskHeading";
import TaskDescription from "../taskDescription";
import CreatedTime from "../createdTime";
import TaskOptions from "../taskOptions";

const TaskCard = () => {
  return (
    <div className="TaskCard">
      <TaskHeading />
      <TaskDescription />
      <CreatedTime />
      <TaskOptions />
    </div>
  );
};

export default TaskCard;
