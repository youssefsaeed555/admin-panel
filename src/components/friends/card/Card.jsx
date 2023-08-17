import React from "react";

import img1 from "../../../assets/imgs/friend-01.jpg";
import img2 from "../../../assets/imgs/friend-02.jpg";
import img3 from "../../../assets/imgs/friend-03.jpg";
import img4 from "../../../assets/imgs/friend-04.jpg";
import img5 from "../../../assets/imgs/friend-05.jpg";

import "./card.css";
import { Link } from "react-router-dom";

function Card({ name, title, img, friend, project, article, joined, vip }) {
  let images = [img1, img2, img3, img4, img5];
  return (
    <div className="friend-card p-20  bg-white br-10">
      <div className="contact">
        <i className="fa-solid fa-phone"></i>
        <i className="fa-regular fa-envelope"></i>
      </div>
      <div className="friend-content">
        <img
          className="rad-half mt-10 mb-10 w-100 h-100"
          src={images[img]}
          alt=""
        />
        <h4 className="m-0">{name}</h4>
        <p className="c-grey fs-13 mt-5 mb-0">{title}</p>
      </div>
      <div className="friend-icons">
        <div>
          <i className="fa-regular fa-face-smile fa-fw"></i>
          <span>{friend} Friend</span>
        </div>
        <div>
          <i className="fa-solid fa-code-commit fa-fw"></i>
          <span>{project} Projects</span>
        </div>
        <div>
          <i className="fa-regular fa-newspaper fa-fw"></i>
          <span>{article} Articles</span>
        </div>
        {vip && <span className="vip">VIP</span>}
      </div>
      <div className="friend-info">
        <span className="c-grey">Joined {joined}</span>
        <div className="links">
          <Link className="link" to="/profile">
            Profile
          </Link>
          <Link className="link" to="#">
            Remove
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
