import React from "react";

export const Input = (props) => {
  return (
    <input
      type={props.type ? props.type : "text"}
      value={props.value}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      className={props.className}
      placeholder={props.placeholder}
    />
  );
};
