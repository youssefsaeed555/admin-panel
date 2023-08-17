import React from "react";
import img1 from "../../../assets/imgs/team-01.png";
import img2 from "../../../assets/imgs/team-02.png";
import img3 from "../../../assets/imgs/team-03.png";
import img4 from "../../../assets/imgs/team-04.png";
import img5 from "../../../assets/imgs/team-05.png";

import "./box.css";
import { Link } from "react-router-dom";
function Box({ date, h4, p, loop, span, width, color, price }) {
  let arr = [img1, img2, img3, img4, img5];
  let spans = ["Programming", "Design", "Hosting", "Marketing"];
  return (
    <div className="projects p-20 m-20 bg-white br-10">
      <div className="project-heading">
        <span className="date c-grey">{date}</span>
        <h4 className="m-0">{h4}</h4>
        <p className="c-gray mt-5">{p}</p>
      </div>
      <div className="project-team">
        {Array.from({ length: loop }).map((_, idx) => (
          <Link className="link" to="#" key={idx}>
            <img src={arr[idx]} alt="" />
          </Link>
        ))}
      </div>
      <div className="do">
        {Array.from({ length: span }).map((_, idx) => (
          <span>{spans[idx]}</span>
        ))}
      </div>
      <div className="project-info">
        <div className="prog">
          <span style={{ width: `${width}%`, backgroundColor: color }}></span>
        </div>
        <div className="price">
          <i className="fa-solid fa-dollar-sign"></i>
          {price}
        </div>
      </div>
    </div>
  );
}

export default Box;
