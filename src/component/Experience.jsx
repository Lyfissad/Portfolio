import React from "react"
import { Outlet, NavLink } from "react-router-dom"



export default function Experience(props){
    return(
        <div className={`pl-8 mb-4 relative top-8 ${props.blur? "blur-sm shadow-lg z-2" :  ""}`}>
        <h2 className="text-2xl
        text-green font-geist mt-6 mb-8 animate-fadeInM">Where I've Worked<hr className="w-3/4 border-green
        border-y"/></h2>
        <div className="flex text-slightFade text-lg gap-16 overflow-x-scroll">
            <NavLink to={"/"} className="bg-navy hover:bg-lightNavy text-green">Synares Systems</NavLink>
            <NavLink to={"/softpers"} className="bg-navy hover:bg-lightNavy focus:text-green">Softpers</NavLink>
            <NavLink to={"/vodworks"} className="bg-navy hover:bg-lightNavy focus:text-green">Vodworks</NavLink>
            <NavLink to={"/error"} className="bg-navy hover:bg-lightNavy focus:text-green">Error test</NavLink>
        </div>
        <Outlet className="animate-fadeInM"  />
        </div>
        
    )
}