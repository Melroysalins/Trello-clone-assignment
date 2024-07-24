import React from "react";
import "./index.css";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import TaskCard from "../taskCard";

const FilterLayout = ({ filter, setFilter }) => {
  const filterResult = useSelector((store) => store?.task?.result);
  console.log("Filter result--->", filterResult);
  return (
    <div className="FilterLayoutContainner">
      <div className="FilteredResult">
        <p>Filtered Result :</p>
        <p className="close" onClick={() => setFilter(!filter)}>
          x
        </p>
      </div>
      <div className="FilteredResultContainner">
        {filterResult &&
          filterResult?.map((ele) => <TaskCard key={ele?._id} info={ele} />)}
      </div>
    </div>
  );
};

export default FilterLayout;
