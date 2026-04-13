import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLaout";
import { Component } from "react";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLaout from "../layout/AuthLaout";
import Login from "../pages/Home/Auth/Login/Login";
import Register from "../pages/Home/Auth/Register/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    element:<RootLayout></RootLayout>,
    children:[
      {
        index:true,
        Component:Home

      },
      {
        path:'/coverage',
        loader:()=>fetch('/service_center.json').then(res=>res.json()),
        element:<Coverage />
      }
      
    ]
  },
  {
    path:'/',
    Component:AuthLaout,
    children:[
      {
        path:'/login',
        Component:Login
      },
      {
        path:"/register",
        Component:Register
      }
    ]
  }
]);