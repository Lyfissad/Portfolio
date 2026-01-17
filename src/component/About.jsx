import React from "react";
import { VscDebugBreakpointData } from "react-icons/vsc";







export default function About(props){
    return(
    <div id="about" className={`ml-9 relative md:left-[15%] midlg:ml-5 mb-4 mt-[30vh] md:mt-[30vh] ${props.blur? "blur-sm shadow-lg z-2" :  ""}`}>

        <div className="flex-col gap-4">
        
        <h1 className="text-2xl
        text-green font-semiHead relative
         animate-fadeInM md:text-4xl">About me</h1>
         <hr className="w-10/12 md:w-3/5 relative top-4 md:top-6 border-darkSlate
         border-y"/>
        
        </div>
        
        <div className="text-slate relative text-left font-semiHead justify-center m-1 mr-8 text-[15px] md:text-[18px] md:leading-relaxed smmid:max-w-[90%] md:max-w-[35%] md:relative animate-fadeInNoMove">
             <h4 className="mt-12 md:mt-24 flex text-start"> 
            I hold a Bachelor’s degree in Computer Science from Forman Christian College University, completed
             in 2022. During my final year at university, I worked as a React developer on Upwork for about a year,
              gaining hands-on experience building dynamic web applications and collaborating with international
            clients.
            </h4>
            <h4 className="mt-4">
                After graduation, I joined <a className="text-green no-underline cursor-pointer" href="https://vodworks.com/"><span className="inline-block transition-all hover:-translate-y-0.5">Vodworks</span> </a> as a Technical Engineer, where I further strengthened my skills
                 in system integration and technical problem-solving. I later worked 
                 at <a className="text-green no-underline cursor-pointer" href = "https://pk.linkedin.com/company/synares"><span className="inline-block transition-all hover:-translate-y-0.5">Synares Systems</span> </a>
            as a React Engineer, focusing on developing user-centric web applications and optimizing frontend performance.
                   Alongside my professional experience, I am currently pursuing a Master’s degree in Data Science at FAST Lahore,
                    expanding my expertise in data-driven systems and analytics.</h4>
            <h4 className="mt-4">
                My goal is to continue advancing in the field by taking on senior technical roles and
                         contributing to innovative software solutions, and I am actively seeking new opportunities
                          where I can apply and grow my skill set.
            </h4>        
            
            <ul  className="grid grid-cols-2 gap-4 mt-7 font-geist text-sm">
                <li className="mb-4 flex gap-2"><VscDebugBreakpointData  className="fill-green"/> JavaScript(ES6+)</li>
                <li className="mb-4 flex gap-2"><VscDebugBreakpointData className="fill-green"/> React.js</li>
                <li className="mb-4 flex gap-2"><VscDebugBreakpointData className="fill-green"/> Tailwind CSS</li>
                <li className="mb-4 flex gap-2"><VscDebugBreakpointData className="fill-green"/> Node.js</li>
                <li className="mb-4 flex gap-2"><VscDebugBreakpointData className="fill-green"/> MongoDB, FireBase</li>
                <li className="mb-4 flex gap-2"><VscDebugBreakpointData className="fill-green"/> Python</li>
            </ul>
            
            <div className="relative mt-28 mx-auto md:left-72 lg:-top-[5vh] md:-top-[10vh] midlg:left-[120%] lg:left-[130%] md:absolute midlg:absolute lg:absolute smmid:size-80 md:size-60 lg:size-80 size-64">
            
            <img src=".\assets\PortfolioSitePic1.jpeg" alt="profilePic" className="rounded-md cursor-pointer hover:animate-pulse  w-full h-full"/>
                
            <div className="absolute inset-0
                rounded-md md:hover:opacity-0
                transition-all cursor-pointer duration-400
                origin-center bg-green opacity-70
                mix-blend-multiply">
            </div>
        </div>
    </div>
        
    </div>
    )
}
