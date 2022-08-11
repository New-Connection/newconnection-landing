import { ExternalLinkIcon } from "../Icons/ExternalLinkIcon";
import React from "react";
import classNames from "classnames";

const NCAPP = "https://app.newconnection.xyz/";

interface IAppButton {
    className?: string;
}

export const AppButton = ({ className }: IAppButton) => {
    return (
        <a
            href={NCAPP}
            className={classNames(
                "btns-rounded flex flex-row justify-center w-full py-4 mx-2 px-16 border-2 items-center rounded-full",
                className
            )}
        >
            <span>Enter App</span>
            <div>
                <ExternalLinkIcon />
            </div>
        </a>
    );
};
