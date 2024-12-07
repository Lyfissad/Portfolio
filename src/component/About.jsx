import React from "react";
import { VscDebugBreakpointData } from "react-icons/vsc";







export default function About(props){
    return(
    <div className={`pl-9 mb-4 ${props.blur? `blur-sm  z-2 shadow-lg` :  ``}`}>
        <h1 className="text-3xl
        text-green font-geist animate-fadeInM">About me<hr className="w-3/4 border-green
         border-y"/></h1>
        <div className="text-slightFade text-left justify-center m-1 mr-8 text-md animate-fadeInL">
            <h4 className="mb-10 mt-10">
            I hold a Bachelor's degree in Computer Science from 
            Forman Christian College University, completed in 2022. During my
            final year at university, I worked as a React developer on Upwork
            for about a year, where I gained hands-on experience building
            dynamic web applications and collaborating with international clients.
            </h4>
            <h4>
            After graduation, I joined <a className="text-green no-underline cursor-pointer" href="https://vodworks.com/">Vodworks</a> as a Technical Engineer, where I 
            enhanced my skills in system integration. Currently, I am working
            at <a className="text-green no-underline cursor-pointer" href = "https://pk.linkedin.com/company/synares">Synares Systems</a> as a React Engineer, focusing on developing
            user-centric web applications and optimizing frontend 
            performance. My goal is to continue advancing in the field,
            taking on senior roles and contributing to innovative software
             solutions.</h4>
            <ul  className="columns-2 mt-5 font-geist text-sm">
                <li className="mb-4 flex gap-2"><VscDebugBreakpointData  className="fill-green"/> JavaScript(ES6+)</li>
                <li className="mb-4 flex gap-2"><VscDebugBreakpointData className="fill-green"/> React</li>
                <li className="mb-4 flex gap-2"><VscDebugBreakpointData className="fill-green"/> Tailwind/BootStrap</li>
                <li className="mb-4 flex gap-2"><VscDebugBreakpointData className="fill-green"/> Node.js</li>
                <li className="mb-4 flex gap-2"><VscDebugBreakpointData className="fill-green"/> MongoDB, FireBase</li>
                <li className="mb-4 flex gap-2"><VscDebugBreakpointData className="fill-green"/> Python</li>
             </ul>
             <img src="PortfolioSitePic1.jpeg" alt="profilePic" className="rounded-full cursor-pointer hover:animate-smallBounce size-64 m-auto mt-20"/>
        </div>
        
    </div>
    )
}