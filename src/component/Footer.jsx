import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



export default function Footer(){
    return(
        <div id = "contact" className="flex flex-col items-center">
            <h1 className="text-2xl text-center mt-60
        text-green font-geist animate-fadeInM">Get in Touch</h1>
            <h3 className="text-slightFade text-center justify-center m-12
             mr-8 text-md animate-fadeInL">I'm always for looking for
              new opportunities. My inbox is open, I'd love to
               talk and collaborate.</h3>
            <a className="no-underline" href="mailto:muazzin2009@gmail.com"><button className="transition ease-in-out delay-150 text-green
                     border-green border-solid 
                      border-2 p-2 pr-12 pl-12
                       rounded-md font-semiHead hover:animate-wiggle">Say Hello</button></a>
            <div className="flex space-x-12 mt-24 mb-7">
                <a href="https://github.com/Lyfissad" className="no-underline"><FaGithub className="fill-slightFade hover:animate-wiggle size-7"/></a>
                <a href="https://www.linkedin.com/in/sheikh-muazzin-azeem/" className="no-underline"><FaLinkedin className="fill-slightFade hover:animate-wiggle size-7"/></a>
            </div>
        </div>
    )
}