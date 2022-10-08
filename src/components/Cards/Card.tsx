import React from "react";
import classNames from "classnames";

export const Card = ({ className, cardObject }) => {
    return (
        <div className={classNames("bg-gray rounded-md", className)}>
            <div className="flex flex-1 flex-col justify-between px-6 pt-2 pb-6 h-32">
                <div className="flex-1 mt-1">
                    <div className="flex justify-between">
                        <p className="text-3xl font-medium text-purple  mt-1">{cardObject.title}</p>
                    </div>
                </div>
                <div className="mt-[0.75rem] flex items-center justify-between">
                    <p className="text-base font-normal text-black">{cardObject.description}</p>
                </div>
            </div>
            <div className="flex-shrink-0">
                <img className="h-72 w-full p-4 object-cover" src={cardObject.image} alt="" />
            </div>
        </div>
    );
};
