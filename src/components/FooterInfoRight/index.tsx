import React, { PropsWithChildren } from "react";

import { FooterInfoRightProps } from "./types";

import "./styles.scss"

const FooterInfoRight: React.FC<PropsWithChildren<FooterInfoRightProps>> = ({ children, Icon }) => {
    return (
        <span className="flex items-center justify-end gap-3">
            {children}
            <span className="text-xl md:text-2xl">{Icon}</span>
        </span>
    );

}

export default FooterInfoRight