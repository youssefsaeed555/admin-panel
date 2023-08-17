import React from "react";
import "./supscripe.css";
import { Link } from "react-router-dom";

function Subscripe() {
  return (
    <>
      <div className="plan ">
        <div className="top green">
          <h2 className="m-0">Free</h2>
          <div className="price">
            <span>$</span>
            0.00
          </div>
        </div>
        <ul>
          <li>
            <i className="fa-solid fa-check fa-fw yes"></i>
            <span>Access All Text Lessons</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
          <li>
            <i className="fa-solid fa-check fa-fw yes"></i>
            <span>Access All Videos Lessons</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
          <li>
            <i className="fa-solid fa-check fa-fw yes"></i>
            <span>Appear On Leaderboard</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
          <li>
            <i className="fa-solid fa-xmark fa-fw"></i>
            <span>Browse Content Without Ads</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
          <li>
            <i className="fa-solid fa-xmark fa-fw"></i>
            <span>Access All Assignments</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
          <li>
            <i className="fa-solid fa-xmark fa-fw"></i>
            <span>Get Daily Prizes</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
          <li>
            <i className="fa-solid fa-xmark fa-fw"></i>
            <span>Earn Certificate</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
          <li>
            <i className="fa-solid fa-xmark fa-fw"></i>
            <span>1 GB Space For Hosting Files</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
          <li>
            <i className="fa-solid fa-xmark fa-fw"></i>
            <span>Access Badge System</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
        </ul>
        <Link to="#" className="plans-link">
          Join
        </Link>
      </div>
      <div className="plan ">
        <div className="top red">
          <h2 className="m-0">Basic</h2>
          <div className="price">
            <span>$</span>
            10.00
          </div>
        </div>
        <ul>
          <li>
            <i className="fa-solid fa-check fa-fw yes"></i>
            <span>Access All Text Lessons</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
          <li>
            <i className="fa-solid fa-check fa-fw yes"></i>
            <span>Access All Videos Lessons</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
          <li>
            <i className="fa-solid fa-check fa-fw yes "></i>
            <span>Appear On Leaderboard</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
          <li>
            <i className="fa-solid fa-xmark fa-fw yes"></i>
            <span>Browse Content Without Ads</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
          <li>
            <i className="fa-solid fa-xmark fa-fw yes"></i>
            <span>Access All Assignments</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
          <li>
            <i className="fa-solid fa-xmark fa-fw yes"></i>
            <span>Get Daily Prizes</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
          <li>
            <i className="fa-solid fa-xmark fa-fw"></i>
            <span>Earn Certificate</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
          <li>
            <i className="fa-solid fa-xmark fa-fw"></i>
            <span>1 GB Space For Hosting Files</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
          <li>
            <i className="fa-solid fa-xmark fa-fw"></i>
            <span>Access Badge System</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
        </ul>
        <Link to="#" className="plans-link">
          Join
        </Link>
      </div>
      <div className="plan ">
        <div className="top blue">
          <h2 className="m-0">Premium</h2>
          <div className="price">
            <span>$</span>
            0.00
          </div>
        </div>
        <ul>
          <li>
            <i className="fa-solid fa-check fa-fw yes"></i>
            <span>Access All Text Lessons</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
          <li>
            <i className="fa-solid fa-check fa-fw yes"></i>
            <span>Access All Videos Lessons</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
          <li>
            <i className="fa-solid fa-check fa-fw yes"></i>
            <span>Appear On Leaderboard</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
          <li>
            <i className="fa-solid fa-xmark fa-fw yes"></i>
            <span>Browse Content Without Ads</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
          <li>
            <i className="fa-solid fa-xmark fa-fw yes"></i>
            <span>Access All Assignments</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
          <li>
            <i className="fa-solid fa-xmark fa-fw yes"></i>
            <span>Get Daily Prizes</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
          <li>
            <i className="fa-solid fa-xmark fa-fw yes"></i>
            <span>Earn Certificate</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
          <li>
            <i className="fa-solid fa-xmark fa-fw yes"></i>
            <span>1 GB Space For Hosting Files</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
          <li>
            <i className="fa-solid fa-xmark fa-fw yes"></i>
            <span>Access Badge System</span>
            <i className="fa-solid fa-circle-info help"></i>
          </li>
        </ul>
        <p className="current-plan">This Is Your Current Plan</p>
      </div>
    </>
  );
}

export default Subscripe;
