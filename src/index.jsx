import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import LogoPage from "./LogoPage"
import ErrorMess from "./component/Error.jsx"
import {
  createBrowserRouter,Route,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom";
import ExpJS from "./experience.json"
import ExpiTile from './component/ExpTile.jsx';


const expObj = ExpJS[0].experience


const router = createBrowserRouter(createRoutesFromElements(
    <Route exact path='/' errorElement={<ErrorMess />} element={<LogoPage />}>
        <Route index element={<ExpiTile company = {expObj.first.Name}
                                       position={expObj.first.position} 
                                       timeLine={expObj.first.timeline} 
                                       details={expObj.first.detail}/>}/>
        <Route exact path='/softpers' element={<ExpiTile company = {expObj.second.Name} 
                                                          position={expObj.second.position} 
                                                          timeLine={expObj.second.timeline} 
                                                          details={expObj.second.detail}/>}/>
        <Route exact path='/vodworks' element={<ExpiTile company = {expObj.third.Name}
                                                        position= {expObj.third.position} 
                                                        timeLine = {expObj.third.timeline} 
                                                        details={expObj.third.detail}/>}/>
    </Route>
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

