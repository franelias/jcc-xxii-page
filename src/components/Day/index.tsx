import React, { PropsWithChildren } from "react";

import { DayProps } from "./types";

import "./styles.scss"

const Day: React.FC<PropsWithChildren<DayProps>> = ({
    number,
    date,
    children,
}) => {
    return (
        <div className="w-full">
            <h2 className="p-3 md:p-5 md:text-2xl">
                Día {number} - <span className="text-gray-500">{date}</span>
            </h2>
            {children}
        </div>
    );
};

export default Day