import React from "react"




export default function Intro(props){
    return(
        <div class="dark" className={props.blur? "pt-14 blur-sm shadow-lg z-2 absolute" : "text-left pt-14 absolute"}>
            <h1 className="text-green ml-9 mt-9 mb-2 text-xl font-geist animate-fadeInS">Hi, my name is</h1>
            <h2 className="text-faded m-9 mt-4 text-3xl font-geist font-extrabold animate-fadeInS">Sheikh Muazzin Azeem.</h2>
            <h3 className="m-9 text-3xl text-slightFade animate-fadeInM">I build Web applications.</h3>
            <h4 className="text-slightFade m-7 text-lg p-3 animate-fadeInL">I’m a software engineer with expertise in creating and designing outstanding digital solutions.
                 Right now, my focus is on developing accessible, user-centered products at <a className="text-green no-underline cursor-pointer" href = "https://pk.linkedin.com/company/synares"> Synares Systems</a>.</h4>
        </div>
    )
}


