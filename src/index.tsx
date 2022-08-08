import React from "react";
import { createRoot } from "react-dom/client";
import { Header, Footer, MainContent } from "./componets/";
import "./globals.css";

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Page />);
