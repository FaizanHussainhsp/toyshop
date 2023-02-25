import React from "react";
import classess from "./Button.module.css";
export const Button = (props) => {
  return (
    <button
      type={props.type ? props.type : "text"}
      className={props.btnClass}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
