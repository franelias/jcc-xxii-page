import React, { PropsWithChildren } from "react";

import "./styles.scss"

const Text: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <p className="font-light leading-relaxed text-justify md:text-center md:text-xl">
            {children}
        </p>
    );
};

export default Text