import { React } from "react"





export default function Header(){
    return(
        <>
            <header id="header" className = "bg-navy h-20 block transition-all duration-300 shadow-2xl animate-fadeInS justify-between w-full">
                <img src="letter-m.png" alt="logo" className="size-16 m-3 cursor-pointer"/>
            </header>
        </>
    )
}


var prevScrollpos = window.scrollY;
window.onscroll = function() {
var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0%";
  } else {
    document.getElementById("header").style.top = "80px";
  }
  prevScrollpos = currentScrollPos;
}