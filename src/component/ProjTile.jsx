import React from "react";
import { FaGithub } from "react-icons/fa";



export default function ProjTile(props){
    return(
        <div className="animate-fadeInL mt-7 bg-lightNavy w-[92%] h-96 md:w-{10%} shadow-2xl rounded-lg">
            <div className="ml-5 pt-6">
                <h3 className= "text-lg text-green font-geist animate-fadeInM "> Featured Project</h3>
                <h2 className=" text-green mt-5 font-semiHead text-2xl">{props.projName}</h2>
                <h4 className="text-slate mt-8 text-left pr-5 text-md
                 font-semiHead w-72 h-48 animate-fadeInM">{props.details}</h4>
                 <h4 className="text-green right-11     font-geist text-md fixed">{props.stacks}</h4>
            </div>
            <a href="https://github.com/Lyfissad" className="no-underline"><FaGithub className="fill-slightFade
             ml-6 hover:animate-pulse size-7"/></a>    
        </div>
    )
}