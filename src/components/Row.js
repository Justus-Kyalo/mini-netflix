import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow = false }) {
   const [movies, setMovies] = useState([]);
   useEffect(() => {
     async function fetchData() {
      const request = await axios.get(fetchUrl);
       setMovies(request.data.results);
      return request;
     };
     fetchData();
  },
   [fetchUrl]);
   console.log(movies);
  return (
    <div className="row">
      <h1>{title}</h1>
    </div>
  );
}

export default Row;
