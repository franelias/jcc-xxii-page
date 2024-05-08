import React from "react";
import classNames from "classnames";
import { BiChevronDown } from "react-icons/bi";

import { FloatingButtonProps } from "./types";

import "./styles.scss"

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick, show }) => {
    return (
        <div
            className={classNames(
                "absolute top-full left-1/2 w-14 h-14 rounded-full bg-[#222222] transition-all hover:bg-[#555555] cursor-pointer duration-300 ease-in-out flex items-center justify-center"
            )}
            style={{
                transform: show ? `translate(-50%, -150%)` : `translate(-50%, 0)`,
            }}
            onClick={onClick}
        >
            <BiChevronDown className="w-4 h-4" stroke="#ffffff" fill="#ffffff" />
        </div>
    );
}


export default FloatingButton