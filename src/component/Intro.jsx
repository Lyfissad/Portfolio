import React from "react"




export default function Intro(props){
    return(
        <div class="dark" className={`mb-[40vh] mt-52 text-left pt-5 md:mt-[30vh] md:ml-96 md:mr-64 ${props.blur? "blur-sm shadow-lg z-2" : ""}`}>
            <h1 className="text-green ml-9 mt-9 mb-2 text-xl font-semiHead animate-fadeInS md:text-2xl">Hi, my name is</h1>
            <h2 className="text-faded m-9 mt-4 text-3xl font-semiHead font-extrabold animate-fadeInS md:text-6xl">Sheikh Muazzin Azeem.</h2>
            <h3 className="m-9 text-3xl text-slate animate-fadeInM md:text-6xl">I build web applications.</h3>
            <h4 className="text-slate font-semiHead m-7 -mt-3 text-base p-3 animate-fadeInL md:text-md md:ml-6 md:mr-[650px]">I’m a software engineer with expertise in creating and designing outstanding digital solutions.
                 Right now, my focus is on developing accessible, user-centered products at <a className="text-green no-underline cursor-pointer" href = "https://pk.linkedin.com/company/synares"> Synares Systems</a>.</h4>
            <a target="blank" href="https://drive.google.com/file/d/1KyjFryb4iRJLfsl9rWek0TAwEUeD67j3/view?usp=drive_link">
            <button className="transition ease-in-out delay-250 text-green
                     border-green ml-7 -mb-5 left-10 border-solid
                      border p-2 pr-12 pl-12
                       rounded-md relative animate-fadeInL
                    font-semiHead md:hover:bg-green md:hover:text-navy hover:-translate-y-1" >Download my resume</button></a>
        </div>
    )
}


