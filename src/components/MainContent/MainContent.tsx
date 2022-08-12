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

    useEffect(() => {
        gsap.to(boxTextRef.current!, { opacity: 1, delay: 0.5 });
    });

    return (
        <section className="relative w-full">
            <div className="items-center space-y-12">
                <div
                    ref={boxTextRef}
                    className="xl:text-8xl lg:text-5xl md:text-5xl sm:text-5xl text-4xl px-2 opacity-0"
                >
                    MULTICHAIN DAO
                    <br />
                    <div className="lg:pl-16">SOLUTION TO CREATE</div>
                    <br />
                    <div className="flex px-1 justify-start lg:ml-10 -mt-8 lg:-mt-10 lg:justify-center md:justify-start sm:justify-start text-purple">
                        <TextAnimation />
                    </div>
                </div>
                <div className="flex justify-center bg-cover">
                    <img src={MainImg} className="rounded-md" />
                </div>
                <div className="flex justify-center">
                    <AppButton className="sm:py-1 " />
                </div>
            </div>
        </section>
    );
};
