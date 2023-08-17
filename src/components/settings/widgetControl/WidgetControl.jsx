import React, { useRef, useState } from "react";
import "./widgetControl.css";
function WidgetControl() {
  const [state, setState] = useState({
    value1: true,
    value2: true,
    value3: true,
    value4: true,
    value5: false,
    value6: true,
  });
  return (
    <div className="Widget p-20 bg-white br-10">
      <div className="box-head">
        <h2 className="m-0 mb-15">Widgets Control</h2>
        <p className="c-gray mt-5">Show/Hide Widgets</p>
      </div>
      <div className="control">
        <input
          type="checkbox"
          id="one"
          checked={state.value1}
          onChange={(e) => setState(e.target.checked)}
        />
        <label htmlFor="one">Quick Draft</label>
      </div>
      <div className="control">
        <input
          type="checkbox"
          id="two"
          checked={state.value2}
          onChange={(e) => setState(e.target.checked)}
        />
        <label htmlFor="two">Yearly Targets</label>
      </div>
      <div className="control">
        <input
          type="checkbox"
          id="three"
          checked={state.value3}
          onChange={(e) => setState(e.target.checked)}
        />
        <label htmlFor="three">Tickets Statistics</label>
      </div>
      <div className="control">
        <input
          type="checkbox"
          id="four"
          checked={state.value4}
          onChange={(e) => setState(e.target.checked)}
        />
        <label htmlFor="four">Latest News</label>
      </div>
      <div className="control">
        <input
          type="checkbox"
          id="five"
          checked={state.value5}
          onChange={(e) => setState(e.target.checked)}
        />
        <label htmlFor="five">Latest Tasks</label>
      </div>
      <div className="control">
        <input
          type="checkbox"
          id="six"
          checked={state.value6}
          onChange={(e) => setState(e.target.checked)}
        />
        <label htmlFor="six">Top Search Items</label>
      </div>
    </div>
  );
}

export default WidgetControl;
