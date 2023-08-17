import React from "react";
import SiteControl from "./siteControl/SiteControl";
import NavBar from "../shared/navbar/NavBar";
import GeneralInfo from "./generalInfo/GeneralInfo";
import SecurityInfo from "./securityInfo/SecurityInfo";
import SocialInfo from "./socialInfo/SocialInfo";
import WidgetControl from "./widgetControl/WidgetControl";
import BackupManger from "./backupManger/BackupManger";
function Index() {
  return (
    <div className="content w-full">
      <NavBar></NavBar>
      <h2 className="heading">Settings</h2>
      <div className="wrapper d-grid gap-20">
        <SiteControl></SiteControl>
        <GeneralInfo></GeneralInfo>
        <SecurityInfo></SecurityInfo>
        <SocialInfo></SocialInfo>
        <WidgetControl></WidgetControl>
        <BackupManger></BackupManger>
      </div>
    </div>
  );
}

export default Index;
