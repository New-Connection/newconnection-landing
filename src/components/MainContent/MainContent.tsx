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
            onClick={() => null}
            className="btns-rounded py-4 px-96 flex rounded-full items-center"
        >
            <span>Enter App</span>
            <ExternalLinkIcon />
        </button>
    );
};

export const MainContent = () => {
    return (
        <div className="border-2 items-center space-y-10">
            <div className="text-xl">
                MULTICHAIN DAO
                <br />
                SOLUTION TO CREATE
                <br />
                <span className="text-purple text-right">
                    <TextAnimation />
                </span>
            </div>
            <img src={MainImg} />
            <AppButton />
        </div>
    );
};
