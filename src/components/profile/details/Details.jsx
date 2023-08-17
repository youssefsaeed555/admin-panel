import React from "react";
import activity1 from "../../../assets/imgs/activity-01.png";
import activity2 from "../../../assets/imgs/activity-02.png";
import activity3 from "../../../assets/imgs/activity-03.png";

import "./details.css";
function Details() {
  return (
    <div className="profile-details">
      <div className="skills p-20 m-20 bg-white br-10">
        <div>
          <h2 className="m-0 mb-15">My Skills</h2>
          <p className="c-gray mt-5">Complete Skills List</p>
        </div>
        <ul className="tech">
          <li>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Bootstrap</span>
          </li>
          <li>
            <span>CSS</span>
            <span>SASS</span>
            <span>Tailwind</span>
          </li>
          <li>
            <span>JavaScript</span>
            <span>TypeScript</span>
          </li>
          <li>
            <span>Angular</span>
            <span>Reactjs</span>
          </li>
          <li>
            <span>Nodejs</span>
            <span>MongoDB</span>
          </li>
          <li>
            <span>Express</span>
            <span>Sql server</span>
          </li>
          <li>
            <span>Redux</span>
          </li>
        </ul>
      </div>
      <div className="latest-activities m-20 p-20 bg-white  br-10">
        <div>
          <h2 className="m-0 mb-15">Latest Activities</h2>
          <p className="c-gray mt-5">Latest Activities Done By The User</p>
        </div>
        <div className="activity">
          <img src={activity1} alt="" />
          <div className="info">
            <span>Store</span>
            <span className="c-grey">Bought The Mastering Python Course</span>
          </div>
          <div className="date">
            <span>18:10</span>
            <span className="c-grey">Yesterday</span>
          </div>
        </div>
        <div className="activity">
          <img src={activity2} alt="" />
          <div className="info">
            <span>Academy</span>
            <span className="c-grey">Got The PHP Certificate</span>
          </div>
          <div className="date">
            <span>16:05</span>
            <span className="c-grey">Yesterday</span>
          </div>
        </div>
        <div className="activity">
          <img src={activity3} alt="" />
          <div className="info">
            <span>Badges</span>
            <span className="c-grey">Unlocked The 10 Skills Badge</span>
          </div>
          <div className="date">
            <span>18:05</span>
            <span className="c-grey">Yesterday</span>
          </div>
        </div>
        <div className="activity">
          <img src={activity1} alt="" />
          <div className="info">
            <span>Store</span>
            <span className="c-grey">Bought The Typescript Course</span>
          </div>
          <div className="date">
            <span>12:05</span>
            <span className="c-grey">Yesterday</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
