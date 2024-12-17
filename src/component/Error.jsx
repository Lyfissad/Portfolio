import React from "react";
import { NavLink } from "react-router-dom";


export default function ErrorMess(){
    return(
        <div>
            <h1 className="text-2xl
        text-green font-geist text-center mt-44 mb-8 animate-fadeInM">You encountered an error.</h1>
            <NavLink to="/"><button className="transition ease-in-out delay-150 text-green
                     border-green border-solid size-14 w-40 text-2xl
                      border-2  ml-40
                       rounded-md relative
                        font-geist hover:animate-wiggle">Home</button></NavLink>
        </div>
    )
}