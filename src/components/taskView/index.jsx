import React from "react";
import "./index.css";
import TaskHeading from "../taskHeading";
import TaskDescription from "../taskDescription";
import CreatedTime from "../createdTime";

const TaskView = (React.forwardRef = ({ open, setOpen, data }) => {
  // TaskView implementation
  return (
    <div className="TaskViewContainner">
      <h4>Task Details</h4>
      <div className="TaskHeading_Conatinner">
        <p className="title">Title : </p>
        <p className="task">{data?.taskheading}</p>
      </div>
      <div className="TaskDescription_Conatinner">
        <p className="description_name">Description : </p>
        <p className="description_name">{data?.description}</p>
      </div>
      <div className="Tasktime_Conatinner">
        <CreatedTime time={data?.createdAt} />
      </div>
      <div className="CloseButton">
        <button onClick={() => setOpen(false)}>Close</button>
      </div>
    </div>
  );
});
export default TaskView;
