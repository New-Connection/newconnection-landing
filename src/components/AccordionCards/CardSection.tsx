import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const SectionTrigger = () => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
        trigger: "#test-p1",
        // markers: true,
        start: "bottom top",
        endTrigger: ".p2",
        end: "bottom-50 center",
        pin: true,
        pinSpacing: false,
    });

    ScrollTrigger.create({
        trigger: ".p2",
        // markers: true,
        start: "top top-=90",
        endTrigger: ".p3",
        end: "bottom bottom-=90",
        pin: true,
        pinSpacing: false,
    });

    // ScrollTrigger.create({
    //     trigger: ".p3",
    //     markers: true,
    //     start: "top top+=180",
    //     endTrigger: "html",
    //     end: "bottom bottom",
    //     pin: true,
    //     pinSpacing: false,
    // });

    return (
        <div className="space-y-0">
            <div className="test-p1 bg-red h-96 w-full">ONE</div>
            <div className="p2 bg-[#f5a936] h-96 w-full">TWO</div>
            <div className="p3 bg-purple h-96 w-full">THREE</div>
        </div>
    );
};
