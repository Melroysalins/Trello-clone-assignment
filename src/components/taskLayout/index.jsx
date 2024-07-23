import React from "react";
import "./index.css";
import LayoutHeading from "../layoutHeading";
import TaskCard from "../taskCard";

const TaskLayouts = () => {
  return (
    <div className="TaskLayoutContainner">
      <LayoutHeading />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </div>
  );
};

export default TaskLayouts;
