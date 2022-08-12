import React from "react";

export const WeAreSection = () => {
    // sm: "480px",
    // md: "768px",
    // lg: "976px",
    // xl: "1440px",
    return (
        <section className="relative w-full xl:flex lg:flex">
            <div className="lg:flex space-y-2 justify-between">
                <p className="w-1/4 text-sm text-purple">We are</p>
                <p className="w-2/3 text-lg">
                    New Connection suggest you a convenient and easy way to create your own
                    multichain DAO — free organization creation, NFT release, voting and fundraising
                </p>
            </div>
        </section>
    );
};
