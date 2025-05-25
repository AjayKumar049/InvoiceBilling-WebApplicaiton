import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Applayout from "../components/layouts/Applayout"; 
import Signup from "../components/pages/Signup";
import Login from "../components/pages/Login"; 
import Notfound from "../components/Notfound";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />, 
    children: [
      {
        index: true,
        element: <Signup />,
      },
      {
        path: "/login", 
        element: <Login />,
      },
      {
        path: "*",
        element: <Notfound />,
      }
    ]
  }
]);

export default AppRouter;
