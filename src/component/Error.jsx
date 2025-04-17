import React from "react";
import { NavLink } from "react-router-dom";


export default function ErrorMess(){
    return(
        <div>
            <h1 className="text-2xl
        text-green font-semiHead text-center mb-8 mt-64 animate-fadeInS">You encountered an error.</h1>
            <NavLink to="/"><button className="text-green
                     border-green border-solid size-14 w-40 transition-transform duration-250
                      border-2 rounded-md animate-fadeInM text-xl flex  m-auto justify-center items-center
                    font-semiHead hover:-translate-y-2">Home</button></NavLink>
        </div>
    )
}