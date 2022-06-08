import ReactDom from "react-dom/client";
import React, { useState } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import "./header.scss";
import { Categories } from "../Categories/Categories";
import { Overlay } from "./Overlay";

const Header = () => {
  const [showCategories, setShowCategories] = useState({
    show: false,
    category: null,
  });
  const [searchToggle, setSearchToggle] = useState(false);

  const showCategory = (category) => {
    if (category === "header") {
      console.log(category);
      setShowCategories({ show: false, category: null });
    } else if (!showCategories.category) {
      setShowCategories({ show: !showCategories.show, category: category });
      return;
    } else if (category === showCategories.category) {
      setShowCategories({ show: !showCategories.show, category: null });
      return;
    }
    setShowCategories({ ...showCategories, category: category });
  };

  const refreshPage = () => {
    window.location.href = "/";
  };

  return (
    <header>
      <Link to="/" onClick={refreshPage}>
        <h1>Helsinki Events</h1>
      </Link>
      {!searchToggle && (
        <Categories
          showCategory={showCategory}
          showCategories={showCategories}
        />
      )}
      <SearchBar
        showSearch={() => setSearchToggle(!searchToggle)}
        searchToggle={searchToggle}
      />
      {showCategories.show && (
        <Overlay
          toggleCategories={() =>
            setShowCategories({ show: !showCategories.show, category: null })
          }
        />
      )}
    </header>
  );
};

export default Header;
