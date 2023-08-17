import { useState } from "react";
import { RouterProvider } from "react-router-dom";

import "./css/CustomClass.css";
import "./css/App.css";

import { router } from "./routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
