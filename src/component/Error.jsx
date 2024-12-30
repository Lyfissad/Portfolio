import React from "react";
import { NavLink } from "react-router-dom";


export default function ErrorMess(){
    return(
        <div>
            <h1 className="text-2xl
        text-green font-geist text-center mb-8 mt-64 animate-fadeInM">You encountered an error.</h1>
            <NavLink to="/"><button className="text-green
                     border-green border-solid size-14 w-40
                      border-2 rounded-md animate-fadeInL text-xl m-10 ml-32
                    font-geist hover:animate-wiggle">Home</button></NavLink>
        </div>
    )
}