import React from "react";
// sm: "480px",
// md: "768px",
// lg: "976px",
// xl: "1440px",
export const WeAreSection = () => {
    return (
        <section className="w-full max-h-screen px-8 lg:h-[200vh] text-center">
            <p className="text-3xl sm:text-6xl xl:text-8xl lg:text-[4.95rem] lg:leading-none md:text-4xl">
                We present a convenient and easy way to create your own multichain DAO. It can be a
                charity organization, NFT launch, democracy voting or fundraising
            </p>
        </section>
    );
};
