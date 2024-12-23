import { React } from "react"
import { TbHexagonLetterMFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";



export default function Header(props){
    function scrollBackup(){
        window.scrollTo(0,0)
    }
    return(
        <>
            <header id="header" className = {`bg-navy fixed transition-all z-30 overflow-hidden duration-300 shadow-2xl animate-fadeInS justify-between w-full ${props.scrolledUp? "h-20" : "h-0"}`}>
                <NavLink to="/" onClick={scrollBackup}><TbHexagonLetterMFilled className= {`m-3 cursor-pointer overflow-hidden fill-green transition-all duration-300 ${props.scrolledUp? "size-16" : "size-0"}`}/></NavLink>
            </header>
        </>
    )
}


