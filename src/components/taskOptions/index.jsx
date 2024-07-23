import React from "react";
import "./index.css";

const TaskOptions = () => {
  return (
    <div className="TaskOptionsContainner">
      <button className="delete">Delete</button>
      <button className="edit">Edit</button>
      <button className="viewDetails">View Details</button>
    </div>
  );
};

export default TaskOptions;
