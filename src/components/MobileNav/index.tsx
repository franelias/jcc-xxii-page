import React, { PropsWithChildren } from "react";
import { useAccordion } from "../../useAccordion";
import { BiChevronDown } from "react-icons/bi";

import { MobileNavType } from "./types";

import "./styles.scss"

const MobileNav: React.FC<PropsWithChildren<MobileNavType>> = ({
    children,
    showHeader,
}) => {
    const [ref, maxHeight, toggle] = useAccordion();

    return (
        <>
            <button
                className={`text-2xl md:hidden transition-transform ${maxHeight !== "0px" ? "rotate-180" : ""
                    }`}
                onClick={toggle}
            >
                <BiChevronDown />
            </button>
            <nav
                ref={ref}
                style={{ maxHeight: !showHeader ? 0 : maxHeight }}
                className="w-full overflow-hidden duration-300 ease-in-out md:hidden transition-max-height"
            >
                <ul onClick={toggle} className="flex flex-col gap-5 p-5">
                    {children}
                </ul>
            </nav>
        </>
    );
};

export default MobileNav