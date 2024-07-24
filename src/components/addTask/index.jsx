import React, { useState } from "react";
import "./index.css";
import TaskModal from "../modal";
import CustomizedSnackbars from "../snackBar";

const AddTask = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");
  const isLogin = JSON.parse(localStorage.getItem("islogin"));

  const handleAddTask = () => {
    if (isLogin) {
      setOpen(!open);
    } else {
      setOpen2(true);
      setMessage("Please login and then add your task");
      setSeverity("error");
    }
  };
  return (
    <>
      <div className="AddTask">
        <button onClick={() => handleAddTask()}>Add Task</button>
      </div>
      <TaskModal open={open} setOpen={setOpen} />
      <CustomizedSnackbars
        open={open2}
        setOpen={setOpen2}
        message={message}
        severity={severity}
      />
    </>
  );
};

export default AddTask;
