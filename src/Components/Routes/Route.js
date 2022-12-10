import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import Home from "../Home/Home";
import Root from "../Root/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "*",
        element: <Home></Home>,
      },
    ],
  },
]);
export default router;
