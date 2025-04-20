import React from "react";
import { FaGithub } from "react-icons/fa";



export default function ProjTile(props){
    return(
        <div className="animate-fadeInL mt-7 bg-lightNavy w-[92%] h-[415px] md:h-96 shadow-3xl rounded-lg">
            <div className="ml-5 relative midlg:min-h-[600px] pt-6">
                <h3 
                className= "text-lg text-green font-geist ">
                     Featured Project
                     </h3>
                <h2 className=" text-slightFade md:hover:text-green md:cursor-pointer mt-5 font-semiHead text-xl md:text-2xl">{props.projName}</h2>
                <h4 className="text-slate mt-8 text-left pr-5 text-md
                 font-semiHead w-5/6 md:w-3/4 md:text-md midlg:text-sm h-48">{props.details}</h4>
                <div className="flex relative -bottom-12 md:-bottom-2">
                <a 
                href="https://github.com/Lyfissad" 
                className="relative z-30 md:ml-5 size-7">
                    <FaGithub 
                    className="fill-slightFade
                 md:absolute md:hover:animate-pulse md:hover:fill-green md:hover:-translate-y-1
                  transition-transform duration-250 size-7"/>
                  </a>
                <h4 
                className="text-darkSlate md:hover:text-green md:cursor-pointer 
                whitespace-break-spaces absolute right-5 top-1 font-semibold text-md md:text-lg">
                    {props.stacks}
                    </h4>
                </div>
            </div>
        </div>
    )
}