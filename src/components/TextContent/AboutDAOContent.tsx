import React from "react";

export const AboutDAOSection = () => {
    const TEXTS = [
        "Decentralized Autonomous Organization — is a blockchain-based organization governed by NFT membership.",
        "has no hierarchical structure with a traditional management center and operates online",
        "managed by the members themselves and based on smart contracts on the blockchain",
        "has a purpose which unites people and work processes",
    ];
    // sm: "480px",
    // md: "768px",
    // lg: "976px",
    // xl: "1440px",
    return (
        <section className="relative w-full xl:flex lg:flex">
            <div className="lg:flex space-y-2 justify-between px-2">
                <p className="w-1/4 text-xl text-purple">About DAO</p>
                <div className="lg:w-2/3 lg:space-y-8 space-y-4">
                    <div className="lg:flex lg:space-y-0 lg:space-x-10  space-y-4 w-full gap-6 text-sm">
                        <p className="lg:w-2/5">{TEXTS[0]}</p>
                        <div className="lg:w-2/5">
                            <p className="text-purple">{"01. Decentralized"}</p>
                            {TEXTS[1]}
                        </div>
                    </div>
                    <div className="lg:flex lg:space-y-0 lg:space-x-10  space-y-4 w-full gap-6 text-sm">
                        <div className="lg:w-2/5 ">
                            <p className="text-purple">{"02. Autonomous"}</p>
                            {TEXTS[2]}
                        </div>
                        <div className="lg:w-2/5">
                            <p className="text-purple">{"03. Organization"}</p>
                            {TEXTS[3]}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
