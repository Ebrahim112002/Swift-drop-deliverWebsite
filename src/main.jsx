import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from "react-router/dom";
import { router } from './routes/Router.jsx';
import Authprovider from './Context/Authprovider.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Authprovider>
    <RouterProvider router={router} />,
  </Authprovider>
  </StrictMode>,
)
