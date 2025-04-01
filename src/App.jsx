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
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";










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
    setSideActive(false)
  }

  return (
    <div ref={ref} className="bg-navy">
      <Header scrolledUp = {ScrollingUp} scrollTosec = {scrollToSection} />
      <button className="opacity-0"></button>
      {SideActive? <IoMdClose
                    className={`z-30 transition-all duration-300 m-3 fill-green
                     cursor-pointer fixed
                      top-0 right-0 md:hidden ${ScrollingUp? "size-16" : "size-0"}`}
                    onClick={()=>setSideActive(!SideActive)}
                    /> : <RiMenu4Line
                    className={`z-30 transition-all duration-300 m-3 fill-green
                      cursor-pointer fixed
                       top-0 right-0 md:hidden ${ScrollingUp? "size-16" : "size-0"}`}s
                      onClick={()=>setSideActive(!SideActive)}
                />}
      <Intro blur = {SideActive} />
      {SideActive && <div className="w-1/5 h-5/6 fixed bottom-7 z-30" onClick = {()=>setSideActive(false)}></div>}
      {<SideNav show = {SideActive} flip = {scrollToSection} />}
      <div>
        {isVisible && <About blur = {SideActive}/>}
      </div>
      <div>
      {isVisible && <Experience blur = {SideActive} />}
      </div>
      <div style={{ minHeight: '300px'}}>
      {isVisible && <Projects blur = {SideActive}/>}
      </div>
      <div style={{ minHeight: '300px'}}>
      {isVisible && <Footer blur = {SideActive}/>}
      </div>
      <ul className="fixed bottom-32 left-6 md:visible xs:invisible">
        <li className="mb-8"><a href="https://github.com/Lyfissad" className="no-underline"><FaGithub className="fill-slightFade size-7 transition-all duration-300 hover:fill-green hover:-translate-y-1"/></a></li>
        <li><a href="https://www.linkedin.com/in/sheikh-muazzin-azeem/" className="no-underline"><FaLinkedin className="fill-slightFade size-7 transition-all duration-300 hover:fill-green hover:-translate-y-1"/></a></li>
      </ul>
      <hr className="md:visible h-24 bottom-1 w-px fixed left-9 bg-slightFade  xs:invisible"></hr>
      <a href="mailto:muazzin2009@gmail.com" className="no-underline"><p className="rotate-90 origin-bottom text-slightFade font-semiHead fixed -right-11 bottom-56 md:visible xs:invisible transition-all duration-300 hover:text-green hover:-translate-y-1">muazzin2009@gmail.com</p></a>
      <hr className="md:visible h-24 bottom-1 w-px fixed right-9 bg-slightFade xs:invisible"></hr>
    </div>
  );
}

 
