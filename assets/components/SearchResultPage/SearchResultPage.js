import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsHeartFill } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../Card/Card";
import "./SearchResultPage.scss";

const SearchResultPage = () => {
  const searchResult = useLocation().state.response;
  const [events, setEvents] = useState(searchResult.data);
  const [meta, setMeta] = useState(searchResult.meta);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postData, setPostData] = useState({
    likeCount: 0,
    interestCount: 0,
  });
  const navigate = useNavigate();

  const getTags = (array) => {
    const getTags = array.map((tag, i) => {
      return tag.keywords.map((singleEvent) => {
        return axios.get(singleEvent["@id"]);
      });
    });
    const allTags = axios.all(
      getTags.map((tagArr) => {
        return axios.all(tagArr);
      })
    );
    allTags
      .then(axios.spread((...res) => setTags(res)))
      .catch((err) => console.log("loading tags returned: ", err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setLoading(true);
    getTags(events);
  }, []);

  const changePage = (fetch) => {
    setLoading(true);
    axios
      .get(fetch)
      .then((res) => {
        setEvents(res.data.data);
        setMeta(res.data.meta);
        getTags(res.data.data);
      })
      .catch((err) => console.log("loading new events returned: ", err))
      .finally(() => setLoading(false));
  };

  const getEventsByCategory = (e) => {
    console.log(e.target.dataset.id);
    axios
      .get(
        `https://api.hel.fi/linkedevents/v1/event/?keyword=${e.target.dataset.id}&start=today`
      )
      .then((response) => {
        navigate(`/search/${e.target.textContent.replaceAll(" ", "_")}`, {
          state: { response: response.data },
        });
        window.location.reload();
      })
      .catch((err) => console.log("loading events by tag returned: ", err));
  };

  if (loading) {
    return <p>loading...</p>;
  }

  if (events.length === 0 || tags.length === 0) {
    return (
      <div>
        <p>No results</p>
      </div>
    );
  }

  const handleLike = (e) => {
    e.preventDefault();
    console.log(e.target.dataset.id);
    const { likeCount, interestCount } = postData;
    let postForm = new FormData();
    postForm.append("likeCount", likeCount + 1);
    postForm.append("interestCount", interestCount + 1);
    postForm.append("eventId", e.target.dataset.id);
    axios
      .post("http://127.0.0.1:8000/spa/addlikes", postForm)
      .then((res) => console.log("form posted", res))
      .catch((err) => console.log("error occurred: ", err));
    setTest("");
  };

  return (
    <div className="eventContainer">
      {events.map((event, i) => {
        const singleEventTags = tags[i]?.map((tag, i) => {
          return (
            <li
              onClick={(e) => getEventsByCategory(e)}
              key={i}
              data-id={tag.data.id}
              style={{
                display: "inline-block",
                margin: "0.5rem",
                backgroundColor: "blue",
                padding: "0.5rem",
              }}
            >
              {tag.data.name.en || tag.data.name.fi || tag.data.name.sv}
            </li>
          );
        });
        console.log(event.id);
        let image;
        try {
          image = event.images[0].url;
        } catch {
          image = "http://source.unsplash.com/afW1hht0NSs";
        }

        const description = event.description
          ? event.description.fi
          : "no description";
        const shortDescription = event.short_description
          ? event.short_description.en || event.short_description.fi
          : "";
        let eventName = event.name
          ? event.name.en || event.name.fi || event.name.sv
          : "No name";

        return (
          <Card
            eventImage={image}
            key={event.id}
            id={event.id}
            name={
              event.name.en || event.name.fi || event.name.sv || event.name.ru
            }
            locationCall={event.location["@id"]}
            startDate={new Date(event?.start_time).toLocaleDateString()}
            startTime={new Date(event?.start_time).toLocaleTimeString()}
            endDate={
              new Date(event?.end_time).toLocaleDateString() ===
                new Date(event?.start_time).toLocaleDateString() ||
              new Date(event?.start_time).toLocaleDateString() >
                new Date(event?.end_time).toLocaleDateString()
                ? ""
                : new Date(event?.end_time).toLocaleDateString()
            }
            endTime={new Date(event?.end_time).toLocaleTimeString()}
            description={
              event.short_description?.en ||
              event.short_description?.fi ||
              event.short_description?.sv ||
              event.short_description?.ru
            }
          >
            <div>
              <ul>{singleEventTags}</ul>
              <div onClick={(e) => handleLike(e)}>
                <BsHeartFill data-id={event.id} />
              </div>
            </div>
          </Card>
        );
      })}
      <div>
        {meta.previous && (
          <button className="prevButton" onClick={handleLike}>
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

// const removeTags = (str) => {
//   if (!str) {
//     return "no description";
//   } else {
//     str.toString();
//   }
//   return str.replace(/(<([^>]+)>)/gi, "");
// };

// const start_time = new Date(event.start_time).toLocaleDateString();
// const end_time = new Date(event.end_time).toLocaleDateString();

// const startEndTime =
//   start_time === end_time || start_time > end_time
//     ? start_time
//     : `${start_time} - ${end_time}`;

// if (eventName.split(" ").length > 10) {
//   eventName = eventName.split(" ").slice(0, 10).join(" ") + "...";
// }
