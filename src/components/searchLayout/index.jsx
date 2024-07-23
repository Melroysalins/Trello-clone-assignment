import React from "react";
import "./index.css";
import Search from "../search";
import SelectOption from "../selectOption";

const SearchLayout = () => {
  return (
    <div className="SearchLayoutSection">
      <div className="SearchSection">
        <span>Search :</span>
        <Search />
      </div>
      <div className="SearchSection">
        <span>Sort By :</span>
        <SelectOption />
      </div>
    </div>
  );
};

export default SearchLayout;
