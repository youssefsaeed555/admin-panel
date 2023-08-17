import React from "react";
import { Link } from "react-router-dom";

import "./security.css";
import Toggle from "../../shared/toggle/Toggle";

function SecurityInfo() {
  return (
    <div className="p-20 bg-white br-10">
      <div className="box-head">
        <h2 className="m-0 mb-15">Security Info</h2>
        <p className="c-gray mt-5">Security Information About Your Account</p>
      </div>
      <div className="box-sec">
        <div>
          <span>Password</span>
          <p className="time">Last Change On 25/10/2021</p>
        </div>
        <Link to="" className="visit-sec">
          Change
        </Link>
      </div>
      <div className="box-sec toggle">
        <div>
          <span>Two-Factor Authentication</span>
          <p className="time">Enable/Disable The Feature</p>
        </div>
        <Toggle></Toggle>
      </div>
      <div className="box-sec">
        <div>
          <span>Devices</span>
          <p className="time">Check The Login Devices List</p>
        </div>
        <Link to="" className="visit-sec gray">
          Device
        </Link>
      </div>
    </div>
  );
}

export default SecurityInfo;
