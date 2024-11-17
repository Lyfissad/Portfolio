import { React } from "react"
import { RiMenu4Line } from "react-icons/ri";




export default function Header(props){
    return(
        <>
            <header className = "bg-transparent flex justify-between w-full">
                <img src="letter-m.png" alt="logo" className="size-16 m-3 cursor-pointer"/>
            </header>
        </>
    )
}