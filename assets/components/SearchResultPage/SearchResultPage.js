import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Categories } from "../Categories/Categories";
import "./SearchResultPage.scss";

const SearchResultPage = () => {
  const searchResult = useLocation().state.response;
  const [events, setEvents] = useState(searchResult.data);
  const [meta, setMeta] = useState(searchResult.meta);

  const removeTags = (str) => {
    if (!str) {
      return "no description";
    } else {
      str.toString();
    }
    return str.replace(/(<([^>]+)>)/gi, "");
  };

  const changePage = (fetch) => {
    console.log("change page triggered");
    axios.get(fetch).then((res) => {
      console.log(res.data.meta);
      setEvents(res.data.data);
      setMeta(res.data.meta);
    });
  };

  console.log(events);
  if (!events) {
    return <p> loading ... </p>;
  }
  return (
    <div className="eventContainer">
      <Categories />
      {events.map((event, i) => {
        let image;
        try {
          image = event.images[0].url;
        } catch {
          image = "http://source.unsplash.com/afW1hht0NSs";
        }

        const description = event.description
          ? event.description.fi
          : "no description";
        let eventName = event.name
          ? event.name.en || event.name.fi || event.name.sv
          : "No name";

        if (eventName.split(" ").length > 10) {
          eventName = eventName.split(" ").slice(0, 10).join(" ") + "...";
        }

        return (
          <div key={i} className="singleEvent">
            <img style={{ height: "10rem" }} src={image} />
            <div>
              <Link to={`/cards/${event?.id}`}>
                <h1>{eventName}</h1>
              </Link>
              <em></em>
              <p>{removeTags(description).slice(0, 200)}</p>
            </div>
          </div>
        );
      })}
      <div>
        {meta.previous && (
          <button
            className="prevButton"
            onClick={() => changePage(meta.previous)}
          >
            Prev-page
          </button>
        )}
        {meta.next && (
          <button className="prevButton" onClick={() => changePage(meta.next)}>
            Next-page
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchResultPage;
