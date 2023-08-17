import React from "react";
import Box from "./box/Box";
import NavBar from "../shared/navbar/NavBar";
import FileStatistics from "./fileStatstics/FileStatistics";

import "./index.css";

function Index() {
  return (
    <div className="w-full">
      <NavBar></NavBar>
      <h2 className="heading">Files</h2>
      <div className="files-page">
        <div className="statics">
          <FileStatistics></FileStatistics>
        </div>
        <div className="files-wrapper d-grid gap-20 m-20 ">
          <Box
            img={0}
            div={"my-file.psd"}
            p={"youssef"}
            span1={"02/06/2023"}
            span2={"15.1MB"}
          ></Box>
          <Box
            img={1}
            div={"my-file.zip"}
            p={"saeed"}
            span1={"10/05/2023"}
            span2={"13.5MB"}
          ></Box>
          <Box
            img={2}
            div={"my-file.avi"}
            p={"admin"}
            span1={"12/06/2023"}
            span2={"1.5MB"}
          ></Box>
          <Box
            img={3}
            div={"my-file.psd"}
            p={"user"}
            span1={"25/10/2023"}
            span2={"11.5MB"}
          ></Box>
          <Box
            img={4}
            div={"my-file.dll"}
            p={"user2"}
            span1={"30/08/2023"}
            span2={"20.4MB"}
          ></Box>
          <Box
            img={5}
            div={"my-file.eps"}
            p={"uploader"}
            span1={"15/07/2023"}
            span2={"17.1MB"}
          ></Box>
          <Box
            img={6}
            div={"my-file.png"}
            p={"designer"}
            span1={"11/09/2023"}
            span2={"14.9MB"}
          ></Box>
          <Box
            img={0}
            div={"my-file.psd"}
            p={"youssef"}
            span1={"02/06/2023"}
            span2={"15.1MB"}
          ></Box>
          <Box
            img={1}
            div={"my-file.zip"}
            p={"saeed"}
            span1={"10/05/2023"}
            span2={"13.5MB"}
          ></Box>
          <Box
            img={2}
            div={"my-file.avi"}
            p={"admin"}
            span1={"12/06/2023"}
            span2={"1.5MB"}
          ></Box>
          <Box
            img={3}
            div={"my-file.psd"}
            p={"user"}
            span1={"25/10/2023"}
            span2={"11.5MB"}
          ></Box>
          <Box
            img={4}
            div={"my-file.dll"}
            p={"user2"}
            span1={"30/08/2023"}
            span2={"20.4MB"}
          ></Box>
          <Box
            img={5}
            div={"my-file.eps"}
            p={"uploader"}
            span1={"15/07/2023"}
            span2={"17.1MB"}
          ></Box>
          <Box
            img={6}
            div={"my-file.png"}
            p={"designer"}
            span1={"11/09/2023"}
            span2={"14.9MB"}
          ></Box>
          <Box
            img={0}
            div={"my-file.psd"}
            p={"youssef"}
            span1={"02/06/2023"}
            span2={"15.1MB"}
          ></Box>
          <Box
            img={1}
            div={"my-file.zip"}
            p={"saeed"}
            span1={"10/05/2023"}
            span2={"13.5MB"}
          ></Box>
          <Box
            img={2}
            div={"my-file.avi"}
            p={"admin"}
            span1={"12/06/2023"}
            span2={"1.5MB"}
          ></Box>
          <Box
            img={3}
            div={"my-file.psd"}
            p={"user"}
            span1={"25/10/2023"}
            span2={"11.5MB"}
          ></Box>
          <Box
            img={4}
            div={"my-file.dll"}
            p={"user2"}
            span1={"30/08/2023"}
            span2={"20.4MB"}
          ></Box>
          <Box
            img={5}
            div={"my-file.eps"}
            p={"uploader"}
            span1={"15/07/2023"}
            span2={"17.1MB"}
          ></Box>
        </div>
      </div>
    </div>
  );
}

export default Index;
