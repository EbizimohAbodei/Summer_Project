import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./cardslist.scss";
import { BsHeartFill } from "react-icons/bs";
import Loading from "../Loading/Loading";
import axios from "axios";
import HeroBanner from "../HeroBanner/HeroBanner";
import { useNavigate } from "react-router-dom";

function CardsList() {
  const [allEventsData, setAllEventsData] = useState([]);
  const [meta, setMeta] = useState([]);
  const [likes, setLikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        "http://api.hel.fi/linkedevents/v1/event/?end=2025-12-31&page=35&start=today"
      )
      .then((response) => {
        setAllEventsData(response?.data);
        setMeta(response.data.meta);
        setLoading(!loading);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        axios
          .get("http://127.0.0.1:8000/spa/getlikes")
          .then((res) => setLikes(res.data));
      });
  }, []);

  const prevPage = () => {
    setLoading(!loading);
    axios
      .get(`${meta.next}`)
      .then((res) => {
        setAllEventsData(res?.data);
        setMeta(res?.data?.meta);
        setLoading(!loading);
      })
      .catch((error) => {
        return error;
      });
    window.scrollTo(0, 300);
  };

  const nextPage = () => {
    setLoading(!loading);
    axios
      .get(`${meta.previous}`)
      .then((res) => {
        setAllEventsData(res?.data);
        setMeta(res?.data?.meta);
        setLoading(!loading);
      })
      .catch((error) => {
        return error;
      });
    window.scrollTo(0, 300);
  };

  const handleLike = (id, endTime, addLike, addInterest) => {
    const eventHasLikes = likes.filter((like) => like.eventId.includes(id));
    if (eventHasLikes.length > 0) {
      console.log("id: ", eventHasLikes[0].id);
      axios
        .put(`http://127.0.0.1:8000/spa/updatelike/${eventHasLikes[0].id}`, {
          eventId: id,
          endDate: endTime,
          likeCount: addLike,
          interestCount: addInterest,
        })
        .then((res) => console.log("res: ", res))
        .catch((err) =>
          console.log("updating likes or interestCount returned error: ", err)
        );
    } else {
      let postForm = new FormData();
      postForm.append("likeCount", addLike);
      postForm.append("interestCount", addInterest);
      postForm.append("eventId", id);
      postForm.append("endDate", endTime);
      axios
        .post("http://127.0.0.1:8000/spa/addlikes", postForm)
        .then((res) => console.log("form posted", res))
        .catch((err) => console.log("error occurred: ", err))
        .finally(() => {
          axios
            .get("http://127.0.0.1:8000/spa/getlikes")
            .then((res) => setLikes(res.data));
        });
    }
  };

  console.log(likes);

  return (
    <div className="cardsListContainer">
      <div className="heroBanner">
        <HeroBanner />
      </div>
      {loading && <Loading />}
      <div className="cardsList">
        {allEventsData?.data?.map((item) => {
          return (
            <Card
              key={item.id}
              id={item.id}
              name={
                item.name.en || item.name.fi || item.name.sv || item.name.ru
              }
              locationCall={item.location["@id"]}
              startDate={new Date(item?.start_time).toLocaleDateString()}
              startTime={new Date(item?.start_time).toLocaleTimeString()}
              endDate={
                new Date(item?.end_time).toLocaleDateString() ===
                  new Date(item?.start_time).toLocaleDateString() ||
                new Date(item?.start_time).toLocaleDateString() >
                  new Date(item?.end_time).toLocaleDateString()
                  ? ""
                  : new Date(item?.end_time).toLocaleDateString()
              }
              endTime={new Date(item?.end_time).toLocaleTimeString()}
              description={
                item.short_description?.en ||
                item.short_description?.fi ||
                item.short_description?.sv ||
                item.short_description?.ru
              }
              eventImage={item?.images[0]?.url}
              addInterest={() => {
                handleLike(item.id, item.end_time, 0, 1);
                navigate(`/events/${item.id}`);
              }}
            >
              <div>
                <BsHeartFill
                  onClick={() => handleLike(item.id, item.end_time, 1, 0)}
                />
              </div>
            </Card>
          );
        })}
      </div>
      <div className="cardListNav">
        {meta.previous !== null && (
          <button className="prevButton" onClick={prevPage}>
            Prev-page
          </button>
        )}
        <button className="nextButton" onClick={nextPage}>
          Next-page
        </button>
      </div>
    </div>
  );
}

export default CardsList;
