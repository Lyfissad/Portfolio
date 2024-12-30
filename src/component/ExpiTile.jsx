import React from "react";




export default function ExpiTile(props){
    return(
        <div className="animate-fadeInL mt-6">
            <h1 className="text-faded text-lg animate-fadeInM">{props.position}</h1><h1 className="text-green text-lg animate-fadeInM">@ {props.company}</h1>
            <h3 className="text-faded animate-fadeInM">{props.timeLine}</h3>
        </div>
    )
}