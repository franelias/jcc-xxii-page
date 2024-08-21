import React from "react";
import { PropsWithChildren } from "react";
import { ChipProps } from "./types";
import "./styles.scss"



const Chip: React.FC<PropsWithChildren<ChipProps>> = ({text}) => {
  return <>{text}</>

}

export default Chip;