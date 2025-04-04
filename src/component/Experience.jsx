import {React, useState} from "react"
import { Outlet, NavLink } from "react-router-dom"



export default function Experience(props){
    const [activeTab, setActiveTab] = useState('ss')


    function FlipState(newValue){
        setActiveTab(newValue)
    }
    

    return(
        <div id="exp" className={`pl-8 mb-4 relative top-8 ${props.blur? "blur-sm shadow-lg z-2" :  ""}`}>
        <h2 className="text-2xl
        text-green font-semiHead mt-6 mb-8 animate-fadeInM">Where I've Worked<hr className="w-3/4 border-slate
        border-y"/></h2>
        <div className="flex text-slightFade ml-2 scrollbar-thin gap-14 overflow-x-scroll h-20 pt-4">
            <NavLink to={"/"} 
                    onClick={() => FlipState("ss")} 
                    className={
                        `bg-navy whitespace-nowrap text-base font-semiHead ${activeTab==="ss"?
                         "text-green transition-all duration-200 ease-in-out -translate-y-3": "text-faded"}`}>
                            Synares Systems
                            <hr className={`${activeTab==="ss"? "transition-all ease-in-out duration-500 scale-x-75 origin-center border-green border-y" : "scale-x-0"}`}/>
            </NavLink>
            <NavLink to={"/softpers"} 
                    onClick={() => FlipState("soft")} 
                    className={
                        `bg-navy text-base font-semiHead ${activeTab==="soft"?
                            "text-green transition-all duration-200 ease-in-out -translate-y-3": "text-faded"}`}>
                                Softpers
                                <hr className={`${activeTab==="soft"? "transition-all ease-in-out duration-500 scale-x-75 origin-center border-green border-y" : "scale-x-0"}`}/>                   
            </NavLink>
            <NavLink to={"/vodworks"} 
            onClick={() => FlipState("vod")} 
            className={
                `bg-navy text-base font-semiHead ${activeTab==="vod"? 
                "text-green transition-all duration-200 ease-in-out -translate-y-3": "text-faded"}`}>
                    Vodworks
                    <hr className={`${activeTab==="vod"? "transition-all ease-in-out duration-500 scale-x-75 origin-center border-green border-y" : "scale-x-0"}`}/>
                    
            </NavLink>
            <NavLink to={"/err"} className="bg-navy hover:bg-lightNavy focus:text-green">Error</NavLink>
        </div>
        <Outlet className="animate-fadeInL" />
        </div>
        
    )
}