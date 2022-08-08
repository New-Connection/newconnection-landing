import React from "react";
import { createRoot } from "react-dom/client";
import { MainContent } from "./components/MainContent";
import "./styles/globals.css";
import Layout from "./components/Layout";

function Landing() {
    return (
        <div>
            <Layout className="layout-base">
                <section className="relative w-full">
                    <MainContent />
                </section>
            </Layout>
        </div>
    );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Landing />);
