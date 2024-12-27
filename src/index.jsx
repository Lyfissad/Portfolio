import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LogoPage from "./LogoPage"
import ErrorMess from "./component/Error"
import {
  createBrowserRouter,Route,
  RouterProvider,
  createRoutesFromElements,Routes
} from "react-router-dom";
import ExpJS from "./experience.json"
import ExpiTile from './component/ExpiTile';


const expObj = ExpJS[0].experience


const router = createBrowserRouter(createRoutesFromElements(
  <Routes>
    <Route exact path='/' element={<LogoPage />}>
        <Route exact path='/synares' element={<ExpiTile company = {expObj.first.Name} position={expObj.first.position} timeLine={expObj.first.timeline}/>}/>
        <Route exact path='/softpers' element={<ExpiTile company = {expObj.second.Name} position={expObj.second.position} timeLine={expObj.second.timeline}/>}/>
        <Route exact path='/vodworks' element={<ExpiTile company = {expObj.third.Name} position= {expObj.third.position} timeLine = {expObj.third.timeline}/>}/>
    </Route>
  </Routes>
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

