import React from "react";
import pdf from "../../../assets/imgs/pdf.svg";
import zip from "../../../assets/imgs/zip.svg";
import avi from "../../../assets/imgs/avi.svg";
import psd from "../../../assets/imgs/psd.svg";
import dll from "../../../assets/imgs/dll.svg";
import eps from "../../../assets/imgs/eps.svg";
import png from "../../../assets/imgs/png.svg";

import "./box.css";

function Box({ img, div, p, span1, span2 }) {
  const files = [pdf, zip, avi, psd, dll, eps, png];
  return (
    <div className="file-box bg-white p-20 br-10">
      <i className="fa-solid fa-download"></i>
      <div className="icon-files">
        <img src={files[img]} alt="" />
      </div>
      <div className="img-text">{div}</div>
      <p className="file-p">{p}</p>
      <div className="file-info">
        <span>{span1}</span>
        <span>{span2}</span>
      </div>
    </div>
  );
}

export default Box;
