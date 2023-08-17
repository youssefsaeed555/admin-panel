import React from "react";
import avatar from "../../../assets/imgs/avatar.png";

import "./navbar.css";
function NavBar() {
  return (
    <div className="head bg-white p-15 flex-between ">
      <div className="search p-relative">
        <input className="p-10" type="search" placeholder="Type A Keyword" />
      </div>
      <div className="icons d-flex align-center">
        <span className="notification p-relative">
          <i className="fa-regular fa-bell fa-lg"></i>
        </span>
        <img decoding="async" src={avatar} />
      </div>
    </div>
  );
}

export default NavBar;
