import React from "react";
import Box from "./Box/Box";

function Index() {
  return (
    <div className="w-full">
      <h2 className="heading">Projects</h2>
      <div className="wrapper d-grid ">
        <Box
          date={"09/08/2023"}
          h4={"Youssef Dashboard"}
          p={"Youssef Dashboard Project Design And Programming And Hosting"}
          loop={5}
          span={4}
          width={50}
          color={"red"}
          price={2500}
        ></Box>
        <Box
          date={"15/6/2023"}
          h4={"Academy Portal"}
          p={"Academy Portal Project Design And Programming"}
          loop={3}
          span={2}
          width={80}
          color={"green"}
          price={1800}
        ></Box>
        <Box
          date={"20/7/2023"}
          h4={"Chatting Application"}
          p={"Chatting Application Project Design"}
          loop={3}
          span={1}
          width={100}
          color={"blue"}
          price={950}
        ></Box>
        <Box
          date={"20/7/2023"}
          h4={"Mena Dashboard"}
          p={"Mena Dashboard Project Design And Programming And Hosting"}
          loop={4}
          span={4}
          width={60}
          color={"black"}
          price={1700}
        ></Box>
        <Box
          date={"20/7/2023"}
          h4={"Bishoy Dashboard"}
          p={"Bishoy Portal Project Design And Programming"}
          loop={2}
          span={3}
          width={40}
          color={"red"}
          price={2500}
        ></Box>
        <Box
          date={"20/7/2023"}
          h4={"Fares Dashboard"}
          p={"Fares Portal Project Design And Programming"}
          loop={3}
          span={4}
          width={90}
          color={"purple"}
          price={5000}
        ></Box>
        <Box
          date={"10/5/2023"}
          h4={"Rashad Dashboard"}
          p={"Rashad Application Project Design"}
          loop={5}
          span={3}
          width={20}
          color={"orange"}
          price={1500}
        ></Box>
      </div>
    </div>
  );
}

export default Index;
