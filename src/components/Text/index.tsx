import React, { PropsWithChildren } from "react";

import "./styles.scss"
import classNames from "classnames";

const Text: React.FC<PropsWithChildren & { className?: string }> = ({ children, className }) => {
    return (
        <p className={classNames(`font-light text-start md:text-l`, className)}>
            {children}
        </p>
    );
};

export default Text