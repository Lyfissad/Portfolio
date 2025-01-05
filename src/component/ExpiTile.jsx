import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";



export default function ExpiTile(props){
    return(
        <div className="animate-fadeInL mt-7">
            <h1 className="text-faded text-xl animate-fadeInM whitespace-break-spaces ">{props.position}<span className="text-green text-lg animate-fadeInM"> @ {props.company}</span></h1>
            <h3 className="text-slightFade mt-4 animate-fadeInM">{props.timeLine}</h3>
            <ul className="text-slightFade mt-8 space-y-4">
                <li className="flex text-base text-left pr-3"><BiSolidRightArrow className="fill-green mr-1"/>{props.details[1]}</li>
                <li className="flex text-base text-left pr-3"><BiSolidRightArrow className="fill-green mr-1"/>{props.details[2]}</li>
                <li className="flex text-base text-left pr-3"><BiSolidRightArrow className="fill-green mr-1"/>{props.details[3]}</li>
                <li className="flex text-base text-left pr-3"><BiSolidRightArrow className="fill-green mr-1"/>{props.details[4]}</li>
                <li className="flex text-base text-left pr-3"><BiSolidRightArrow className="fill-green mr-1"/>{props.details[5]}</li>
            </ul>
        </div>
    )
}