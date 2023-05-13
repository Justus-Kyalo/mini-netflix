import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios";
import requests from "../Requests";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  const truncate = (string, n) => {
    if (string.length > n) {
      return string.substring(0, n) + "...";
    } else {
      return string;
    }
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.nmae || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
         
          {truncate(`${movie?.overview}`, 150)}
        </h1>
      </div>
      <div className="banner_fadeBotton" />
    </header>
  );
}

export default Banner;
