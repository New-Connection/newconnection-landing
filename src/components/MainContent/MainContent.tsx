import React, { useRef, useEffect } from "react";
import TextAnimation from "./TextAnimation";
import MainImg from "assets/main-img.png";
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

    useEffect(() => {
        gsap.fromTo(
            boxTextRef.current!,
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, delay: 0.5, duration: 1.75 }
        );

        gsap.fromTo(
            imageRef.current!,
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, delay: 0.75, duration: 1.75 }
        );

        gsap.fromTo(
            buttonRef.current!,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, delay: 1.0, duration: 1.75 }
        );
    });

    return (
        <section className="relative w-full">
            <div className="items-center space-y-12">
                <div
                    className="xl:text-8xl lg:text-5xl md:text-5xl sm:text-5xl text-4xl px-2 opacity-0 text-black"
                    ref={boxTextRef}
                >
                    MULTICHAIN DAO
                    <br />
                    <div className="lg:pl-16">SOLUTION TO CREATE</div>
                    <br />
                    <div className="flex px-1 justify-start lg:ml-10 -mt-8 lg:-mt-10 lg:justify-center md:justify-start sm:justify-start text-purple">
                        <TextAnimation />
                    </div>
                </div>
                <div className="flex justify-center bg-cover" ref={imageRef}>
                    <img src={MainImg} className="rounded-md" />
                </div>
                <div className="flex justify-center" ref={buttonRef}>
                    <AppButton className="sm:py-1 " />
                </div>
            </div>
        </section>
    );
};
