import React, { useState } from "react";
import "./searchBar.scss";
import { RiSearch2Line } from "react-icons/Ri";
import { GrClose } from "react-icons/Gr";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchToggle, setSearchToggle] = useState(false);
  const navigate = useNavigate();

  const showSearch = () => {
    setSearchToggle(!searchToggle);
  };

  const getCategories = () => {
    if (searchTerm) {
      axios
        .get(`http://api.hel.fi/linkedevents/v1/search/?input=${searchTerm}`)
        .then((response) => {
          navigate(`/search/${searchTerm}`, {
            state: { response: response.data },
          });
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
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
          <button onClick={getCategories}>
            <RiSearch2Line />
          </button>
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
