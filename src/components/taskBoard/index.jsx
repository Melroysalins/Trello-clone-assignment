import React from "react";
import "./index.css";
import AddTask from "../addTask";
import SearchLayout from "../searchLayout";
import TaskLayouts from "../taskLayout";
import { useSelector } from "react-redux";

const TaskBoard = () => {
  const taskSelector = useSelector((store) => store?.task?.task);

  const todoTasks = taskSelector.filter((task) => task.status === "TODO");
  const progressTasks = taskSelector.filter(
    (task) => task.status === "PROGRESS"
  );
  const doneTasks = taskSelector.filter((task) => task.status === "DONE");

  return (
    <div className="TaskBoard">
      <AddTask />
      <SearchLayout />
      <div className="TaskLayout">
        <TaskLayouts title={"TODO"} data={todoTasks} />
        <TaskLayouts title={"PROGRESS"} data={progressTasks} />
        <TaskLayouts title={"DONE"} data={doneTasks} />
      </div>
    </div>
  );
};

export default TaskBoard;
