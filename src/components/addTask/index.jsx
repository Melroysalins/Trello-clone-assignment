import React, { useState } from "react";
import "./index.css";
import TaskModal from "../modal";

const AddTask = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="AddTask">
        <button onClick={() => setOpen(!open)}>Add Task</button>
      </div>
      <TaskModal open={open} setOpen={setOpen} />
    </>
  );
};

export default AddTask;
