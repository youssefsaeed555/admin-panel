import React from "react";
import avatar from "../../../assets/imgs/avatar.png";
import welcome from "../../../assets/imgs/welcome.png";
import news1 from "../../../assets/imgs/news-01.png";
import news2 from "../../../assets/imgs/news-02.png";
import news3 from "../../../assets/imgs/news-03.png";
import news4 from "../../../assets/imgs/news-04.png";
import pdf from "../../../assets/imgs/pdf.svg";
import zip from "../../../assets/imgs/zip.svg";
import avi from "../../../assets/imgs/avi.svg";
import psd from "../../../assets/imgs/psd.svg";
import dll from "../../../assets/imgs/dll.svg";
import eps from "../../../assets/imgs/eps.svg";
import pro from "../../../assets/imgs/project.png";

import "./content.css";
import NavBar from "../../shared/navbar/NavBar";
import { Link } from "react-router-dom";

function Content() {
  return (
    <div className="content w-full">
      <NavBar></NavBar>
      <h2 className="heading">Dashboard</h2>
      <div className="wrapper d-grid gap-20">
        <div className="welcome br-10 bg-white text-x-mobile">
          <div className="intro p-20 d-flex space-between">
            <div>
              <h2 className="m-0">Welcome</h2>
              <p className="c-gray mt-5">Youssef</p>
            </div>
            <img className="welcome-img hide-mobile" src={welcome}></img>
          </div>
          <img decoding="async" src={avatar} alt="" class="avatar" />
          <div className="about-welcome ">
            <div>
              Youssef saeed
              <span class="d-block c-grey fs-14 mt-10">Developer</span>
            </div>
            <div>
              10 <span class="d-block c-grey fs-14 mt-10">Projects</span>
            </div>
            <div>
              $8500 <span class="d-block c-grey fs-14 mt-10">Earned</span>
            </div>
          </div>
          <Link to="profile" className="visit">
            Profile
          </Link>
        </div>
        <div className="Quick-draft br-10 bg-white text-x-mobile">
          <div className="Quick-intro">
            <h2 className="m-0">Quick Draft</h2>
            <p className="c-gray mt-5">Write A Draft For Your Ideas</p>
            <form className="quick-form">
              <input type="text" placeholder="Title" />
              <textarea placeholder="Your Thought"></textarea>
              <input className="save" type="submit" value="Save" />
            </form>
          </div>
        </div>
        <div className="targets p-20 bg-white br-10 ">
          <h2 className="m-0 ">Yearly Targets</h2>
          <p className="c-gray mt-5">Targets Of The Year</p>
          <div className="target-row ">
            <div className="icon icon-blue">
              <i className="fa-solid fa-dollar-sign fa-lg"></i>
            </div>
            <div className="details">
              <span className="fs-14 c-grey">Money</span>
              <span className="mt-5 mb-10 ">$20.000</span>
              <div class="blue progress">
                <span class="p-relative" style={{ width: "80%" }}>
                  <span class="percentage ">80%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="target-row ">
            <div className="icon icon-orange">
              <i className="fa-solid fa-code fa-lg fa-lg"></i>
            </div>
            <div className="details">
              <span className="fs-14 c-grey">Projects</span>
              <span className="mt-5 mb-10 ">10</span>
              <div class="orange progress ">
                <span class="p-relative" style={{ width: "55%" }}>
                  <span class="percentage">55%</span>
                </span>
              </div>
            </div>
          </div>
          <div className="target-row ">
            <div className="icon icon-green">
              <i className="fa-solid fa-user fa-lg "></i>
            </div>
            <div className="details">
              <span className="fs-14 c-grey">Teams</span>
              <span className="mt-5 mb-10 ">5</span>
              <div class="green progress ">
                <span class="p-relative" style={{ width: "75%" }}>
                  <span class="percentage">75%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="tickets p-20 bg-white br-10 ">
          <h2 className="m-0 ">Tickets Statistics</h2>
          <p className="c-gray mt-5">Everything About Support Tickets</p>
          <div className="boxes">
            <div className="box">
              <i className="fa-regular fa-rectangle-list fa-2x orange"></i>
              <span>2500</span>
              Total
            </div>
            <div className="box">
              <i className="fa-solid fa-spinner fa-2x fa-2x blue"></i>
              <span>2500</span>
              Total
            </div>
            <div className="box">
              <i className="fa-regular fa-circle-check fa-2x green"></i>
              <span>2500</span>
              Total
            </div>
            <div className="box">
              <i className="fa-regular fa-rectangle-xmark fa-2x red"></i>
              <span>2500</span>
              Total
            </div>
          </div>
        </div>
        <div className="latest bg-white br-10 p-20 text-x-mobile">
          <h2 className="m-0">Latest News</h2>
          <div className="news">
            <div className="box">
              <div className="content">
                <img src={news1} alt="" />
                <div className="info">
                  <h3>Created SASS Section</h3>
                  <p className="m-0 fs-14 c-grey">
                    New SASS Examples & Tutorials
                  </p>
                </div>
                <div className="time">3 Days Ago</div>
              </div>
            </div>
            <div className="box">
              <div className="content">
                <img src={news2} alt="" />
                <div className="info">
                  <h3>Created SASS Section</h3>
                  <p className="m-0 fs-14 c-grey">
                    New SASS Examples & Tutorials
                  </p>
                </div>
                <div className="time">3 Days Ago</div>
              </div>
            </div>
            <div className="box">
              <div className="content">
                <img src={news3} alt="" />
                <div className="info">
                  <h3>Changed The Design</h3>
                  <p className="m-0 fs-14 c-grey">A Brand New Website Design</p>
                </div>
                <div className="time">3 Days Ago</div>
              </div>
            </div>
            <div className="box">
              <div className="content">
                <img src={news4} alt="" />
                <div className="info">
                  <h3>Team Increased</h3>
                  <p className="m-0 fs-14 c-grey">
                    New SASS Examples & Tutorials
                  </p>
                </div>
                <div className="time">3 Days Ago</div>
              </div>
            </div>
          </div>
        </div>
        <div className="tasks bg-white br-10 p-20 ">
          <h2 className="m-0 mb-20">Latest Tasks</h2>

          <div className="box">
            <div className="content">
              <h3 className="m-0 ">Tickets Statistics</h3>
              <p className="c-gray mt-5">Everything About Support Tickets</p>
            </div>
            <i class="fa-regular fa-trash-can delete"></i>
          </div>
          <div className="box">
            <div className="content">
              <h3 className="m-0 ">Write Article</h3>
              <p className="c-gray mt-5">
                Write Low Level vs High Level Languages
              </p>
            </div>
            <i class="fa-regular fa-trash-can delete"></i>
          </div>
          <div className="box">
            <div className="content">
              <h3 className="m-0 ">Finish Project</h3>
              <p className="c-gray mt-5">Publish Academy Programming Project</p>
            </div>
            <i class="fa-regular fa-trash-can delete"></i>
          </div>
          <div className="box ">
            <div className="content delete">
              <h3 className="m-0 ">Attend The Meeting</h3>
              <p className="c-gray mt-5">
                Attend The Project Business Analysis Meeting
              </p>
            </div>
            <i class="fa-regular fa-trash-can delete"></i>
          </div>
          <div className="box">
            <div className="content">
              <h3 className="m-0 ">Finish Lesson</h3>
              <p className="c-gray mt-5">Finish Teaching Flex Box</p>
            </div>
            <i class="fa-regular fa-trash-can delete"></i>
          </div>
        </div>
        <div className="search p-20 bg-white br-10">
          <h2 className="mt-0 mb-20">Top Search Items</h2>
          <div className="items-head c-grey mb-10">
            <div>Keyword</div>
            <div>Search Count</div>
          </div>
          <div className="items">
            <span>Programming</span>
            <span className="number">200</span>
          </div>
          <div className="items">
            <span>JavaScript</span>
            <span className="number">150</span>
          </div>
          <div className="items">
            <span>NodeJs</span>
            <span className="number">140</span>
          </div>
          <div className="items">
            <span>Code</span>
            <span className="number">175</span>
          </div>
          <div className="items">
            <span>Design</span>
            <span className="number">100</span>
          </div>
          <div className="items">
            <span>Logic</span>
            <span className="number">80</span>
          </div>
        </div>
        <div className="latest uploads bg-white br-10 p-20 ">
          <h2 className="m-0">Latest Uploads</h2>
          <div className="news">
            <div className="box">
              <div className="content">
                <img src={pdf} alt="" />
                <div className="info">
                  <h3>my-file.pdf</h3>
                  <p className="m-0 fs-14 c-grey">user1</p>
                </div>
                <div className="time ">2mb</div>
              </div>
            </div>
            <div className="box">
              <div className="content">
                <img src={zip} alt="" />
                <div className="info">
                  <h3>My-Video-File.avi</h3>
                  <p className="m-0 fs-14 c-grey">youssef</p>
                </div>
                <div className="time">3mb</div>
              </div>
            </div>
            <div className="box">
              <div className="content">
                <img src={psd} alt="" />
                <div className="info">
                  <h3>My-Psd-File.pdf</h3>
                  <p className="m-0 fs-14 c-grey">saeed</p>
                </div>
                <div className="time">5mb</div>
              </div>
            </div>
            <div className="box">
              <div className="content">
                <img src={eps} alt="" />
                <div className="info">
                  <h3>My-Eps-File.pdf</h3>
                  <p className="m-0 fs-14 c-grey">admin</p>
                </div>
                <div className="time">8mb</div>
              </div>
            </div>
            <div className="box">
              <div className="content">
                <img src={dll} alt="" />
                <div className="info">
                  <h3>My-Dll-File.pdf</h3>
                  <p className="m-0 fs-14 c-grey">developer</p>
                </div>
                <div className="time">10mb</div>
              </div>
            </div>
            <div className="box">
              <div className="content">
                <img src={avi} alt="" />
                <div className="info">
                  <h3>My-Avi-File.pdf</h3>
                  <p className="m-0 fs-14 c-grey">designer</p>
                </div>
                <div className="time">12mb</div>
              </div>
            </div>
          </div>
        </div>
        <div className="projects bg-white br-10 p-20 ">
          <h2 className="m-0">Latest Uploads</h2>
          <ul>
            <li className="done">Got The Project</li>
            <li className="done">Started The Project</li>
            <li className="done">The Project About To Finish</li>
            <li className="current">Test The Project</li>
            <li>Finish The Project & Get Money</li>
          </ul>
          <img className="launch hide-mobile" src={pro} />
        </div>
        <div className="reminders bg-white br-10 p-20 ">
          <h2 className="m-0">Reminders</h2>
          <ul>
            <li>
              <span></span>
              <div className="pl-15 blue">
                <p>Check My Tasks List</p>
                <span className="c-grey">06/08/2023 - 12:00am</span>
              </div>
            </li>
            <li>
              <span></span>
              <div className="pl-15 orange">
                <p>Check My Projects</p>
                <span className="c-grey">26/10/2023 - 12:00am</span>
              </div>
            </li>
            <li>
              <span></span>
              <div className="pl-15 green">
                <p>Call All My Clients</p>
                <span className="c-grey">29/11/2023 - 12:00am</span>
              </div>
            </li>
            <li>
              <span></span>
              <div className="pl-15 red">
                <p>Finish The Development</p>
                <span className="c-grey">1/12/2023 - 12:00am</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="posts bg-white br-10 p-20 ">
          <h2 className="m-0">Latest Post</h2>
          <div className="top ">
            <img className="avatar" src={avatar} alt="" />
            <div className="info">
              <span className="d-block mb-5 fw-bold">Youssef saeed</span>
              <span className="c-grey">About 2 Hours Ago</span>
            </div>
          </div>
          <div className="post-content text-x-mobile ">
            You can fool all of the people some of the time, and some of the
            people all of the time, but you can't fool all of the people all of
            the time.
          </div>
          <div className="post-stats c-grey">
            <div>
              <i className="fa-regular fa-heart"></i>
              <span>1.8K</span>
            </div>
            <div>
              <i className="fa-regular fa-comments"></i>
              <span>500</span>
            </div>
          </div>
        </div>
        <div className="social-media bg-white br-10 p-20">
          <h2 className="m-0 ">Social Media Stats</h2>
          <div className="box twitter">
            <i className="fa-brands fa-twitter fa-2x"></i>
            <span>90K Followers</span>
            <Link className="twitter-btn" to="#">
              Follow
            </Link>
          </div>
          <div className="box facebook">
            <i className="fa-brands fa-facebook-f fa-2x"></i>
            <span>2M Like</span>
            <Link className="face-btn" to="#">
              Like
            </Link>
          </div>
          <div className="box youtube">
            <i className="fa-brands fa-youtube fa-2x"></i>
            <span>1M Subs</span>
            <Link className="youtube-btn" to="#">
              Subscribe
            </Link>
          </div>
          <div className="box linkedin">
            <i className="fa-brands fa-linkedin fa-2x"></i>
            <span>70K Followers</span>
            <Link className="linkedin-btn" to="#">
              Follow
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
