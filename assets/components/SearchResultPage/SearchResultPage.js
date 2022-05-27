import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchResultPage = () => {
  const [events, setEvents] = useState([]);
  const searchTerm = useParams().searchTerm;

  useEffect(() => {}, []);

  return <h1>hello</h1>;
};

export default SearchResultPage;
