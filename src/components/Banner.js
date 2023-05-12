import React from "react";
import "./Banner.css";

function Banner() {
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
        backgroundImage: `url("https://m.media-amazon.com/images/I/11ASBRs3-QL._AC_.jpg")`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {" "}
          {truncate(
            `This is a test description This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description`,
            150
          )}
        </h1>
      </div>
      <div className="banner_fadeBotton" />
    </header>
  );
}

export default Banner;
