import React from "react";
import TextAnimation from "./TextAnimation";

const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
};

const NCAPP = "https://app.newconnection.xyz/";

export const MainContent = () => {
    return (
        <div>
            <p className="text-xl">
                MULTICHAIN DAO
                <br />
                SOLUTION TO CREATE
                <br />
                <span className="text-purple">
                    <TextAnimation />
                </span>
            </p>
            <button onClick={() => null} className="btns-rounded w-full rounded-full">
                Enter App ✨
            </button>
        </div>
    );
};
