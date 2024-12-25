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
import ExpJS from "./experience.json"
import ExpiTile from './component/ExpiTile';


console.log(ExpJS[0].experience.first.Name)


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' errorElement={<ErrorMess />} element={<LogoPage />}>
      <Route index element={<ExpiTile company = "Vodworks"/>}/>
      <Route path='vodworks' element={<ExpiTile company = {ExpJS[0].experience.third.Name}/>}/>
      <Route path='softpers' element={<ExpiTile company = {ExpJS[0].experience.second.Name} position={ExpJS[0].experience.second.position} timeLine="2 days"/>}/>
  </Route>
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

