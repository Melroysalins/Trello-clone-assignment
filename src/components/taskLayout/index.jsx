import React from "react";
import "./index.css";
import LayoutHeading from "../layoutHeading";
import TaskCard from "../taskCard";

const TaskLayouts = ({ title, data }) => {
  return (
    <div className="TaskLayoutContainner">
      <LayoutHeading title={title} />
      {data && data?.map((ele) => <TaskCard key={ele?._id} info={ele} />)}
    </div>
  );
};

export default TaskLayouts;
