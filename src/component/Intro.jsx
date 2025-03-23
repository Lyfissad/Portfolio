import React from "react"




export default function Intro(props){
    return(
        <div class="dark" className={`mb-32 mt-56 text-left pt-5 ${props.blur? "blur-sm shadow-lg z-2" : ""}`}>
            <h1 className="text-green ml-9 mt-9 mb-2 text-xl font-semiHead animate-fadeInS">Hi, my name is</h1>
            <h2 className="text-faded m-9 mt-4 text-3xl font-geist font-extrabold animate-fadeInS">Sheikh Muazzin Azeem.</h2>
            <h3 className="m-9 text-3xl text-slightFade animate-fadeInM">I build Web applications.</h3>
            <h4 className="text-slightFade font-semiHead m-7 -mt-3 text-base p-3 animate-fadeInL">I’m a software engineer with expertise in creating and designing outstanding digital solutions.
                 Right now, my focus is on developing accessible, user-centered products at <a className="text-green no-underline cursor-pointer" href = "https://pk.linkedin.com/company/synares"> Synares Systems</a>.</h4>
            <a href="https://docs.google.com/document/d/e/2PACX-1vQKeHvIEmIte_fyQi13gtg5TrbTjdj7QROMX_jgw6dMhQKhfKUv3R56z2cA5U9Xw6-u91sNjq9GgZIL/pub">
            <button className="transition ease-in-out delay-150 text-green
                     border-green ml-7 -mb-5 left-10 border-solid
                      border p-2 pr-12 pl-12
                       rounded-md relative animate-fadeInL
                    font-semiHead hover:animate-pulse" >Download my resume</button></a>
        </div>
    )
}


