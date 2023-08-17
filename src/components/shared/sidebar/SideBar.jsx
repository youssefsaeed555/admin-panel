import React from "react";
import { Link, NavLink } from "react-router-dom";

import "./sidbar.css";

function SideBar() {
  return (
    <div className="sidebar p-relative p-20  bg-white">
      <h3 className="txt-c mt-0 p-relative">Youssef</h3>
      <ul>
        <li>
          <NavLink
            className={`d-flex c-black align-center fs-14 br-6 p-10`}
            to="/"
          >
            <i className="fa-regular fa-chart-bar fa-fw"></i>
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className="d-flex c-black align-center align-center fs-14 br-6 p-10"
            to="settings"
          >
            <i className="fa-solid fa-gear fa-fw"></i>
            <span>Settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className=" d-flex c-black align-center align-center fs-14 br-6 p-10"
            to="profile"
          >
            <i className="fa-regular fa-user fa-fw"></i>
            <span>Profile</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className=" d-flex c-black align-center align-center fs-14 br-6 p-10"
            to="projects"
          >
            <i className="fa-solid fa-diagram-project fa-fw"></i>
            <span>Projects</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className=" d-flex c-black align-center align-center fs-14 br-6 p-10"
            to="courses"
          >
            <i className="fa-solid fa-graduation-cap fa-fw"></i>
            <span>Courses</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className=" d-flex c-black align-center align-center fs-14 br-6 p-10"
            to="friends"
          >
            <i className="fa-regular fa-circle-user fa-fw"></i>
            <span>Friends</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className=" d-flex c-black align-center align-center fs-14 br-6 p-10"
            to="files"
          >
            <i className="fa-regular fa-file fa-fw"></i>
            <span>Files</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className=" d-flex c-black align-center align-center fs-14 br-6 p-10"
            to="plans"
          >
            <i className="fa-regular fa-credit-card fa-fw"></i>
            <span>Plans</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
