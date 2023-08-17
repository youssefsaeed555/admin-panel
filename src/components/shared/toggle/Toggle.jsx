import React, { useState } from "react";
import "./toggle.css";

function Toggle({ checked }) {
  const [toggle, setToggle] = useState(checked);
  return (
    <label>
      <input
        className="toggle-checkbox"
        type="checkbox"
        checked={toggle}
        onChange={(e) => setToggle(e.target.checked)}
      />
      <div className="toggle-switch"></div>
    </label>
  );
}

export default Toggle;
