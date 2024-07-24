import React, { useState } from "react";
import "./index.css";
import { viewTaskDetails } from "../../services/taskView.api";
import TaskModal from "../modal";
import { taskEdit } from "../../services/taskEdit.api";
import { taskDelete } from "../../services/taskDelete.api";
import { useDispatch } from "react-redux";
import { getAllTaskList } from "../../services/getTaskList";
import { addUserTask } from "../../store/taskSlice";

const TaskOptions = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [result, setResult] = useState();
  const dispatch = useDispatch();

  const handleViewTaskDetails = async () => {
    const result = await viewTaskDetails({ _id: data?._id });
    setOpen(true);

    setResult(result?.checkTaskExist);
  };

  const handleEditTask = async () => {
    const result = await viewTaskDetails({ _id: data?._id });
    setOpen2(true);

    setResult(result?.checkTaskExist);
  };

  const handleTaskDelete = async () => {
    const result = await taskDelete({ _id: data?._id });

    if (result?.status === 200) {
      const result = await getAllTaskList();

      if (result?.status === 200) {
        dispatch(addUserTask(result?.taskList));
      }
    }
  };

  return (
    <div className="TaskOptionsContainner">
      <button className="delete" onClick={() => handleTaskDelete()}>
        Delete
      </button>
      <button className="edit" onClick={() => handleEditTask()}>
        Edit
      </button>
      <button className="viewDetails" onClick={() => handleViewTaskDetails()}>
        View Details
      </button>
      <TaskModal isoption={true} open={open} setOpen={setOpen} data={result} />
      <TaskModal
        isoption={false}
        open={open2}
        setOpen={setOpen2}
        isEdit={true}
        data={result}
      />
    </div>
  );
};

export default TaskOptions;
