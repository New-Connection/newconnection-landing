import * as React from "react";

const Footer = () => {
    return (
        <footer className="absolute bottom-0 w-full h-44 sm:h-24 px-2 pb-2">
            <div className="max-w-full px-4 mx-auto sm:px-6 lg:px-8 bg-purple pb-1 rounded-md text-center ">
                <p className="w-full text-2xl text-white py-16 lg:text-7xl sm:text-4xl">
                    NEW CONNECTION
                </p>
                <div className="sm:flex sm:items-center sm:justify-between sm:space-y-2 text-sm text-white mb-6">
                    <p>Terms and Conditions</p>
                    <p className="lg:mr-16">contact@newconnection.xyz</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
