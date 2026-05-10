import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import cards_data from "../../assets/cards/Cards_data";

const TitleCards = ({ title, category }) => {

  const [apiData, setApiData] = React.useState([]);
  const cardsRef = useRef();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGM3OGRjODE5NmZhNmQxZDM1MWMyNDU5MmI3Nzk3YiIsIm5iZiI6MTc3ODIyNzY4Ni4xMTksInN1YiI6IjY5ZmQ5OWU2Nzg2YTE3OTE3MmFhOTczOCIsInNjb3BlcyI6WyJhcGxfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RMFC6bymz51bW94AQmke4vI02Sjsrbk31qEEfzSl2uo",
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
      options,
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="title-cards">
      <h2>{title || "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt="" />
              <p>{card.original_title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
