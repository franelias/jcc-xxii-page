import React, { PropsWithChildren } from "react";

import { LinkProps } from "./types";

import "./styles.scss"

const Link: React.FC<PropsWithChildren<LinkProps>> = ({ url, children }) => {
    return (
        <a className="appearance-none cursor-pointer" href={url} target="_blank">
            {children}
        </a>
    );
};


export default Link