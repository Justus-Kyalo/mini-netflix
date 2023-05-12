import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav nav_black">
      <div  nav_contents>
        <img
        className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="logo"
        ></img>
        <img
        className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="avatar"
        ></img>
        <h1>This is the navbar</h1>
      </div>
    </div>
  );
}

export default Nav;
