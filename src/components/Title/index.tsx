import React, { PropsWithChildren } from "react";

import "./styles.scss"

const Title: React.FC<PropsWithChildren> = ({ children }) => {
    return <h1 className="text-2xl md:text-4xl">{children}</h1>;
};

export default Title