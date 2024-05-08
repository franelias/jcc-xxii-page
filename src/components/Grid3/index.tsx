import React, { PropsWithChildren } from "react";

import "./styles.scss"

const Grid3: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
    return (
        <div className="grid content-center w-full grid-cols-1 gap-10 md:grid-cols-3 justify-items-center">
            {children}
        </div>
    );
};

export default Grid3