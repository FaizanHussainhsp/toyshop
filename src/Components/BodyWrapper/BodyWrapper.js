import React from "react";
import classes from "./BodyWrapper.module.css";
export const BodyWrapper = (props) => {
  return <div className={classes.bodywrapper}>{props.children}</div>;
};
