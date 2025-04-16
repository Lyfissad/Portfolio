import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";



export default function ExpiTile(props){
    return(
        <div className="animate-fadeInL mt-7 md:relative md:left-[37%] midlg:left-[25rem] lg:left-[25rem]">
            <h1 className="text-faded text-xl animate-fadeInM whitespace-break-spaces md:relative md:left-[3rem]">{props.position}<span className="text-green text-lg animate-fadeInM"> @ {props.company}</span></h1>
            <h3 className="text-slightFade mt-4 animate-fadeInM  md:relative md:left-[3rem]">{props.timeLine}</h3>
            <ul className="text-slightFade mt-8 space-y-4 md:max-w-[40%] midlg:max-w-[35%] md:ml-[3rem]">
                <li className="flex text-base text-left mr-3"><BiSolidRightArrow className="fill-green pr-2 size-[25px] mt-1"/>{props.details[1]}</li>
                <li className="flex text-base text-left mr-3"><BiSolidRightArrow className="fill-green pr-2 size-[25px] mt-1"/>{props.details[2]}</li>
                <li className="flex text-base text-left mr-3"><BiSolidRightArrow className="fill-green pr-2 size-[25px] mt-1"/>{props.details[3]}</li>
                <li className="flex text-base text-left mr-3"><BiSolidRightArrow className="fill-green pr-2 size-[25px] mt-1"/>{props.details[4]}</li>
                <li className="flex text-base text-left mr-3"><BiSolidRightArrow className="fill-green pr-2 size-[25px] mt-1"/>{props.details[5]}</li>
            </ul>
        </div>
    )
}