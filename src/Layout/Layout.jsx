import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/shared/sidebar/SideBar";

const Layout = () => {
  return (
    <>
      <div className="page d-flex">
        <SideBar></SideBar>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
