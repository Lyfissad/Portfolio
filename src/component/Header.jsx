import { React, useState } from "react"
import { RiMenu4Line } from "react-icons/ri";
import SideBar from "./component/sidebar";




export default function Header(){
    const [SideBarTog, setSideBarTog] = useState(false)
    return(
        <>
            <header className = "bg-transparent flex justify-between w-full">
                <img src="letter-m.png" alt="logo" className="size-16 m-3 cursor-pointer"/>
                <RiMenu4Line 
                    className="size-16 m-3 fill-faded cursor-pointer"
                    onClick={(SideBarTog)=>setSideBarTog(!SideBarTog)} 
                        /> 
            </header>
            <SideBar sideToggle={SideBarTog} />
        </>
    )
}