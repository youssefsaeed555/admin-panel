import React from "react";
import "./socialInfo.css";

function SocialInfo() {
  return (
    <div className="social-box p-20 bg-white br-10">
      <div className="box-head">
        <h2 className="m-0 mb-15">Social Info</h2>
        <p className="c-gray mt-5">Social Media Information</p>
      </div>
      <div className="input-box">
        <i className="fa-brands fa-twitter c-grey"></i>
        <input type="text" placeholder="Twitter Username" />
      </div>
      <div className="input-box">
        <i className="fa-brands fa-facebook-f c-grey"></i>
        <input type="text" placeholder="Facebook Username" />
      </div>
      <div className="input-box">
        <i className="fa-brands fa-linkedin c-grey"></i>
        <input type="text" placeholder="Linkedin Username" />
      </div>
      <div className="input-box">
        <i className="fa-brands fa-youtube c-grey"></i>
        <input type="text" placeholder="Youtube Username" />
      </div>
    </div>
  );
}

export default SocialInfo;
