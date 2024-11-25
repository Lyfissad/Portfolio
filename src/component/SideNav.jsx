import React from "react"

export default function SideBar(props){
    return(
    <div>
            <div id = "side" className={`h-full absolute text-slightFade 
            justify-center items-center flex border-r-0 bg-lightNavy
            right-0 top-20 bottom-0 overflow-hidden transition-all ${props.show? "w-4/5" : "w-0"}`}>
                <ul>
                    <li className="hover:text-green mb-14 text-3xl cursor-pointer font-geist">About</li>
                    <li className="hover:text-green mb-14 text-3xl cursor-pointer font-geist">Education</li>
                    <li className="hover:text-green mb-14 text-3xl cursor-pointer font-geist">Experience</li>
                    <li className="hover:text-green mb-14 text-3xl cursor-pointer font-geist">Projects</li>
                    <button className="transition ease-in-out delay-150 hover:scale-125 text-green
                     border-green border-solid
                      border-2 p-2 pr-12 pl-12
                       rounded-md absolute
                        font-geist">Resume</button>
                </ul>
            </div>
            </div>
    )
}