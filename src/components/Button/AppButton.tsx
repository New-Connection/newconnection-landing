import { ExternalLinkIcon } from "../Icons/ExternalLinkIcon";
import React from "react";
import classNames from "classnames";

const WEBSITE = "https://app.newconnection.xyz/";

interface IAppButton {
    className?: string;
}

export const AppButton = ({ className }: IAppButton) => {
    return (
        <a
            href={WEBSITE}
            className={classNames(
                "btns-rounded flex flex-row justify-center w-full py-4 mx-2 px-8 border-2 items-center rounded-full custom-cursor",
                className
            )}
        >
            <span>Create community</span>
            <div>
                <ExternalLinkIcon />
            </div>
        </a>
    );
};
