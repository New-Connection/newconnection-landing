import React from "react";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import classNames from "classnames";
import NFTCard from "assets/NFT-Card/NFT-Card.png";
import NFTCard2 from "assets/NFT-Card/NFT-Card2.png";
import { AppButton } from "components/Button/AppButton";

const TEXT_DESCRIPTION = [
    "Multichain DAO across 8+ blockchains",
    "Enter app and create a DAO, tell users about its goals and give out NFTs for entering the DAO to members",
    "Enter app and create a DAO, tell users about its goals and give out NFTs for entering the DAO to members",
    "Transfer NFT to another network from one blockchain to another. Just choose a network from the list, click on the “Transfer” button and confirm your actions",
    "Choose what the NFTs you can give out to people for logging into the DAO will look like by creating them on our platform",
];

const Images = [];

export default function AccordionCards() {
    interface IAccordingItems {
        nameTitle: string;
        description: string;
        uuid?: string;
        className?: string;
        image?: object;
    }

    const AccordionItems = ({ nameTitle, description, className, uuid }: IAccordingItems) => {
        return (
            <AccordionItem
                className={classNames(
                    "-mt-2 border-2 pt-4 pl-8 pb-5 border-b-0 font-medium bg-white border-gray rounded-t-xl text-purple hover:bg-purple hover:text-white hover:border-purple active:bg-btnActive active:text-purple opacity-100",
                    className
                )}
                activeClassName="-mt-2 bg-white border-2 text-black pt-4 px-6 lg:px-8 font-medium pb-4 mb-2 border-purple rounded-xl"
                uuid={uuid}
            >
                <AccordionItemHeading>
                    <AccordionItemButton>{nameTitle}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="lg:flex">
                        <p className="text-sm text pt-4 mr-2 pb-8 font-normal lg:w-1/3 text-black">
                            {description}
                        </p>
                        <div className="lg:flex lg:justify-center lg:w-2/3 flex flex-row justify-center">
                            <img src={NFTCard} className="h-72 w-54"></img>
                            <img
                                src={NFTCard2}
                                className="h-56 w-44 hidden lg:flex -ml-20 -mt-12"
                            ></img>
                        </div>
                    </div>
                    <AppButton className="bg-white border-purple text-purple mt-3 max-h-[3.0rem] px-4" />
                </AccordionItemPanel>
            </AccordionItem>
        );
    };

    return (
        <Accordion allowZeroExpanded={false} preExpanded={["a"]} className="cursor-pointer">
            <AccordionItems
                nameTitle="Select Blockchain"
                description={TEXT_DESCRIPTION[0]}
                uuid="a"
                className="z-10"
            />
            <AccordionItems
                nameTitle="Create DAO"
                description={TEXT_DESCRIPTION[2]}
                className="z-30"
            />
            <AccordionItems
                nameTitle="Propos and Vote"
                description={TEXT_DESCRIPTION[1]}
                className="z-20"
            />
            <AccordionItems
                nameTitle="Create NFT"
                description={TEXT_DESCRIPTION[4]}
                className="border-b-2 rounded-xl z-50"
            />
            <AccordionItems
                nameTitle="Transfer NFT"
                description={TEXT_DESCRIPTION[3]}
                className="z-40"
            />
        </Accordion>
    );
}
