import { React, useState, useEffect, useRef } from "react"
import Header from "./component/Header";
import Intro from "./component/Intro";
import './App.css';
import SideNav from "./component/SideNav"
import About from "./component/About"
import Experience from "./component/Experience"
import Footer from "./component/Footer"
import { RiMenu4Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";










export default function App() {
  const [SideActive, setSideActive] = useState(false)
  const [ScrollingUp, setScrollingUp] = useState(true)
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

  var prevScrollpos = window.scrollY;
  window.onscroll = function() {
  var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      setScrollingUp(true)
    } else {
      setScrollingUp(false)
    }
    prevScrollpos = currentScrollPos;
  }

  return (
    <div className="bg-navy">
      <Header scrolledUp = {ScrollingUp} />
      <button className="opacity-0"></button>
      {SideActive? <IoMdClose
                    className={`size-16 z-30 transition-all duration-300 m-3 fill-green
                     cursor-pointer fixed
                      top-0 right-0 ${ScrollingUp? "h-16" : "h-0"}`}
                    onClick={()=>setSideActive(!SideActive)}
                    /> : <RiMenu4Line
                    className={`size-16 z-30 transition-all duration-300 m-3 fill-green
                      cursor-pointer fixed
                       top-0 right-0 ${ScrollingUp? "h-16" : "h-0"}`}s
                      onClick={()=>setSideActive(!SideActive)}
                />}
      <Intro blur = {SideActive} />
      {SideActive && <div className="w-1/5 h-5/6 fixed bottom-7 z-30" onClick = {()=>setSideActive(false)}></div>}
      {<SideNav show = {SideActive} />}
      <div ref={ref} style={{ minHeight: '300px'}}>
        {isVisible && <About blur = {SideActive}/>}
      </div>
      {isVisible && <Experience blur = {SideActive} />}
      <div ref={ref} style={{ minHeight: '300px'}}>
      {isVisible && <Footer blur = {SideActive}/>}
      </div>
    </div>
  );
}

 
