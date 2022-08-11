import React from "react";
import { createRoot } from "react-dom/client";
import { MainContent } from "./components/MainContent";
import "./styles/globals.css";
import Layout from "./components/Layout";
import AccordionCards from "components/AccordionCards/AccordionCards";
import { TextSection } from "components/TextContent/TextContent";

function Landing() {
    return (
        <div>
            <Layout className="layout-base space-y-32">
                <MainContent />
                <TextSection />
                <AccordionCards />
            </Layout>
        </div>
    );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Landing />);
