import React from "react";
import "./index.css";
import TaskHeading from "../taskHeading";
import TaskDescription from "../taskDescription";
import CreatedTime from "../createdTime";
import TaskOptions from "../taskOptions";

const TaskCard = ({ info }) => {
  const handleDragCard = (data) => {
    console.log("drag called");
  };
  return (
    <div className="TaskCard" draggable onDragStart={(e) => handleDragCard(e)}>
      <TaskHeading title={info?.taskheading} />
      <TaskDescription description={info?.description} />
      <CreatedTime time={info?.createdAt} />
      <TaskOptions data={info} />
    </div>
  );
};

export default TaskCard;
