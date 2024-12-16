import React from "react";




export default function ErrorMess(){
    return(
        <div>
            <h1 className="text-2xl
        text-green font-geist mt-6 mb-8 animate-fadeInM">You encountered an error.</h1>
            <button className="transition ease-in-out delay-150 text-green
                     border-green border-solid justify-center
                      border-2 ps-2 pr-12 pl-12
                       rounded-md relative
                        font-geist hover:animate-wiggle">Home</button>
        </div>
    )
}