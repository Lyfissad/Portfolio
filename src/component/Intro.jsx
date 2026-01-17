import React from "react"




export default function Intro(props){
    return(
        <div class="dark" className={`mb-[40vh] relative
         mt-52 text-left pt-5 md:mt-[30vh] md:left-[20%] md:mr-64 ${props.blur? "blur-sm shadow-lg z-2" : ""}`}>
            <h1 className="text-green ml-9 mt-9 mb-2 text-xl font-semiHead animate-fadeInS md:text-2xl">Hi, my name is</h1>
            <h2 className="text-faded m-9 mt-4 text-3xl font-semiHead font-extrabold animate-fadeInS md:text-6xl">Sheikh Muazzin Azeem.</h2>
            <h3 className="m-9 text-3xl text-slate animate-fadeInM md:text-6xl">I build web applications.</h3>
            <h4 className="text-slate font-semiHead m-7 -mt-3 text-base p-3 animate-fadeInL md:text-md md:right-12 md:max-w-lg md:min-w-md sm:min-w-md">Software
                 engineer with experience designing and building accessible, user-centered digital solutions. Currently pursuing
                  a Master’s in Data Science, with a strong focus on creating high-quality, scalable web applications. 
                  Actively seeking new opportunities to contribute technical expertise and deliver meaningful, user-focused products.</h4>
            <a target="blank" href="https://drive.google.com/file/d/1qcYnTQ_hssHhcbfXu7pgNXQovU9UFA8F/view?usp=sharing">
            <button className="transition ease-in-out delay-250 text-green
                     border-green ml-7 xs:ml-2 -mb-5 left-10 border-solid
                      border p-2 pr-12 pl-12
                       rounded-md relative animate-fadeInL
                    font-semiHead md:hover:bg-green md:hover:text-navy hover:-translate-y-1" >Download my resume</button></a>
        </div>
    )
}


