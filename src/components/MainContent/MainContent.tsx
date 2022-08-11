import React from "react";
import { ExternalLinkIcon } from "../Icons/ExternalLinkIcon";
import TextAnimation from "./TextAnimation";
import MainImg from "assets/main-img.png";

const NCAPP = "https://app.newconnection.xyz/";

const AppButton = () => {
    return (
        <a
            href={NCAPP}
            className="btns-rounded flex flex-row justify-center w-full py-4 mx-2 px-16 border-2 items-center rounded-full"
        >
            <span>Enter App</span>
            <div>
                <ExternalLinkIcon />
            </div>
        </a>
    );
};

// sm: "480px",
// md: "768px",
// lg: "976px",
// xl: "1440px",

export const MainContent = () => {
    return (
        <section className="relative w-full">
            <div className="items-center space-y-10">
                <p className="xl:text-8xl lg:text-5xl md:text-4xl sm:text-2xl">
                    MULTICHAIN DAO
                    <br />
                    <div className="pl-10 lg:pl-0 lg:mt-6">SOLUTION TO CREATE</div>
                    <br />
                    <div className="flex justify-end -mt-4 lg:-mt-10 lg:justify-center md:justify-center sm:justify-center text-purple">
                        <TextAnimation />
                    </div>
                </p>
                <div className="flex justify-center bg-cover">
                    <img src={MainImg} />
                </div>
                <div className="flex justify-center">
                    <AppButton />
                </div>
            </div>
        </section>
    );
};
