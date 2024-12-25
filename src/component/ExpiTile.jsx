import React from "react";




export default function ExpiTile(props){
    return(
        <div className="animate-fadeInL">
            <h1 className="text-faded animate-fadeInM">{props.position}-{props.company}</h1>
            <h3 className="text-white animate-fadeInM">{props.timeLine}</h3>
        </div>
    )
}