import React, { useEffect, useRef } from "react";
import "./index.css";
import { taskFilter } from "../../services/taskFilter.api";
import { useDispatch } from "react-redux";
import { addfilterResult } from "../../store/taskSlice";

const SelectOption = ({ filter, setFilter }) => {
  const selectRef = useRef(null);
  const dispatch = useDispatch();
  const handlChangeOption = async (status) => {
    setFilter(true);
    const result = await taskFilter({ status });

    if (result?.status === 200) {
      dispatch(addfilterResult(result?.taskList));
    }
  };

  useEffect(() => {
    if (!filter) {
      selectRef.current.value = "";
    }
  }, [filter]);

  return (
    <div className="SelectOption">
      <select
        ref={selectRef}
        onChange={(e) => handlChangeOption(e.target.value)}
      >
        <option value=""></option>
        <option value="TODO">TODO</option>
        <option value="PROGRESS"> PROGRESS</option>
        <option value="DONE">COMPLETED</option>
      </select>
    </div>
  );
};

export default SelectOption;
