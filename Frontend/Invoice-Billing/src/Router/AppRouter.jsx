import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Applayout from "../components/layouts/Applayout"; 
import Signup from "../components/pages/Signup";
import Login from "../components/pages/Login"; 
import PageNotFound from "../components/pages/PageNotFound";


const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />, 
    children: [
      {
        path: "/",
        element: <Signup />,
      },
      {
        path: "/login", 
        element: <Login />,
      },
      {
        path: "/*", 
        element: <PageNotFound />,
      }
     
    ]
  }
]);

export default AppRouter;
