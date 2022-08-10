// NPM Dependencies
import * as React from "react";

// OWN Componets
import "styles/components/Layout/Layout.module.css";

const Header = () => {
    return (
        <header>
            <div className="flex justify-between p-4">
                <div className="flex">
                    <span className="text-black font-bold">
                        new
                        <br />
                        connection
                    </span>
                </div>
                <div className="w-1/3 flex gap-4">
                    <div className="flex space-x-6">
                        <p className="btn-header">Telegram</p>
                        <p className="btn-header">Twitter</p>
                        <p className="btn-header">Discord</p>
                    </div>

                    <button className="secondary-button w-full">Enter App</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
