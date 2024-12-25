import React from "react";
import { NavLink } from "react-router-dom";


export default function ErrorMess(){
    return(
        <div>
            <h1 className="text-2xl
        text-green font-geist text-center mb-8 mt-64 animate-fadeInM">You encountered an error.</h1>
            <NavLink to="/"><button className="transition ease-in-out delay-150 text-green
                     border-green border-solid size-14 w-40 text-2xl
                      border-2  items-center
                       rounded-md absolute
                        font-geist hover:animate-wiggle">Home</button></NavLink>
        </div>
    )
}