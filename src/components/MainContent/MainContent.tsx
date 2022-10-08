import React, { useRef, useEffect } from "react";
import TextAnimation from "./TextAnimation";
import MainImg from "assets/main-screen.png";
import { AppButton } from "components/Button/AppButton";

// sm: "480px",
// md: "768px",
// lg: "976px",
// xl: "1440px",

export const MainContent = () => {
    return (
        <div className="relative text-center content-center bg-fixed w-full max-h-screen max-w-none mb-10">
            <div className="flex-shrink-0">
                <img src={MainImg} className="rounded-md max-h-screen w-full object-cover" />
            </div>
            <div className="absolute right-0 top-[15%] left-0 text-center lg:text-7xl md:text-5xl sm:text-xl  text-black">
                The easiest way
                <br />
                to create your own
                <br />
                <p className="italic">community</p>
            </div>
            <AppButton className="absolute w-1/3 h-10 text-sm bottom-[5%] left-[50%] text-center -translate-x-1/2 text-white bg-purple" />
        </div>
    );
};
