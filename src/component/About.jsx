import React from "react";
import { VscDebugBreakpointData } from "react-icons/vsc";







export default function About(props){
    return(
    <div id="about" className={`pl-9 mb-4 mt-[30vh] md:mt-[30vh] ${props.blur? "blur-sm shadow-lg z-2" :  ""}`}>
        <h1 className="text-2xl
        text-green font-semiHead
         animate-fadeInM md:text-4xl md:relative md:left-[20.5%]">About me<hr className="w-2/4 border-darkSlate relative left-[32%] md:left-[12%] bottom-4
         border-y"/></h1>
        <div className="text-slate text-left font-semiHead justify-center m-1 mr-8 text-[15px] md:text-[17px] md:leading-relaxed md:max-w-[30%] md:relative md:left-[20%] animate-fadeInNoMove">
            <h4 className="mt-5">
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
            <ul  className="grid grid-cols-2 gap-4 mt-7 font-geist text-sm">
                <li className="mb-4 flex gap-2"><VscDebugBreakpointData  className="fill-green"/> JavaScript(ES6+)</li>
                <li className="mb-4 flex gap-2"><VscDebugBreakpointData className="fill-green"/> React.js</li>
                <li className="mb-4 flex gap-2"><VscDebugBreakpointData className="fill-green"/> Tailwind CSS</li>
                <li className="mb-4 flex gap-2"><VscDebugBreakpointData className="fill-green"/> Node.js</li>
                <li className="mb-4 flex gap-2"><VscDebugBreakpointData className="fill-green"/> MongoDB, FireBase</li>
                <li className="mb-4 flex gap-2"><VscDebugBreakpointData className="fill-green"/> Python</li>
             </ul>
             <img src=".\assets\PortfolioSitePic1.jpeg" alt="profilePic" className="rounded-md cursor-pointer hover:animate-pulse  size-64 m-auto mb-36 mt-20 md:relative md:left-[110%] md:bottom-[550px] md:size-80"/>
             <div className="absolute inset-0 size-64 top-[684px] left-[18.25%] md:size-80 md:left-[123.5%] md:top-[85px] rounded-md md:hover:opacity-0 transition-all cursor-pointer duration-400 origin-center bg-green opacity-70 mix-blend-multiply">
             </div>
        </div>
    </div>
    )
}