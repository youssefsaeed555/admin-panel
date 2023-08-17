import React from "react";
import "./fileStatistics.css";
import { Link } from "react-router-dom";
function FileStatistics() {
  return (
    <div className="bg-white br-6 p-20 ">
      <h2 className="mt-0 mb-15 txt-c-mobile">Files Statistics</h2>
      <div className="file-info-statics">
        <i className="fa-regular fa-file-pdf fa-lg"></i>
        <div className="info">
          <span>PDF Files</span>
          <span className="c-grey">130</span>
        </div>
        <div className="c-grey">6.5GB</div>
      </div>
      <div className="file-info-statics">
        <i className="fa-regular fa-images fa-lg"></i>
        <div className="info">
          <span>Images</span>
          <span className="c-grey">115</span>
        </div>
        <div className="c-grey">3.5GB</div>
      </div>
      <div className="file-info-statics">
        <i className="fa-regular fa-file-word fa-lg fa-lg"></i>
        <div className="info">
          <span>word Files</span>
          <span className="c-grey">110</span>
        </div>
        <div className="c-grey">2.5GB</div>
      </div>
      <div className="file-info-statics">
        <i className="fa-solid fa-file-csv fa-lg"></i>
        <div className="info">
          <span>csv Files</span>
          <span className="c-grey">99</span>
        </div>
        <div className="c-grey">10.5GB</div>
      </div>
      <Link className="upload-statics" to="#">
        <i className="fa-solid fa-angles-up "></i>
        Upload
      </Link>
    </div>
  );
}

export default FileStatistics;
