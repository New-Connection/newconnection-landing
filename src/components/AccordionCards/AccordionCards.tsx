import React from "react";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import classNames from "classnames";

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
                    "-mt-2 border-2 pt-2 pl-2 pb-2 border-b-0 bg-white border-gray rounded-t-xl text-purple hover:bg-purple hover:text-white",
                    className
                )}
                activeClassName="-mt-2 bg-purple pt-2 pl-2 pb-4 mb-2 pr-2 border-gray rounded-xl text-white"
                uuid={uuid}
            >
                <AccordionItemHeading>
                    <AccordionItemButton>{nameTitle}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className="text-sm text">{description}</p>
                </AccordionItemPanel>
            </AccordionItem>
        );
    };

    return (
        <Accordion allowZeroExpanded={false} preExpanded={["a"]} className="cursor-pointer">
            <AccordionItems
                nameTitle="Select Blockchain"
                description="In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud
                        velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non."
                uuid="a"
                className="z-10"
            />
            <AccordionItems
                nameTitle="Propos and Vote"
                description="In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud
                        velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non."
                className="z-20"
            />
            <AccordionItems
                nameTitle="Create DAO"
                description="In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud
                        velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non."
                className="z-30"
            />
            <AccordionItems
                nameTitle="Transfer NFT"
                description="In ad velit in ex nostrud dolore cupidatat consectetur ea in ut nostrud
                        velit in irure cillum tempor laboris sed adipisicing eu esse duis nulla non."
                className="z-40"
            />
            <AccordionItems
                nameTitle="Create NFT"
                description="When users logs in to a DAO, they can choose what the NFTs they want to give out to people for logging in will look like"
                className="border-b-2 rounded-xl z-50"
            />
        </Accordion>
    );
}
