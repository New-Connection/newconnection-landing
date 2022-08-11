import React from "react";
import { ExternalLinkIcon } from "../Icons/ExternalLinkIcon";
import TextAnimation from "./TextAnimation";
import MainImg from "assets/main-img.png";

const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
};

const NCAPP = "https://app.newconnection.xyz/";

const AppButton = () => {
    return (
        <button
            onClick={() => openInNewTab(NCAPP)}
            className="btns-rounded py-4 px-96 flex rounded-full items-center"
        >
            <span>Enter App</span>
            <ExternalLinkIcon />
        </button>
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
                    SOLUTION TO CREATE
                    <br />
                    <div className="flex justify-end lg:justify-center md:justify-center sm:justify-center text-purple">
                        <TextAnimation />
                    </div>
                </p>
                <div className="flex justify-center">
                    <img src={MainImg} />
                </div>
                <div className="flex justify-center">
                    <AppButton />
                </div>
            </div>
        </section>
    );
};
