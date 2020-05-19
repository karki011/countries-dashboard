import React from "react";
import "./SearchAndFilter.css";
import { FilterField, SearchField } from "."

export default function SearchAndFilter(props) {
  return (
    <div className="search-and-filter">
        <SearchField />
        <FilterField />
    </div>
  );
}
