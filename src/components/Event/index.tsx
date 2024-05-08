import React, { PropsWithChildren } from "react";

import { EventProps } from "./types";

import "./styles.scss"

const Event: React.FC<PropsWithChildren<EventProps>> = ({
    time,
    title,
    speakers,
    gray,
    onClick,
}) => {
    return (
        <div className="text-xs border-t text-left first:rounded-t last:rounded-b border-x last:border-b md:text-base">
            <div
                className={`${gray ? "bg-gray-100" : "bg-white"
                    } p-3 flex flex-wrap items-center justify-between ${onClick && "cursor-pointer transition-colors hover:bg-slate-200"}`}
                onClick={onClick}
            >
                <div className="gap-3 w-full flex grid-cols-2 items-center justify-between">
                    <span>{title}</span>
                    <span>{time}</span>
                </div>
                {speakers && (
                    <p className="w-full font-light text-left text-gray-600 md:text-sm">
                        {speakers}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Event