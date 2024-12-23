import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LogoPage from "./LogoPage"
import ErrorMess from "./component/Error"
import {
  createBrowserRouter,Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

import ExpiTile from './component/ExpiTile';





const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' errorElement={<ErrorMess />} element={<LogoPage />}>
      <Route index element={<ExpiTile company = "Vodworks"/>}/>
      <Route path='vodworks' element={<ExpiTile company = "Vodworks"/>}/>
      <Route path='softpers' element={<ExpiTile company = "Softpers" position="React Developer" timeLine="2 days"/>}/>
  </Route>
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

