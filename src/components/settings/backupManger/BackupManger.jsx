import React, { useRef, useState } from "react";
import "./backupManger.css";

function BackupManger() {
  const [Widget, setWidget] = useState({
    value1: "time",
    value2: "",
    value3: "",
    radio1: false,
    radio2: true,
    radio3: false,
  });
  return (
    <div className="Widget p-20 bg-white br-10">
      <div className="box-head">
        <h2 className="m-0 mb-15">Backup Manager</h2>
        <p className="c-gray mt-5">Control Backup Time And Location</p>
      </div>
      <div className="box-radio">
        <div className="widget-control">
          <input
            name="time"
            type="radio"
            id="daily"
            value={Widget.value1}
            checked={Widget.value1}
            onChange={(e) => setWidget(e.target.checked)}
          />
          <label htmlFor="daily">Daily</label>
        </div>
        <div className="widget-control">
          <input
            name="time"
            type="radio"
            id="Weekly"
            value={Widget.value2}
            onChange={(e) => setWidget(e.target.checked)}
          />
          <label htmlFor="Weekly">Weekly</label>
        </div>
        <div className="widget-control">
          <input
            name="time"
            type="radio"
            id="Monthly"
            value={Widget.value3}
            onChange={(e) => setWidget(e.target.checked)}
          />
          <label htmlFor="Monthly">Monthly</label>
        </div>
      </div>
      <div className="box-check">
        <div className="box-check-control">
          <input
            type="radio"
            id="Megaman"
            name="servers "
            checked={Widget.radio1}
            onChange={(e) => setWidget(e.target.checked)}
          />
          <div>
            <label htmlFor="Megaman">
              <i className="fa-solid fa-server "></i>
              Megaman
            </label>
          </div>
        </div>
        <div className="box-check-control">
          <input
            type="radio"
            name="servers "
            id="Zero"
            checked={Widget.radio2}
            onChange={(e) => setWidget(e.target.checked)}
          />
          <div>
            <label htmlFor="Zero">
              {" "}
              <i className="fa-solid fa-server "></i>
              Zero
            </label>
          </div>
        </div>
        <div className="box-check-control">
          <input
            type="radio"
            name="servers "
            id="Sigma"
            checked={Widget.radio3}
            onChange={(e) => setWidget(e.target.checked)}
          />
          <div>
            <label htmlFor="Sigma">
              {" "}
              <i className="fa-solid fa-server "></i>
              Sigma
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackupManger;
