import React from "react";
import classNames from "classnames";

export const SocialNetwork = ({ className = "" }) => {
    return (
        <section
            className={classNames(
                "bg-gray rounded-md h-[460px] content-center items-center m-auto "
            )}
        >
            <div className="flex flex-1 flex-col justify-between px-6 pt-2 pb-6 h-32 text-center top-[50%]">
                <p>Join our community</p>
                <p>Follow us to be updated with our latest work and announcements</p>
            </div>
            <div className="gap-4 space-x-4">
                <button className="secondary-button w-1/4 bg-transparent border border-purple text-black hover:text-white">
                    Twitter
                </button>
                <button className="secondary-button w-1/4 bg-transparent border border-purple text-black hover:text-white">
                    Discord
                </button>
            </div>
        </section>
    );
};
