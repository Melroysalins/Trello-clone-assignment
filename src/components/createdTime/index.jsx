import React from "react";
import "./index.css";

const CreatedTime = ({ time }) => {
  const localDate = new Date(time);
  const localDateString = localDate.toLocaleDateString();
  const localTimeString = localDate.toLocaleTimeString();
  return (
    <div className="CreatedTimeContainner">
      <div className="CreatedDate">
        <p>Created at :</p>
        <p>{localDateString}</p>
      </div>

      <div className="createdTime">
        <p>{localTimeString}</p>
      </div>
    </div>
  );
};

export default CreatedTime;
