import React from "react";
import "./index.css";
import TaskHeading from "../taskHeading";
import TaskDescription from "../taskDescription";
import CreatedTime from "../createdTime";
import TaskOptions from "../taskOptions";

const TaskCard = ({ info }) => {
  return (
    <div className="TaskCard">
      <TaskHeading title={info?.taskheading} />
      <TaskDescription description={info?.description} />
      <CreatedTime time={info?.createdAt} />
      <TaskOptions />
    </div>
  );
};

export default TaskCard;
