import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import Home from "../Home/Home";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
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
        path: "project/:id",
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/project/${params.id}`);
        },
        element: <ProjectDetails></ProjectDetails>,
      },
      {
        path: "*",
        element: <Home></Home>,
      },
    ],
  },
]);
export default router;
