import { React, useState } from "react"
import { TbHexagonLetterMFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";



export default function Header(props){
    function scrollBackup(){
        window.scrollTo(0,0)
    } 
    return(
        <>
            <header id="header" className = {`bg-navy opacity-85 fixed flex transition-all z-30 overflow-hidden duration-300 shadow-2xl animate-fadeInS justify-between w-full ${props.scrolledUp? "h-20" : "h-0"}`}>
                <NavLink to="/" onClick={scrollBackup} className="w-16"><TbHexagonLetterMFilled className= {`m-3 cursor-pointer overflow-hidden fill-green scroll-smooth transition-all duration-300 ${props.scrolledUp? "size-16" : "size-0"}`}/></NavLink>
                <div className="inline-flex mt-6 md:visible sm:invisible xs:invisible">
                <ul className="inline-flex text-slightFade text-xl font-semiHead ">
                    <li onClick={()=>props.scrollTosec("about")} className="mr-6 hover:text-green cursor-pointer">About</li>
                    <li onClick={()=>props.scrollTosec("exp")} className="mr-6 hover:text-green cursor-pointer">Experience</li>
                    <li onClick={()=>props.scrollTosec("projects")} className="mr-6 hover:text-green cursor-pointer">Projects</li>
                    <li onClick={()=>props.scrollTosec("contact")} className="mr-6 hover:text-green cursor-pointer">Contact</li> 
                </ul>
                <a href="https://drive.google.com/file/d/1KyjFryb4iRJLfsl9rWek0TAwEUeD67j3/view?usp=drive_link">
                <button className="transition ease-in-out delay-150 text-green
                     border-green border-solid size-8
                      border w-24 text-center mr-4 text-sm
                       rounded-sm relative
                        font-semiHead" >Resume</button></a>
                </div>
            </header>
        </>
    )
}


