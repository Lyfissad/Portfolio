import React from "react"




export default function Header(){
    return(
        <>
            <header className = "bg-transparent flex justify-between w-full">
                <img src="letter-m.png" alt="logo" className="size-16 m-3"/>
                <img src="menu-bar.png" alt="Menu-btn" className="size-14 m-3"/>
            </header>
        </>
    )
}