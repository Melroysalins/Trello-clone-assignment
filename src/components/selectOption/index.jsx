import React from "react";
import "./index.css";

const SelectOption = () => {
  return (
    <div className="SelectOption">
      <select>
        <option value="recent">RECENT</option>
        <option value="todo">TODO</option>
        <option value="progress"> PROGRESS</option>
        <option value="completed">COMPLETED</option>
      </select>
    </div>
  );
};

export default SelectOption;
