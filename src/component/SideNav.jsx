import React from "react"

export default function SideBar(props){
    
    return(
    <div>
            <div id = "side" className={`h-full fixed text-slightFade
            justify-center items-center flex bg-lightNavy z-20
            right-0 top-20 bottom-0 overflow-hidden transition-all duration-300 ${props.show? "w-4/5" : "w-0"}`}>
                <ul>
                    <li onClick={()=>props.flip("about")} className="hover:text-green mb-14 text-3xl cursor-pointer font-semiHead">About</li>
                    <li onClick={()=>props.flip("exp")} className="hover:text-green mb-14 text-3xl cursor-pointer font-semiHead">Experience</li>
                    <li onClick={()=>props.flip("projects")} className="hover:text-green mb-14 text-3xl cursor-pointer font-semiHead">Projects</li>
                    <li onClick={()=>props.flip("contact")} className="hover:text-green mb-14 text-3xl cursor-pointer font-semiHead">Contact</li>
                    <a href="https://docs.google.com/document/d/e/2PACX-1vQKeHvIEmIte_fyQi13gtg5TrbTjdj7QROMX_jgw6dMhQKhfKUv3R56z2cA5U9Xw6-u91sNjq9GgZIL/pub">
                    <button className="transition ease-in-out delay-150 text-green
                     border-green border-solid
                      border p-2 pr-12 pl-12
                       rounded-md relative
                        font-semiHead" >Resume</button></a>
                </ul>
            </div>
            </div>
    )
}