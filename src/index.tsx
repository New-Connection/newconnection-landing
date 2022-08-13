import React from "react";
import { createRoot } from "react-dom/client";
import { MainContent } from "./components/MainContent";
import "./styles/globals.css";
import Layout from "./components/Layout";
import AccordionCards from "components/AccordionCards/AccordionCards";
import { WeAreSection } from "components/TextContent/WeAreContent";
import { AboutDAOSection } from "components/TextContent/AboutDAOContent";
import { SectionTrigger } from "components/AccordionCards/CardSection";

function Landing() {
    return (
        <div>
            <Layout className="layout-base space-y-32">
                <MainContent />
                <WeAreSection />
                <AboutDAOSection />
                <AccordionCards />
                {/* <SectionTrigger /> */}
            </Layout>
        </div>
    );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Landing />);
