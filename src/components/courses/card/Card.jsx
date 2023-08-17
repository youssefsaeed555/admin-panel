import React from "react";

import course1 from "../../../assets/imgs/course-01.jpg";
import course2 from "../../../assets/imgs/course-02.jpg";
import course3 from "../../../assets/imgs/course-03.jpg";
import course4 from "../../../assets/imgs/course-04.jpg";
import course5 from "../../../assets/imgs/course-05.jpg";

import team1 from "../../../assets/imgs/team-01.png";
import team2 from "../../../assets/imgs/team-02.png";
import team3 from "../../../assets/imgs/team-03.png";

import "./card.css";
function Card({ course, team, h4, p, price, number }) {
  let covers = [course1, course2, course3, course4, course5];
  let teams = [team1, team2, team3];
  return (
    <div className="course-card  bg-white br-10">
      <img src={covers[course]} alt=""></img>
      <img src={teams[team]} alt=""></img>
      <div className="p-20 course-content">
        <h4 className="m-0">{h4}</h4>
        <p className="description c-grey mt-15 fs-14">{p}</p>
      </div>
      <div className="course-info">
        <span className="title">Course Info</span>
        <span>
          <i className="fa-regular fa-user"></i>
          {number}
        </span>
        <span>
          <i className="fa-solid fa-dollar-sign"></i>
          {price}
        </span>
      </div>
    </div>
  );
}

export default Card;
