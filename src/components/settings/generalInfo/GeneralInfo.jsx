import React from "react";

import "./generalInfo.css";
import { Link } from "react-router-dom";

function SiteControl() {
  return (
    <div className="p-20 bg-white br-10">
      <div className="box-head">
        <h2 className="m-0">General Info</h2>
        <p className="c-gray mt-5">General Information About Your Account</p>
      </div>
      <form>
        <div className="input">
          <label htmlFor="name">FirstName</label>
          <input type="text" placeholder="FirstName" id="name"></input>
        </div>
        <div className="input">
          <label htmlFor="last-name">LastName</label>
          <input type="text" placeholder="lastName" id="last-name"></input>
        </div>
        <div className="input email">
          <label htmlFor="name">Email</label>
          <input id="email" type="email" value="youssef@test.com" disabled />
          <Link className="visits" to="#">
            Change
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SiteControl;
