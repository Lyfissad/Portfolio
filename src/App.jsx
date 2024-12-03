import { React, useState, useEffect, useRef } from "react"
import Header from "./component/Header";
import Intro from "./component/Intro";
import './App.css';
import SideNav from "./component/SideNav"
import About from "./component/About"
import { RiMenu4Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";










export default function App() {
  const [SideActive, setSideActive] = useState(false)
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it becomes visible
        }
      },
      {
        threshold: 0.3, // Trigger when 10% of the component is visible
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);
  console.log("in view:", isVisible)
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
      <div ref={ref} style={{ minHeight: '300px'}}>
        {isVisible && <About />}
      </div>
    </div>
  );
}

 
