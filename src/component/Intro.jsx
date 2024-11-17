import React from "react"




export default function Intro(props){
    return(
        <div className={props.blur? "pt-10 blur-sm shadow-lg" : "pt-10"}>
        <h1 className="text-green ml-9 mt-9 mb-2 text-xl font-orbitron">Hi, my name is</h1>
        <h2 className="text-faded m-9 mt-4 text-3xl font-orbitron font-extrabold">Sheikh Muazzin Azeem.</h2>
        <h3 className="m-9 text-3xl text-slightFade">I build Web applications.</h3>
        <h4 className="text-slightFade m-9 text-lg p-3">I have been working with Web apps for about 3 years now and am currently working at
              <a className="text-green no-underline cursor-pointer" href = "https://pk.linkedin.com/company/synares"> Synares Systems</a> building human focused products.</h4>
        </div>
    )
}