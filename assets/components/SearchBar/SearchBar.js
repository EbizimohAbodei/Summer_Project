import React, { useState } from "react";
import "./searchBar.scss";
import { RiSearch2Line } from "react-icons/Ri";
import { GrClose } from "react-icons/Gr";
import { Link } from "react-router-dom";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchToggle, setSearchToggle] = useState(true);

  const showSearch = () => {
    setSearchToggle(!searchToggle);
  };

  return (
    <div className="searchBar">
      {searchToggle && (
        <div>
          <form>
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
            ></input>{" "}
          </form>
          <Link to={searchTerm && `/search/${searchTerm}`}>
            <RiSearch2Line />
          </Link>
        </div>
      )}
      <div className="searchButton">
        <button onClick={showSearch}>
          {searchToggle ? <GrClose /> : <RiSearch2Line />}
        </button>
      </div>
    </div>
  );
};
