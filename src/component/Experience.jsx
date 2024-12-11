import React from "react"



export default function Experience(props){
    return(
        <div className={`pl-8 mb-4 relative top-8 ${props.blur? "blur-sm shadow-lg z-2" :  ""}`}>
        <h2 className="text-2xl
        text-green font-geist mt-6 mb-8 animate-fadeInM">Where I've Worked<hr className="w-3/4 border-green
        border-y"/></h2>
        <ul className="flex text-white text-lg gap-16 overflow-x-scroll">
            <li>What</li>
            <li>What</li>
            <li>What</li>
            <li>What</li>
            <li>What</li>
            <li>What</li>
        </ul>
        <h4 className="text-white justify-center">
        There are many variations of passages of Lorem Ipsum 
        available, but the majority have suffered alteration in
         some form, by injected humour, or randomised words which
          don't look even slightly believable. If you are going to
           use a passage of Lorem Ipsum, you need to be sure there
            isn't anything embarrassing hidden in the middle of text.
             All the Lorem Ipsum generators on the Internet tend to
              repeat predefined chunks as necessary, making this the 
              first true generator on the Internet. It uses a dictionary
               of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum 
                which looks reasonable. The generated Lorem Ipsum is 
                therefore always free from repetition, injected humour,
                 or non-characteristic words etc.
        </h4>
        </div>
        
    )
}