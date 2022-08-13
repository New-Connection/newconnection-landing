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
import CreateDAOImage from "assets/2-CreateDAO.png";
import ProposalImage from "assets/3-Proposal.png";
import TransferImage from "assets/5-TransferNFT.png";
import Blockchains1 from "assets/blockchains1.png";
import Blockchains2 from "assets/blockchains2.png";
import { AppButton } from "components/Button/AppButton";

const TEXT_DESCRIPTION = [
    "Multichain DAO across 8+ blockchains. Сreate anywhere",
    "Сreate the organization in less than 5 minutes and tell members about goals",
    "Build a community and together decide about the future of the organization with the voting system",
    "Create NFT membership with a special role in the organization and send it to your members",
    "Don't worry about chains. Transfer NFT to another network from one blockchain to another",
];

const Images = [];

export default function AccordionCards() {
    interface IAccordingItems {
        nameTitle: string;
        description: string;
        uuid?: string;
        className?: string;
        image?: object;
        children?: React.ReactNode;
    }

    const AccordionItems = ({
        nameTitle,
        description,
        className,
        uuid,
        children,
    }: IAccordingItems) => {
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
                            {children}
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
            >
                <div className="lg:flex lg:space-y-0 space-y-6">
                    <img src={Blockchains1} className="h-20 w-30 lg:pr-4"></img>
                    <img src={Blockchains2} className="h-20 w-30"></img>
                </div>
            </AccordionItems>
            <AccordionItems
                nameTitle="Create DAO"
                description={TEXT_DESCRIPTION[1]}
                className="z-20"
            >
                <img src={CreateDAOImage} className="lg:h-72 lg:w-54 h-54 w-54"></img>
            </AccordionItems>
            <AccordionItems
                nameTitle="Propos and Vote"
                description={TEXT_DESCRIPTION[2]}
                className="z-30"
            >
                <img src={ProposalImage} className="lg:h-72 lg:w-54 h-54 w-54"></img>
            </AccordionItems>
            <AccordionItems
                nameTitle="Create NFT"
                description={TEXT_DESCRIPTION[3]}
                className="border-b-2 rounded-xl z-40"
            >
                <img src={NFTCard} className="h-72 w-54"></img>
                <img src={NFTCard2} className="h-56 w-44 hidden lg:flex -ml-20 -mt-12"></img>
            </AccordionItems>
            <AccordionItems
                nameTitle="Transfer NFT"
                description={TEXT_DESCRIPTION[4]}
                className="z-50"
            >
                <img src={TransferImage} className="lg:h-72 lg:w-54 h-54 w-54"></img>
            </AccordionItems>
        </Accordion>
    );
}
