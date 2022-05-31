import ReactDom from "react-dom/client";
import React, { useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const [searchToggle, setSearchToggle] = useState(false);

  const showSearch = () => {
    setSearchToggle(!searchToggle);
  };

  const hideSearch = () => {
    setSearchToggle(!searchToggle);
  };

  return (
    <header>
      <Link to="/">
        <h1>Helsinki Events</h1>
      </Link>
      <NavLink to="/">Events</NavLink>
      <SearchBar />
    </header>
  );
};

export default Header;
