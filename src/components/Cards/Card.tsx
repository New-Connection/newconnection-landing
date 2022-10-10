import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

export const Card = ({ className, cardObject }) => {
    return (
        <motion.div
            className={classNames("bg-gray rounded-md cards", className)}
            whileTap={{ scale: 1.05 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.35 }}
        >
            <div className="flex flex-1 flex-col justify-between px-6 pt-2 pb-6 h-32">
                <div className="flex-1 mt-1">
                    <div className="flex justify-between">
                        <p className="text-xl lg:text-3xl font-medium text-purple mt-1">
                            {cardObject.title}
                        </p>
                    </div>
                </div>
                <div className="mt-[0.75rem] flex items-center justify-between">
                    <p className="text-sm lg:text-base font-normal text-black">
                        {cardObject.description}
                    </p>
                </div>
            </div>
            <div className="flex-shrink-0 flex justify-center content-center">
                <img className="h-56 lg:h-72 p-4 object-cover" src={cardObject.image} alt="" />
            </div>
        </motion.div>
    );
};
