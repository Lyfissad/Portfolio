import React from "react";
import { FaGithub } from "react-icons/fa";



export default function ProjTile(props){
    return(
        <div className="animate-fadeInL mt-7 bg-lightNavy w-[92%] h-[415px] md:h-[30rem] lg:h-[30rem] shadow-3xl rounded-lg relative">
            <div className="ml-5 pt-6">
                <h3 className="text-lg text-green font-geist">Featured Project</h3>
                <h2 className="text-slightFade md:hover:text-green md:cursor-pointer mt-5 font-semiHead text-xl md:text-2xl">
                {props.projName}
                </h2>
                <h4 className="text-slate mt-8 text-left pr-5 text-md font-semiHead w-5/6 md:w-3/4 md:text-sm xl:text-lg lg:text-base h-48">
                {props.details}
                </h4>
            </div>
            <a
                href={props.gitAddress}
                rel="noreferrer"
                target="_blank"
                className="absolute bottom-4 left-5 size-7"
            >
                <FaGithub className="fill-slightFade hover:animate-pulse hover:fill-green hover:-translate-y-1 transition-transform duration-250 size-7" />
            </a>

            <h4 className="absolute bottom-4 right-5 text-darkSlate hover:text-green cursor-pointer font-semibold text-sm md:text-md xl:text-lg">
                {props.stacks}
            </h4>
        </div>
)
}