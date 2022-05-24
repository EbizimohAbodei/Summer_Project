import React, { useState } from "react";
import "./searchBar.css";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearch = () => {
    return;
  };

  return (
    <>
      {showSearchBar && (
        <div className="searchBar">
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
          <button onClick={handleSearch}>Search</button>
        </div>
      )}
      <span
        className="searchIcon"
        onClick={() => setShowSearchBar(!showSearchBar)}
      >
        search icon
      </span>
    </>
  );
};
