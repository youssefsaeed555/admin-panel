//core
import { createBrowserRouter } from "react-router-dom";

//custom
import Dashboard from "./pages/dashboard/Dashboard";
import Settings from "./pages/setting/Settings";
import Profile from "./pages/profile/Profile";
import Layout from "./Layout/Layout";
import Projects from "./pages/projects/Projects";
import Courses from "./pages/courses/Courses";
import Friends from "./pages/friends/Friends";
import Files from "./pages/files/Files";
import Plans from "./pages/subscripe/Plans";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/friends",
        element: <Friends />,
      },
      {
        path: "/files",
        element: <Files />,
      },
      {
        path: "/plans",
        element: <Plans />,
      },
    ],
  },
]);
