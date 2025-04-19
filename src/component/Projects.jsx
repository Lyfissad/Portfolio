import React from "react";
import ProjTile from "./ProjTile";
import projects from "../project.json"

export default function Projects(props){
    const proJObj = projects[0].projects
    return(
        <div id="projects" className={`pl-9 mt-[30vh] md:mt-[60vh] mb-4 ${props.blur? "blur-sm shadow-lg z-2" :  ""}`}>
            <h1 className="text-2xl
        text-green font-semiHead  animate-fadeInM">Some of my work<hr className="w-3/4 border-slightFade
        border-y"/></h1>
        <ProjTile projName = {proJObj.DMS.title} details = {proJObj.DMS.det} stacks = {proJObj.DMS.sNt}/>
        <ProjTile projName = {proJObj.Hospital.title} details = {proJObj.Hospital.det} stacks= {proJObj.Hospital.sNt}/>
        </div>
    )
}