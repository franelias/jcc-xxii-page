import React, { PropsWithChildren } from "react";
import classNames from "classnames";

import "./styles.scss"

const CenterTitle: React.FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  const titleClassName = classNames("text-2xl font-bold md:text-4xl", className);
  return <h1 className={titleClassName}>{children}</h1>;
};

export default CenterTitle