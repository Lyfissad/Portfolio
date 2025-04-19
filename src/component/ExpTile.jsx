import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";



export default function ExpiTile(props){
    return(
        <div className="md:relative">
            <h1 className="text-faded text-xl whitespace-break-spaces md:relative ">{props.position}<span className="text-green text-lg"> @ {props.company}</span></h1>
            <h3 className="text-slate mt-4 md:relative">{props.timeLine}</h3>
            <ul className="text-slate mt-8 space-y-4 justify-start m-5 items-start md:max-w-[55%]">
                <li className="flex text-base text-left mr-3"><BiSolidRightArrow className="fill-green pr-2 size-[25px] mt-1"/>{props.details[1]}</li>
                <li className="flex text-base text-left mr-3"><BiSolidRightArrow className="fill-green pr-2 size-[25px] mt-1"/>{props.details[2]}</li>
                <li className="flex text-base text-left mr-3"><BiSolidRightArrow className="fill-green pr-2 size-[25px] mt-1"/>{props.details[3]}</li>
                <li className="flex text-base text-left mr-3"><BiSolidRightArrow className="fill-green pr-2 size-[25px] mt-1"/>{props.details[4]}</li>
                <li className="flex text-base text-left mr-3"><BiSolidRightArrow className="fill-green pr-2 size-[25px] mt-1"/>{props.details[5]}</li>
            </ul>
        </div>
    )
}