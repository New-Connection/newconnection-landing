import React from "react";

export const AboutDAOSection = () => {
    // sm: "480px",
    // md: "768px",
    // lg: "976px",
    // xl: "1440px",
    return (
        <section className="relative w-full xl:flex lg:flex">
            <div className="lg:flex space-y-2 justify-between">
                <p className="w-1/4 text-sm text-purple">About DAO</p>
                <div className="lg:w-2/3 lg:space-y-8 space-y-4">
                    <div className="lg:flex lg:space-y-0 lg:space-x-10  space-y-4 w-full gap-6 text-sm">
                        <p className="lg:w-2/5">
                            {
                                "A DAO — decentralized autonomous organization — is a blockchain-based organization that's governed by a crypto token."
                            }
                        </p>
                        <div className="lg:w-2/5">
                            <p className="text-purple">{"01/"}</p>
                            Decentralized - has no hierarchical structure with a traditional
                            management center and operates online
                        </div>
                    </div>
                    <div className="lg:flex lg:space-y-0 lg:space-x-10  space-y-4 w-full gap-6 text-sm">
                        <div className="lg:w-2/5 ">
                            <p className="text-purple">{"02/"}</p>
                            Autonomous - managed by the members themselves and based on smart
                            contracts on the blockchain
                        </div>
                        <div className="lg:w-2/5">
                            <p className="text-purple">{"03/"}</p>
                            Organization - has a purpose which unites people and work processes
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
