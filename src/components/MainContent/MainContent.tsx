import React, { useRef, useEffect } from "react";
import TextAnimation from "./TextAnimation";
import MainImg from "assets/main-screen.png";
import { AppButton } from "components/Button/AppButton";
import { gsap } from "gsap";

// sm: "480px",
// md: "768px",
// lg: "976px",
// xl: "1440px",

export const MainContent = () => {
    // store a reference to the box div
    const boxTextRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     gsap.fromTo(
    //         boxTextRef.current!,
    //         { x: -100, opacity: 0 },
    //         { x: 0, opacity: 1, delay: 0.5, duration: 1.75 }
    //     );

    //     gsap.fromTo(
    //         imageRef.current!,
    //         { x: 100, opacity: 0 },
    //         { x: 0, opacity: 1, delay: 0.75, duration: 1.75 }
    //     );

    //     gsap.fromTo(
    //         buttonRef.current!,
    //         { y: 100, opacity: 0 },
    //         { y: 0, opacity: 1, delay: 1.0, duration: 1.75 }
    //     );
    // });

    return (
        <div
            className="relative text-center bg-fixed w-full max-h-screen max-w-none mb-10"
            ref={imageRef}
        >
            <img src={MainImg} className="rounded-md w-full object-cover" />
            <div className="absolute top-[12%] left-[30%] text-7xl  text-black" ref={boxTextRef}>
                The easiest way
                <br />
                to create your own
                <br />
                <p className="italic">community</p>
            </div>
        </div>
    );
};
