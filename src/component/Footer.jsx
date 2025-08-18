import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



export default function Footer(){
    return(
        <div id = "footer" className="flex flex-col mt-[200vh] md:mt-[100vh] lg:mt-[120vh] items-center">
            <h1 className="text-2xl text-center mt-60
        text-green font-semiHead md:text-5xl animate-fadeInM">Get in Touch</h1>
            <h3 className="text-slate text-center justify-center m-16 md:my-16 md:mx-52 text-md animate-fadeInL">Have a project in mind or just want to chat? I'm always open to new opportunities and collaborations. Feel free to reach out! 🚀</h3>
            <a className="no-underline" href="mailto:muazzin2009@gmail.com"><button className="transition ease-in-out delay-150 text-green
                     border-green border-solid 
                      border p-2 pr-12 pl-12
                       rounded-md font-semiHead md:hover:bg-green md:hover:text-navy hover:animate-pulse hover:-translate-y-1">Say Hello</button></a>
            <div className="flex space-x-12 mt-24 mb-7 md:invisible">
                <a href="https://github.com/Lyfissad" className="no-underline"><FaGithub className="fill-slightFade hover:animate-wiggle size-7"/></a>
                <a href="https://www.linkedin.com/in/sheikh-muazzin-azeem/" className="no-underline"><FaLinkedin className="fill-slightFade hover:animate-wiggle size-7"/></a>
            </div>
            <p className="text-darkSlate hover:text-green items-center text-sm font-semibold relative bottom-12 xs:invisible md:visible">Built by Sheikh Muazzin Azeem</p>
        </div>
    )
}