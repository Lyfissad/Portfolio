import { React, useState } from "react"
import Header from "./component/Header";
import Intro from "./component/Intro";
import './App.css';
import SideNav from "./component/SideNav"
import About from "./component/About"
import { RiMenu4Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";






export default function App() {
  const [SideActive, setSideActive] = useState(false)
  return (
    <div className="bg-navy">
      <Header />
      {SideActive? <IoMdClose 
                    className="size-16 m-3 fill-green
                     cursor-pointer absolute
                      top-0 right-0"
                    onClick={()=>setSideActive(!SideActive)}
                    /> : <RiMenu4Line
                    className="size-16 m-3
                     fill-green cursor-pointer
                      absolute top-0 right-0"
                      onClick={()=>setSideActive(!SideActive)}
                />}
      <Intro blur = {SideActive} />
      {SideActive && <div className="w-1/5 h-5/6 absolute bottom-7" onClick = {()=>setSideActive(false)}></div>}
      {<SideNav show = {SideActive} />}
      <About blur = {SideActive} />
    </div>
  );
}

 
