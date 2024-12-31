import React from "react";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";



export default function ExpiTile(props){
    return(
        <div className="animate-fadeInL mt-7">
            <h1 className="text-faded text-xl animate-fadeInM whitespace-break-spaces ">{props.position}<span className="text-green text-lg animate-fadeInM"> @ {props.company}</span></h1>
            <h3 className="text-slightFade mt-4 animate-fadeInM">{props.timeLine}</h3>
            <ul className="text-slightFade mt-16">
                <li className="flex text-lg"><VscDebugBreakpointDataUnverified className="fill-green"/>{props.details[1]}</li>
                <li className="flex text-lg"><VscDebugBreakpointDataUnverified className="fill-green"/>{props.details[2]}</li>
            </ul>
        </div>
    )
}