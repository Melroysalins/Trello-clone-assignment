import React, { useState } from "react";
import "./index.css";
import AddTask from "../addTask";
import SearchLayout from "../searchLayout";
import TaskLayouts from "../taskLayout";
import { useSelector } from "react-redux";
import FilterLayout from "../filterLayout";

const TaskBoard = () => {
  const [filter, setFilter] = useState(false);
  const taskSelector = useSelector((store) => store?.task?.task);

  const todoTasks = taskSelector.filter((task) => task.status === "TODO");
  const progressTasks = taskSelector.filter(
    (task) => task.status === "PROGRESS"
  );
  const doneTasks = taskSelector.filter((task) => task.status === "DONE");

  return (
    <div className="TaskBoard">
      <AddTask />
      <SearchLayout setFilter={setFilter} filter={filter} />
      {!filter && (
        <div className="TaskLayout">
          <TaskLayouts title={"TODO"} data={todoTasks} />
          <TaskLayouts title={"PROGRESS"} data={progressTasks} />
          <TaskLayouts title={"DONE"} data={doneTasks} />
        </div>
      )}
      {filter && <FilterLayout filter={filter} setFilter={setFilter} />}
    </div>
  );
};

export default TaskBoard;
