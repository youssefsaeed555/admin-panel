import React from "react";
import NavBar from "../shared/navbar/NavBar";
import Card from "./card/Card";

function Index() {
  return (
    <div className="w-full">
      <NavBar></NavBar>
      <h2 className="heading">Friends</h2>
      <div className="course-wrapper d-grid gap-20 m-20 ">
        <Card
          name={"Youssef saeed"}
          title={"front-end Developer"}
          img={0}
          project={100}
          friend={50}
          article={4}
          joined={"12/6/2023"}
          vip={true}
        ></Card>
        <Card
          name={"Besho osama"}
          title={"front-end Developer"}
          img={1}
          project={80}
          friend={100}
          article={5}
          joined={"13/6/2023"}
          vip={false}
        ></Card>
        <Card
          name={"Mena refat"}
          title={"soc analysis"}
          img={2}
          project={70}
          friend={70}
          article={7}
          joined={"13/7/2023"}
          vip={false}
        ></Card>
        <Card
          name={"Ahmed eldesoky"}
          title={"Full-stack developer"}
          img={3}
          project={40}
          friend={30}
          article={10}
          joined={"10/2/2023"}
          vip={false}
        ></Card>
        <Card
          name={"Amr mohamed"}
          title={"Mobile Developer"}
          img={4}
          project={40}
          friend={25}
          article={15}
          joined={"10/10/2023"}
          vip={true}
        ></Card>
        <Card
          name={"Saeed galad"}
          title={"cloud Developer"}
          img={0}
          project={10}
          friend={35}
          article={12}
          joined={"03/12/2023"}
          vip={true}
        ></Card>
        <Card
          name={"Ahmed abo-zied"}
          title={"content creator"}
          img={1}
          project={11}
          friend={45}
          article={30}
          joined={"04/07/2023"}
        ></Card>
        <Card
          name={"Ahmed mohammed"}
          title={"UI / UX designer"}
          img={2}
          project={57}
          friend={27}
          article={52}
          joined={"25/05/2023"}
        ></Card>
        <Card
          name={"Mohamed elshorbgy"}
          title={"Back-end Developer"}
          img={3}
          project={22}
          friend={33}
          article={44}
          joined={"12/12/2023"}
        ></Card>
      </div>
    </div>
  );
}

export default Index;
