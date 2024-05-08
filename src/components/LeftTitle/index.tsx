import React, { PropsWithChildren } from "react";

import "./styles.scss"

const LeftTitle: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <h1 className="self-start text-2xl font-bold md:text-4xl">{children}</h1>
    );
};

export default LeftTitle