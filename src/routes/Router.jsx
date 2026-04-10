import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLaout";
import { Component } from "react";
import Home from "../pages/Home/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element:<RootLayout></RootLayout>,
    children:[
      {
        index:true,
        Component:Home
      }
      
    ]
  },
]);