import React, { useState } from "react";
import "./searchBar.css";
import { RiSearch2Line } from "react-icons/Ri";
import { GrClose } from "react-icons/Gr";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchToggle, setSearchToggle] = useState(false);

  const handleSearch = () => {
    return;
  };

  const showSearch = () => {
    setSearchToggle(!searchToggle);
  };

  const hideSearch = () => {
    setSearchToggle(!searchToggle);
  };

  return (
    <>
      {searchToggle && (
        <div className="searchBar">
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
          <button onClick={handleSearch}>Search</button>
        </div>
      )}

      {searchToggle ? (
        <button onClick={hideSearch}>
          <GrClose />
        </button>
      ) : (
        <button onClick={showSearch}>
          <RiSearch2Line />
        </button>
      )}
    </>
  );
};
