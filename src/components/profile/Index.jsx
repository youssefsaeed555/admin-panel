import React from "react";
import OverView from "./overView/OverView";
import NavBar from "../shared/navbar/NavBar";
import Details from "./details/Details";

function Index() {
  return (
    <div className="w-full">
      <NavBar></NavBar>
      <h2 className="heading">Profile</h2>
      <OverView></OverView>
      <Details></Details>
    </div>
  );
}

export default Index;
