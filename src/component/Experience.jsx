import React from "react"
import { Outlet, NavLink } from "react-router-dom"



export default function Experience(props){
    const [activeTab, setActiveTab] = React.useState('ss')

    function FlipState(newValue){
        setActiveTab(newValue)
    }


    return(
        <div className={`pl-8 mb-4 relative top-8 ${props.blur? "blur-sm shadow-lg z-2" :  ""}`}>
        <h2 className="text-2xl
        text-green font-geist mt-6 mb-8 animate-fadeInM">Where I've Worked<hr className="w-3/4 border-green
        border-y"/></h2>
        <div className="flex text-slightFade ml-2 text-lg gap-16 overflow-x-scroll h-20 pt-6">
            <NavLink to={"/"} onClick={() => FlipState("ss")} className={`bg-navy text-base font-geist hover:bg-navy focus:bg-lightNavy ${activeTab==="ss"? "text-green transition-all duration-200 ease-in-out -translate-y-3": "text-faded"}`}>Synares Systems</NavLink>
            <NavLink to={"/softpers"} onClick={() => FlipState("soft")} className={`bg-navy text-base hover:bg-lightNavy focus:bg-lightNavy ${activeTab==="soft"? "text-green transition-all duration-200 ease-in-out -translate-y-3": "text-faded"}`}>Softpers</NavLink>
            <NavLink to={"/vodworks"} onClick={() => FlipState("vod")} className={`bg-navy text-base hover:bg-lightNavy focus:bg-lightNavy ${activeTab==="vod"? "text-green transition-all duration-200 ease-in-out -translate-y-3": "text-faded"}`}>Vodworks</NavLink>
            <NavLink to={"/err"} className="bg-navy hover:bg-lightNavy focus:text-green">Error test</NavLink>
        </div>
        <Outlet className="animate-fadeInM"  />
        </div>
        
    )
}