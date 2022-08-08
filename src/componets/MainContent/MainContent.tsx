import React from "react";
import "./MainContent.css";
import TextAnimation from "./TextAnimation";

const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
};

const NCAPP = "https://app.newconnection.xyz/";

function MainContent() {
    return (
        <div>
            <p className="text-black text-5xl">
                MULTICHAIN DAO
                <br />
                SOLUTION TO CREATE
                <br />
                <span className="text-transition">
                    <TextAnimation />
                </span>
            </p>
            <button onClick={() => null} className="btns-rounded">
                Enter App ✨
            </button>
        </div>
    );
}

export default MainContent;
