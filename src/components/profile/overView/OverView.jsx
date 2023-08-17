import React from "react";
import avatar from "../../../assets/imgs/avatar.png";
import "./overview.css";
import Toggle from "../../shared/toggle/Toggle";
function OverView() {
  return (
    <div className="overview p-20 bg-white m-20 br-10">
      <div className="profile">
        <img src={avatar} alt="" />
        <h3 className="m-0">Youssef Saeed</h3>
        <p className="c-grey mt-10">Level 20</p>
        <div className="level">
          <span style={{ width: "70%" }}></span>
        </div>
        <div className="rating ">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
        <p className="rating">50 Rating</p>
      </div>
      <div className="info">
        <div className="box-profile">
          <h4>General Information</h4>
          <div>
            <span>Full Name</span>
            <span>Youssef Saeed</span>
          </div>
          <div>
            <span>Gender:</span>
            <span>Male</span>
          </div>
          <div>
            <span>Country:</span>
            <span>Ismailia</span>
          </div>
          <div>
            <Toggle checked={true}></Toggle>
          </div>
        </div>
        <div className="box-profile">
          <h4>Personal Information</h4>
          <div>
            <span>Email</span>
            <span>yo@test.com</span>
          </div>
          <div>
            <span>Phone:</span>
            <span>01286880684</span>
          </div>
          <div>
            <span>Date Of Birth:</span>
            <span>02/06/2000</span>
          </div>
          <div>
            <Toggle checked={false}></Toggle>
          </div>
        </div>
        <div className="box-profile">
          <h4>Job Information</h4>
          <div>
            <span>Title</span>
            <span>Full Stack Developer</span>
          </div>
          <div>
            <span>Programming Language:</span>
            <span>Javascript</span>
          </div>
          <div>
            <span>Years Of Experience: </span>
            <span>1+</span>
          </div>
          <div>
            <Toggle checked={true}></Toggle>
          </div>
        </div>
        <div className="box-profile">
          <h4>Billing Information</h4>
          <div>
            <span>Payment Method:</span>
            <span>Paypal</span>
          </div>
          <div>
            <span>Email:</span>
            <span>yossefsaid555@gmail.com</span>
          </div>
          <div>
            <span>Subscription: </span>
            <span>Monthly</span>
          </div>
          <div>
            <Toggle checked={true}></Toggle>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverView;
