import React from "react"


export default function SideBar(){
    return(
    <div className="">
            <div className="text-slightFade absolute
             inset-y-0 left-40 mt-20 mr-8 h-screen
              flex items-center justify-center w-4/6
              bg-slate-700 translate-x-0 ease-in-out duration-300"> 
                <ul>
                    <li className="hover:text-green mb-14 text-3xl cursor-pointer font-orbitron">About</li>
                    <li className="hover:text-green mb-14 text-3xl cursor-pointer font-orbitron">Education</li>
                    <li className="hover:text-green mb-14 text-3xl cursor-pointer font-orbitron">Experience</li>
                    <li className="hover:text-green mb-14 text-3xl cursor-pointer font-orbitron">Projects</li>
                    <button className="transition ease-in-out delay-150 hover:scale-110 text-green
                     border-green border-solid
                      border-2 p-2 pr-12 pl-12
                       rounded-md absolute
                        font-orbitron">Resume.</button>
                </ul>
                
            </div>
            </div>
    )
}