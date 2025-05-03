import { React } from "react"
import { TbHexagonLetterMFilled } from "react-icons/tb";




export default function Header(props){
    return(
        <>
            <header id="header" className = {`bg-navy opacity-85 fixed flex transition-all z-30 overflow-hidden duration-300 shadow-2xl animate-fadeInS justify-between w-full ${props.scrolledUp? "h-20" : "h-0"}`}>
                <a href="https://portfolio-muazzin.vercel.app/" className="w-16"><TbHexagonLetterMFilled className= {`m-3 cursor-pointer overflow-hidden fill-green scroll-smooth transition-all duration-300
                     ${props.scrolledUp? "size-16" : "size-0"}`}/></a>
                <div className="inline-flex mt-6 md:visible sm:invisible xs:invisible">
                <ul className="inline-flex text-slightFade text-xl font-semiHead ">
                    <li onClick={()=>props.scrollTosec("about")} className="mr-6 hover:text-green cursor-pointer transition-all ease-in-out delay-100 hover:-translate-y-1">About</li>
                    <li onClick={()=>props.scrollTosec("exp")} className="mr-6 hover:text-green cursor-pointer transition-all ease-in-out delay-100 hover:-translate-y-1">Experience</li>
                    <li onClick={()=>props.scrollTosec("projects")} className="mr-6 hover:text-green cursor-pointer transition-all ease-in-out delay-100 hover:-translate-y-1">Projects</li>
                    <li onClick={()=>props.scrollTosec("footer")} className="mr-6 hover:text-green cursor-pointer transition-all ease-in-out delay-100 hover:-translate-y-1">Contact</li> 
                </ul>
                <a href="https://drive.google.com/file/d/1KyjFryb4iRJLfsl9rWek0TAwEUeD67j3/view?usp=drive_link">
                <button className="transition-all ease-in-out delay-100 text-green
                     border-green border-solid size-8
                      border w-24 text-center mr-4 text-sm
                       rounded-sm relative
                        font-semiHead hover:animate-pulse md:hover:bg-green md:hover:text-navy hover:-translate-y-1" >Resume</button></a>
                </div>
            </header>
        </>
    )
}


