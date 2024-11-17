import React from "react"


export default function SideBar(props){
    return(
    <div>
            <div className={props.show? "sideBar.active":"sideBar"}> 
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