import React, { useRef, useEffect } from "react";

export const WeAreSection = () => {
    return (
        <section className="relative w-full xl:flex lg:flex px-2">
            <div className="lg:flex space-y-2 justify-between">
                <p className="w-1/4 text-xl text-purple">We present</p>
                <p className="w-2/3 text-lg">
                    a convenient and easy way to create your own multichain DAO. It can be a charity
                    organization, NFT launch, democracy voting, or fundraising.
                </p>
            </div>
        </section>
    );
};
