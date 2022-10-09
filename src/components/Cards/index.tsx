import React from "react";
import { Card } from "components/Cards/Card";
import ASSETS from "assets";

export const CardsSection = () => {
    const CardInfo = {
        0: {
            title: "Community first",
            description: `Be an important part of the community.
                Discuss and shape how your 
                DAO will be developed.`,
            image: ASSETS.card_1,
        },
        1: {
            title: "Defining different roles",
            description:
                "Create NFT membership with a special role\nin the organization and send it to your members.",
            image: ASSETS.card_2,
        },
        2: {
            title: "Joint decision-making",
            description:
                "Submit proposals and decide together on the future of the organization with the voting system.",
            image: ASSETS.card_3,
        },
        3: {
            title: "Fundraising",
            description:
                "Raise funds, make contributions, gather donations and decide how to spend them.",
            image: ASSETS.card_4,
        },
    };

    return (
        <div className="place-items-center mt-8 grid gap-5  md:max-w-none md:grid-cols-1 md:gap-6 lg:gap-6 lg:max-w-none lg:grid-cols-2">
            <Card className="w-full" cardObject={CardInfo[0]} />
            <Card className="w-full" cardObject={CardInfo[1]} />
            <Card className="w-full" cardObject={CardInfo[2]} />
            <Card className="w-full" cardObject={CardInfo[3]} />
        </div>
    );
};
