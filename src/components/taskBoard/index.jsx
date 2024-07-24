import React, { useState } from "react";
import "./index.css";
import AddTask from "../addTask";
import SearchLayout from "../searchLayout";
import TaskLayouts from "../taskLayout";
import { useSelector } from "react-redux";
import FilterLayout from "../filterLayout";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { taskUpdate } from "../../services/taskUpdate.api";
import { getAllTaskList } from "../../services/getTaskList";
import { addUserTask } from "../../store/taskSlice";
import { useDispatch } from "react-redux";

const TaskBoard = () => {
  const [filter, setFilter] = useState(false);
  const taskSelector = useSelector((store) => store?.task?.task);

  const dispatch = useDispatch();

  const todoTasks = taskSelector.filter((task) => task.status === "TODO");

  const isLogin = JSON.parse(localStorage.getItem("islogin"));

  const progressTasks = taskSelector.filter(
    (task) => task.status === "PROGRESS"
  );
  const doneTasks = taskSelector.filter((task) => task.status === "DONE");

  const onDragEnd = async (result) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;

    // Log the task ID, current status, and new status
    console.log(`Task ID: ${draggableId}`);
    console.log(`Current Status: ${source.droppableId}`);
    console.log(`New Status: ${destination.droppableId}`);

    if (source.droppableId !== destination.droppableId) {
      const result = await taskUpdate({
        _id: draggableId,
        status: destination.droppableId,
      });

      if (result?.status === 200) {
        const result = await getAllTaskList();

        if (result?.status === 200) {
          dispatch(addUserTask(result?.taskList));
        }
      }

      console.log("After drag --->", result);
    }

    // Here you can make an API call to update the status
    // For example:
    // updateTaskStatus(draggableId, destination.droppableId);
  };

  return (
    <div className="TaskBoard">
      <AddTask />
      <SearchLayout setFilter={setFilter} filter={filter} />
      {!filter && (
        <div className="TaskLayout">
          {isLogin && (
            <DragDropContext onDragEnd={onDragEnd}>
              <TaskLayouts title={"TODO"} data={todoTasks} id="101" />
              <TaskLayouts title={"PROGRESS"} data={progressTasks} id="102" />
              <TaskLayouts title={"DONE"} data={doneTasks} id="103" />
            </DragDropContext>
          )}
        </div>
      )}
      {filter && <FilterLayout filter={filter} setFilter={setFilter} />}
    </div>
  );
};

export default TaskBoard;
