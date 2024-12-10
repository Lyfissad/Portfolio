import { React } from "react"





export default function Header(props){
    return(
        <>
            <header id="header" className = {`bg-navy fixed transition-all overflow-hidden duration-300 shadow-2xl animate-fadeInS justify-between w-full ${props.scrolledUp? "h-20 bg-opacity-30" : "h-0 bg-opacity-100"}`}>
                <img src="letter-m.png" alt="logo" className="size-16 m-3 cursor-pointer"/>
            </header>
        </>
    )
}


