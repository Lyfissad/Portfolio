import React from "react";


export default function About(props){
    return(
    <div className={`absolute top-80 mt-96 ml-9 ${props.blur? `blur-sm z-50 shadow-lg` :  ``}`}>
        <h1 className="text-3xl
        text-green font-geist animate-fadeInM">About me</h1>
        <div className="text-slightFade text-left justify-center m-1 mr-8 text-md animate-fadeInL">
            <h4 className="mb-10 mt-10">
            I hold a Bachelor's degree in Computer Science from 
            Forman Christian College University, completed in 2022. During my
            final year at university, I worked as a React developer on Upwork
            for about a year, where I gained hands-on experience building
            dynamic web applications and collaborating with international clients.
            </h4>
            <h4>
            After graduation, I joined Vodworks as a Technical Engineer, where I 
            enhanced my skills in system integration. Currently, I am working
            at Synares Systems as a React Engineer, focusing on developing
            user-centric web applications and optimizing frontend 
            performance. My goal is to continue advancing in the field,
            taking on senior roles and contributing to innovative software
             solutions.</h4>
        </div>
        
    </div>
    )
}