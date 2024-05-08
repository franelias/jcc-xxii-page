import React, { PropsWithChildren } from "react";

import { NavItemProps } from "./types";

import "./styles.scss"

const NavItem: React.FC<PropsWithChildren<NavItemProps>> = ({ children, scroll }) => (
    <li
        className="list-none transition-colors cursor-pointer hover:text-red-800"
        onClick={scroll}
    >
        {children}
    </li>
);

export default NavItem