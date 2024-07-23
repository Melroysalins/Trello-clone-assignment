import React from "react";
import "./index.css";
import AddTask from "../addTask";
import SearchLayout from "../searchLayout";
import TaskLayouts from "../taskLayout";

const TaskBoard = () => {
  return (
    <div className="TaskBoard">
      <AddTask />
      <SearchLayout />
      <div className="TaskLayout">
        <TaskLayouts />
        <TaskLayouts />
        <TaskLayouts />
      </div>
    </div>
  );
};

export default TaskBoard;
