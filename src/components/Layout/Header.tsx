// NPM Dependencies
import * as React from "react";

// OWN Componets
import "styles/components/Layout/Layout.module.css";

const Header = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

    const MobileMenu = () => {
        return (
            <div
                className={
                    "justify-between items-center w-full lg:flex lg:w-auto lg:items-end" +
                    (navbarOpen ? "flex" : " hidden")
                }
                id="mobile-menu-2"
            >
                <ul className="flex flex-col items-center mt-4 font-medium w-full lg:hidden ">
                    <li>
                        <a
                            href="https://twitter.com/NewConnectionX"
                            className="btn-header block py-2 pr-4 pl-3 text-black lg:bg-transparent lg:p-0 active:bg-gray2 active:text-white"
                        >
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="w-full block py-2 pr-4 pl-3 text-black lg:bg-transparent lg:p-0 active:bg-gray2 active:text-white"
                        >
                            Discord
                        </a>
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <header className="header px-4 lg:px-6 py-2.5 ">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <span className="self-center leading-6 text-lg font-semibold whitespace-nowrap">
                    new
                    <br />
                    connection
                </span>
                <div className="flex items-center lg:order-2 lg:gap-5">
                    <div
                        className={
                            "justify-between items-center hidden w-full lg:flex lg:w-auto lg:items-end lg:visible"
                        }
                        id="mobile-menu-2"
                    >
                        <ul
                            className={"flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0"}
                        >
                            <li>
                                <a
                                    href="https://twitter.com/NewConnectionX"
                                    className="btn-header block py-2 pr-4 pl-3 text-black lg:bg-transparent lg:p-0"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="btn-header block py-2 pr-4 pl-3 text-black lg:bg-transparent lg:p-0"
                                >
                                    Discord
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a
                        href="https://app.newconnection.xyz/"
                        className="text-white bg-purple hover:bg-btnHover focus:ring-4 focus:ring-purple font-medium rounded-full text-sm px-4
                    lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    >
                        Enter App
                    </a>
                    <button
                        data-collapse-toggle="mobile-menu-2"
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none
                    focus:ring-2 focus:ring-btnHover"
                        aria-controls="mobile-menu-2"
                        aria-expanded="false"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <svg
                            className="hidden w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                <MobileMenu />
            </div>
        </header>
    );
};

export default Header;
