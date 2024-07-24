import React, { useEffect, useState } from "react";
import "./index.css";
import { taskSearch } from "../../services/taskSearch.api";
import { useDispatch } from "react-redux";
import { addfilterResult } from "../../store/taskSlice";

const Search = ({ filter, setFilter }) => {
  const [inputvalue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = async (value) => {
    setInputValue(value);
    if (!value.length) {
      setFilter(false);
    }
    setFilter(true);
    const result = await taskSearch({ value });

    if (result?.status === 200) {
      dispatch(addfilterResult(result?.searchResult));
    }
  };

  useEffect(() => {
    if (inputvalue.length === 0) {
      setFilter(false);
    }
  }, [inputvalue]);

  return (
    <div className="SearchContainner">
      <input
        type="text"
        placeholder="search..."
        value={inputvalue}
        onChange={(e) => handleInputChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
