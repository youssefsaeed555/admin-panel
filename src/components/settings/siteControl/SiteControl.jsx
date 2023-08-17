import React from "react";

import "./siteControl.css";
import Toggle from "../../shared/toggle/Toggle";

function SiteControl() {
  return (
    <div className="p-20 bg-white br-10">
      <div className="box-head">
        <h2 className="m-0">Site Control</h2>
        <p className="c-gray mt-5">
          Control The Website If There Is Maintenance
        </p>
      </div>
      <div className="box">
        <div>
          <p className="m-0">Website Control</p>
          <p className="c-gray mt-5">Open/Close Website And Type The Reason</p>
        </div>
        <Toggle></Toggle>
      </div>
      <textarea placeholder="close message content"></textarea>
    </div>
  );
}

export default SiteControl;
