import { React, useState } from "react"
import Header from "./component/Header";
import Intro from "./component/Intro";
import './App.css';
import SideNav from "./component/SideNav"
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
      <Intro />
      {SideActive && <SideNav className = "bg-slate-900"/>} 
    </div>
  );
}

 
