import React from "react";




export default function ExpiTile(props){
    return(
        <div className="animate-fadeInM">
            <h1 className="text-white">{props.position}{props.company}</h1>
            <h3 className="text-white">{props.timeLine}</h3>
        </div>
    )
}