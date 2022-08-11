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
import NFTCard2 from "assets/NFT-Card/NFT-Card-1.png";
import NFTCard3 from "assets/NFT-Card/NFT-Card-2.png";
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
                    "-mt-2 border-2 pt-4 pl-8 pb-5 border-b-0 font-medium bg-white border-gray rounded-t-xl text-purple hover:bg-purple hover:text-white hover:border-purple active:bg-btnActive active:text-gray2",
                    className
                )}
                activeClassName="-mt-2 bg-purple pt-4 pl-8 font-medium pb-4 mb-2 pr-8 border-gray rounded-xl text-white"
                uuid={uuid}
            >
                <AccordionItemHeading>
                    <AccordionItemButton>{nameTitle}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="text-sm text pt-4 pb-8 font-normal">{description}</p>
                    <div className="lg:flex flex justify-center space-x-10">
                        <img src={NFTCard}></img>
                        <img src={NFTCard2} className="hidden lg:flex"></img>
                        <img src={NFTCard3} className="hidden lg:flex"></img>
                    </div>
                    <AppButton className="text-purple bg-white border-white mt-3 py-4 max-h-[3.0rem] px-10" />
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
                nameTitle="Propos and Vote"
                description={TEXT_DESCRIPTION[1]}
                className="z-20"
            />
            <AccordionItems
                nameTitle="Create DAO"
                description={TEXT_DESCRIPTION[2]}
                className="z-30"
            />
            <AccordionItems
                nameTitle="Transfer NFT"
                description={TEXT_DESCRIPTION[3]}
                className="z-40"
            />
            <AccordionItems
                nameTitle="Create NFT"
                description={TEXT_DESCRIPTION[4]}
                className="border-b-2 rounded-xl z-50"
            />
        </Accordion>
    );
}
