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
  const [hasFadedIn, setHasFadedIn] = useState({
    aboutFadedIn: false,
    expFadedIn: false,
    projFadedIn: false,
    footerFadedin: false
  });
  const [isVisible, setIsVisible] = useState("");
  const abouTref = useRef(null);
  const exPref = useRef(null);
  const proJref = useRef(null);
  const footeRref = useRef(null);
  var changingVisibleState = ""
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const componentId = entry.target.id
          switch(componentId){
            case "about":
              changingVisibleState = "aboutFadedIn"
              break
            case "experience":
              changingVisibleState = "expFadedIn" 
              break
            case "projects":
              changingVisibleState = "projFadedIn"
              break
            case "footer":
              changingVisibleState = "footerFadedin"
              break
          } 
        if (entry.isIntersecting) {
          setIsVisible(entry.target.id);
          setHasFadedIn((prevState) => ({
            ...prevState,
            [changingVisibleState]: true, // Set the specific component's fade-in to true
          }));
          observer.unobserve(entry.target)
           // Stop observing after it becomes visible
        }
      },
      {
        threshold: 0.6, // Trigger when 30% of the component is visible
      }
    )});


    const aboutTracker = abouTref.current
    const expTracker = exPref.current
    const projTracker = proJref.current
    const footerTracker = footeRref.current

    if (aboutTracker) observer.observe(aboutTracker);
    if (expTracker) observer.observe(expTracker);
    if (projTracker) observer.observe(projTracker);
    if (footerTracker) observer.observe(footerTracker);

    return () => {
      if (aboutTracker) observer.unobserve(aboutTracker);
      if (expTracker) observer.unobserve(expTracker);
      if (projTracker) observer.unobserve(projTracker);
      if (footerTracker) observer.unobserve(footerTracker);
    };

  },[]);
  
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
    <div className="bg-navy">
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
      <div ref={abouTref} id="about" className={`transition-all duration-1000 ${hasFadedIn.aboutFadedIn? "opacity-100 -translate-y-4": "opacity-0 translate-y-0"}`}>
      {<About isshowing={isVisible} blur = {SideActive}/>}
      </div>
      <div ref={exPref} id="experience" className={`transition-all duration-1000 ${hasFadedIn.expFadedIn? "opacity-100 -translate-y-4": "opacity-0 translate-y-0"}`}>
      {<Experience blur = {SideActive} />}
      </div>
      <div ref={proJref} id="projects" className={`transition-all duration-1000 ${hasFadedIn.projFadedIn? "opacity-100 -translate-y-4": "opacity-0 translate-y-0"}`}>
      {isVisible && <Projects blur = {SideActive}/>}
      </div>
      <div ref={footeRref} id="footer" className={`transition-all duration-1000 ${hasFadedIn.footerFadedin? "opacity-100 -translate-y-4": "opacity-0 translate-y-0"}`}>
      {isVisible && <Footer blur = {SideActive}/>}
      </div>
      <ul className="fixed bottom-32 left-[50px] md:visible xs:invisible">
        <li className="mb-8"><a href="https://github.com/Lyfissad" className="no-underline"><FaGithub className="fill-slightFade size-7 transition-all duration-300 animate-fadeInS hover:fill-green hover:-translate-y-1"/></a></li>
        <li><a href="https://www.linkedin.com/in/sheikh-muazzin-azeem/" className="no-underline"><FaLinkedin className="fill-slightFade size-7 transition-all duration-300 animate-fadeInS hover:fill-green hover:-translate-y-1"/></a></li>
      </ul>
      <hr className="md:visible h-24 bottom-1 w-px fixed transition-all animate-fadeInS left-16 bg-slightFade  xs:invisible"></hr>
      <a href="mailto:muazzin2009@gmail.com" className="no-underline"><p className="origin-bottom rotate-90 animate-fadeInNoMove text-slightFade font-semiHead fixed -right-[18px] bottom-56 md:visible xs:invisible transition-all duration-300 hover:text-green hover:-translate-y-1">muazzin2009@gmail.com</p></a>
      <hr className="md:visible h-24 bottom-1 w-px fixed right-16 animate-fadeInS bg-slightFade xs:invisible"></hr>
    </div>
  );
};