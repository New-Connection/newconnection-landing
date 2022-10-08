import React from "react";
import classNames from "classnames";
import { ExternalLinkIcon } from "../Icons/ExternalLinkIcon";

export const SocialNetwork = ({ className = "" }) => {
    return (
        // <section
        //     className={classNames(
        //         "bg-gray rounded-md h-[460px] content-center items-center m-auto "
        //     )}
        // >
        //     <div className="flex flex-1 flex-col justify-between px-6 pt-2 pb-6 h-32 text-center top-[50%]">
        //         <p>Join our community</p>
        //         <p>Follow us to be updated with our latest work and announcements</p>
        //     </div>
        //     <div className="gap-4 space-x-4">
        //         <button className="secondary-button w-1/4 bg-transparent border border-purple text-black hover:text-white">
        //             Twitter
        //         </button>
        //         <button className="secondary-button w-1/4 bg-transparent border border-purple text-black hover:text-white">
        //             Discord
        //         </button>
        //     </div>
        // </section>

        <div className="relative mx-auto max-w-7xl h-[460px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto absolute top-[25%] left-0 right-0 max-w-lg text-center">
                <h2 className="font-display text-3xl tracking-tight text-black sm:text-4xl">
                    Join our community
                </h2>
                <p className="mt-4 text-lg tracking-tight text-black">
                    Follow us to be updated with our latest work and announcements
                </p>
                <div className="mt-8 gap-4 space-x-4">
                    <button
                        className="secondary-button bg-transparent w-2/5 mr-2 border border-purple text-black hover:text-white mt-10 group inline-flex items-center 
                    justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        Twitter
                        <ExternalLinkIcon />
                    </button>
                    <button
                        className="secondary-button bg-transparent w-2/5 border border-purple text-black hover:text-white mt-10 group inline-flex items-center 
                    justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        Discord
                        <ExternalLinkIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};
