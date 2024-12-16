import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LogoPage from "./LogoPage"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Experience from './component/Experience';
import ExpiTile from './component/ExpiTile';



const router = createBrowserRouter([
  {
    path: "/",
    element: <LogoPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

