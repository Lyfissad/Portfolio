import React from "react";
import { useState } from "react";
import App from "./App";





export default function LogoPage(){
    const [timer, setTimer] = useState(false);
    setTimeout(() => {
        setTimer(true)
    }, 2000);
    return(
        <div className={timer? "" : "min-h-screen w-full bg-dark-navy absolute"}>
        {!timer && <img src="letter-m.png" alt="logo" className="size-28 
        m-auto mt-64 transition-all animate-bounce"/>}
        {timer && <App />}
        </div>
    )
}
