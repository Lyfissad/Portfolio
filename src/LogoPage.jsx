import React from "react";
import { useState } from "react";
import App from "./App";
import { TbHexagonLetterMFilled } from "react-icons/tb";






export default function LogoPage(){
    const [timer, setTimer] = useState(false);
    setTimeout(() => {
        setTimer(true)
    }, 2000);
    return(
        <div className={timer? "" : "flex justify-center items-center h-screen min-h-screen w-full bg-dark-navy absolute"}>
                {!timer && <TbHexagonLetterMFilled className="size-28 
                m-auto fill-green transition-all animate-bounce"/>}
                {timer && <App />}
        </div>
    )
}
