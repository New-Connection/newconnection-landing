import React from "react";

export const TextSection = () => {
    // sm: "480px",
    // md: "768px",
    // lg: "976px",
    // xl: "1440px",
    return (
        <section className="relative w-full xl:flex lg:flex">
            <p className="text-left xl:w-2/6 lg:w-2/6 pr-12 font-normal text-black2">
                New Connection suggest you a convenient and easy way to create your own multichain
                DAO — free organization creation, NFT release, voting and fundraising
            </p>
            <div className="text-left xl:w-2/6 lg:w-2/6">
                <p className="mt-1">For whom?</p>
                <p className="text-[#E3D9F9] text-5xl mt-4">01</p>
                <p className="mr-8 mt-2 text-black2">
                    VC funds or small companies that want to invest in startups and want to be open
                    with everyone
                </p>
            </div>
            <div className="text-left xl:w-2/6 lg:w-2/6">
                <>
                    <p className="text-[#E3D9F9] text-5xl mt-12">02</p>
                    <p className="mr-8 mt-2 text-black2">
                        Charities that can raise money for a foundation and through voting send it
                        to help someone
                    </p>
                </>
                <>
                    <p className="text-[#E3D9F9] text-5xl mt-4">03</p>
                    <p className="mr-8 mt-2 text-black2">
                        Charities that can raise money for a foundation and through voting send it
                        to help someone
                    </p>
                </>
            </div>
        </section>
    );
};
