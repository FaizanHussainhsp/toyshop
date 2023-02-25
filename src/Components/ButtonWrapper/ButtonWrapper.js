import React from "react";
import classes from "./ButtonWrapper.module.css";
export const ButtonWrapper = (props) => {
  return <div className={props.btnWrapper}>{props.children}</div>;
};
