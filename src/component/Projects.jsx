import React from "react";
import ProjTile from "./ProjTile";

export default function Projects(props){
    return(
        <div id="projects" className={`pl-9 mt-36 mb-4 ${props.blur? "blur-sm shadow-lg z-2" :  ""}`}>
            <h1 className="text-2xl
        text-green font-semiHead  animate-fadeInM">Some of my work<hr className="w-3/4 border-slightFade
        border-y"/></h1>
        <ProjTile projName = {"Proj 1"} details = {"details here"}/>
        </div>
    )
}