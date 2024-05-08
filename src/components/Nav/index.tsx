import React, { PropsWithChildren } from "react";

import "./styles.scss"

const Nav: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <nav className="hidden md:contents">
            <ul className="contents">{children}</ul>
        </nav>
    );
};

export default Nav