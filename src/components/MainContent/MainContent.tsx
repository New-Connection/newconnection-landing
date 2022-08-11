import React from "react";
import TextAnimation from "./TextAnimation";
import MainImg from "assets/main-img.png";
import { AppButton } from "components/Button/AppButton";

// sm: "480px",
// md: "768px",
// lg: "976px",
// xl: "1440px",

export const MainContent = () => {
    return (
        <section className="relative w-full">
            <div className="items-center space-y-12">
                <div className="xl:text-8xl lg:text-5xl md:text-4xl sm:text-2xl">
                    MULTICHAIN DAO
                    <br />
                    <div className="pl-10 lg:pl-16">SOLUTION TO CREATE</div>
                    <br />
                    <div className="flex justify-end -mt-8 lg:-mt-10 lg:justify-center md:justify-center sm:justify-center text-purple">
                        <TextAnimation />
                    </div>
                </div>
                <div className="flex justify-center bg-cover">
                    <img src={MainImg} />
                </div>
                <div className="flex justify-center">
                    <AppButton />
                </div>
            </div>
        </section>
    );
};
