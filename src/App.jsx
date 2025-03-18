import { React, useState, useEffect, useRef } from "react"
import Header from "./component/Header";
import Intro from "./component/Intro";
import './App.css';
import SideNav from "./component/SideNav"
import About from "./component/About"
import Experience from "./component/Experience"
import Projects from "./component/Projects";
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
           // Stop observing after it becomes visible
        }
      },
      {
        threshold: 0.2, // Trigger when 30% of the component is visible
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);
  

  var prevScrollpos = window.scrollY; //scroll appearing top banner
  window.onscroll = function() {
  var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      setScrollingUp(true)
    } else {
      setScrollingUp(false)
    }
    prevScrollpos = currentScrollPos;
  }

  function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior:"smooth"})
    setSideActive(!SideActive)
  }

  return (
    <div ref={ref} className="bg-navy">
      <Header scrolledUp = {ScrollingUp} />
      <button className="opacity-0"></button>
      {SideActive? <IoMdClose
                    className={`z-30 transition-all duration-300 m-3 fill-green
                     cursor-pointer fixed
                      top-0 right-0 ${ScrollingUp? "size-16" : "size-0"}`}
                    onClick={()=>setSideActive(!SideActive)}
                    /> : <RiMenu4Line
                    className={`z-30 transition-all duration-300 m-3 fill-green
                      cursor-pointer fixed
                       top-0 right-0 ${ScrollingUp? "size-16" : "size-0"}`}s
                      onClick={()=>setSideActive(!SideActive)}
                />}
      <Intro blur = {SideActive} />
      {SideActive && <div className="w-1/5 h-5/6 fixed bottom-7 z-30" onClick = {()=>setSideActive(false)}></div>}
      {<SideNav show = {SideActive} flip = {scrollToSection} />}
      <div style={{ minHeight: '300px'}}>
        {isVisible && <About blur = {SideActive}/>}
      </div>
      <div style={{ minHeight: '300px'}}>
      {isVisible && <Experience blur = {SideActive} />}
      </div>
      <div style={{ minHeight: '300px'}}>
      {isVisible && <Projects blur = {SideActive}/>}
      </div>
      <div style={{ minHeight: '300px'}}>
      {isVisible && <Footer blur = {SideActive}/>}
      </div>
    </div>
  );
}

 
