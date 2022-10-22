import React from "react";
import { AppButton } from "components/Button/AppButton";
import { motion } from "framer-motion";
import ASSETS from "assets/";

// sm: "480px",
// md: "768px",
// lg: "976px",
// xl: "1440px",

export const MainContent = () => {
    return (
        <div className="relative text-center content-center bg-fixed w-full max-h-screen max-w-none mb-10">
            <div className="flex-shrink-0">
                <img
                    src={ASSETS.main_img}
                    className="rounded-md min-h-screen lg:max-h-screen md:max-h-screen  w-full object-cover"
                />
            </div>
            <motion.div className="absolute right-0 top-[15%] text-3xl left-0 text-center lg:text-6xl md:text-5xl text-white">
                <motion.p
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.05 }}
                >
                    The easiest way
                </motion.p>

                <motion.p
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.45 }}
                >
                    to create your own
                </motion.p>

                <motion.p
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.95 }}
                    className="italic"
                >
                    community
                </motion.p>
            </motion.div>
            <motion.div
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeInOut", duration: 1.25, delay: 1.5 }}
            >
                <AppButton className="absolute w-4/5 md:w-1/3 lg:w-1/3 xl:w-1/5 h-9 text-sm bottom-[15%] lg:bottom-[5%] left-[50%] text-center -translate-x-1/2 text-white bg-purple border-none" />
            </motion.div>
        </div>
    );
};
