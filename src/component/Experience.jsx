import {React, useState} from "react"
import { Outlet, NavLink, useLocation } from "react-router-dom"



export default function Experience(props){
    const [activeTab, setActiveTab] = useState('ss')
    const activeTabStyle = "text-green transition-all duration-200 ease-in-out xs:-translate-y-3 md:-translate-x-4 md:flex md:translate-y-0"
    const activeTabHR = "transition-all ease-in-out duration-500 scale-x-75 md:h-6 md:w-px md:duration-200 origin-center md:ml-3 md:mt-1 border-green border-y md:border-x"
    const baseTabStyle =  "bg-navy cursor-pointer whitespace-nowrap h-12 w-40 md:w-5/6 text-lg md:hover:bg-lightNavy my-1 py-8 md:px-4 md:py-2 md:duration-200 font-semiHead md:flex md:items-center md:justify-center md:text-center rounded-md"
    const location = useLocation()


    function FlipState(newValue){
        setActiveTab(newValue)
    }
    

    return(
    <div id="exp" className={`ml-8 mb-4 relative top-8 md:top-40 md:left-[15%] midlg:ml-2 mt-[30vh] ${props.blur? "blur-sm shadow-lg z-2" :  ""}`}>

        <h2 className="text-2xl
        text-green font-semiHead mt-6 mb-8 md:relative md:text-3xl animate-fadeInM">Where I've Worked
        <hr className="w-10/12 md:w-3/5 relative top-4 md:top-6  border-darkSlate
        border-y"/></h2>

        <div className="block md:flex md:relative top-8 left-[6%] gap-x-16 md:gap-x-[5px]">
            <div className="flex  text-slightFade md:w-[25%] scrollbar-thin gap-12 md:gap-0 overflow-x-scroll md:overflow-visible
                md:flex-col md:h-80 md:relative h-20">
                <NavLink to={"/"} 
                        onClick={() => FlipState("ss")} 
                        className={
                            `${baseTabStyle} ${activeTab==="ss"?
                            `${activeTabStyle}` : "text-slate md:hover:text-green"}`}>
                                Synares Systems
                                <hr className={`${activeTab==="ss"? `${activeTabHR}` : "scale-x-0"}`}/>
                </NavLink>

                <NavLink to={"/softpers"} 
                        onClick={() => FlipState("soft")} 
                        className={
                            `${baseTabStyle} ${activeTab==="soft"?
                                `${activeTabStyle}`: "text-slate md:hover:text-green"}`}>
                                    Softpers
                                    <hr className={`${activeTab==="soft"? `${activeTabHR}` : "scale-x-0"}`}/>                   
                </NavLink>

                <NavLink to={"/vodworks"} 
                onClick={() => FlipState("vod")} 
                className={
                    `${baseTabStyle} ${activeTab==="vod"? 
                    `${activeTabStyle}`: "text-slate md:hover:text-green"}`}>
                        Vodworks
                        <hr className={`${activeTab==="vod"?  `${activeTabHR}`: "scale-x-0"}`}/>
                </NavLink>

                <NavLink to={"/err"} className="bg-navy hover:bg-lightNavy hidden focus:text-green">Error</NavLink>
            </div>
                <div key={location.pathname} className="animate-fadeInNoMove md:relative mt-8 md:top-2">
                    <Outlet />
                </div>
            </div>
    </div>
        
    )
}