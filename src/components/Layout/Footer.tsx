import * as React from "react";
import { Separator } from "ariakit/separator";

import { TwitterIcon } from "components/Icons/TwitterIcon";
import { DiscordIcon } from "components/Icons/DiscordIcon";
// TODO: Need to create footer for mobile version
const Footer = () => {
    return (
        <footer className="absolute bottom-0 w-full h-16">
            <Separator
                orientation="horizontal"
                className="mt-16 mb-6 h-0 w-full border-t-2 border-purple"
            />
            <div className="flex justify-between">
                <p className="align-middle pt-4 pl-2">contact@newconnection.xyz</p>
                <div className="pt-4 space-x-4">
                    <button className="cursor-not-allowed">Terms</button>
                    <button className="cursor-not-allowed">Privacy</button>
                </div>
                <div className="pb-4 pr-4 space-x-4">
                    <button className="cursor-not-allowed px-[0.65em] py-[0.65em] bg-gray rounded-md fill-purple hover:fill-gray2">
                        <DiscordIcon />
                    </button>

                    <a href="https://twitter.com/NewConnectionX" target="_blank" rel="noreferrer">
                        <button className="px-[0.65em] py-[0.65em] bg-gray rounded-md fill-[#1DA1F2] hover:bg-purple hover:fill-white">
                            <TwitterIcon />
                        </button>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
