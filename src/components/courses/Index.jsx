import React from "react";
import Card from "./card/Card";
import NavBar from "../shared/navbar/NavBar";

function Index() {
  return (
    <div className="w-full">
      <NavBar></NavBar>
      <h2 className="heading">Courses</h2>
      <div className="course-wrapper d-grid gap-20 m-20">
        <Card
          h4="Mastering Web Design"
          p="Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture"
          course={0}
          team={0}
          number={950}
          price={165}
        ></Card>
        <Card
          h4="Data Structure And Algorithms"
          p="Master The Art Of Data Strcuture And Famous Algorithms Like Sorting, Dividing And Conquering"
          course={1}
          team={1}
          number={500}
          price={230}
        ></Card>
        <Card
          h4="Responsive Web Design"
          p="Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints"
          course={2}
          team={2}
          number={700}
          price={500}
        ></Card>
        <Card
          h4="Mastering Python"
          p="Mastering Python To Prepare For Data Science And AI And Automating Things in Your Life"
          course={3}
          team={1}
          number={400}
          price={100}
        ></Card>

        <Card
          h4="Nodejs"
          p="Mastering Nodejs To Prepare For Data Science And AI And Automating Things in Your Life"
          course={1}
          team={0}
          number={200}
          price={400}
        ></Card>
        <Card
          h4="Mastering Web Design"
          p="Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture"
          course={0}
          team={0}
          number={950}
          price={165}
        ></Card>
        <Card
          h4="Mastering reactJs"
          p="Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture"
          course={4}
          team={2}
          number={1000}
          price={165}
        ></Card>
        <Card
          h4="Responsive Web Design"
          p="Mastering Responsive Web Design And Media Queries And Know Everything About Breakpoints"
          course={2}
          team={2}
          number={700}
          price={500}
        ></Card>
        <Card
          h4="Mastering reactJs"
          p="Master The Art Of Web Designing And Mocking, Prototyping And Creating Web Design Architecture"
          course={4}
          team={2}
          number={1000}
          price={165}
        ></Card>
      </div>
    </div>
  );
}

export default Index;
