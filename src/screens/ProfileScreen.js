import React from "react";
import "./ProfileScreen.css";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import {auth} from "../firebase"

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div>
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
        <div className="profileScreen_details">
          <h2>{user.email} </h2>
          <div className="profileScreen_plans">
            <h3>plans</h3>
            <button
              className="profileScreen_sigOut "
              onClick={() => {
                auth.signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
}

export default ProfileScreen;
