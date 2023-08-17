import React from "react";
import NavBar from "../shared/navbar/NavBar";
import Subscripe from "./supscripe/Subscripe";

function Index() {
  return (
    <div className="w-full">
      <NavBar></NavBar>
      <h2 className="heading">Plans</h2>
      <div className="wrapper d-grid gap-20 m-20 ">
        <Subscripe></Subscripe>
      </div>
    </div>
  );
}

export default Index;
