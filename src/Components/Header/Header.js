import React from "react";
import classes from "./Header.module.css";

export const Header = () => {
  return (
    <div className={classes.header}>
      <img
        className={classes.headerimg}
        src="https://cdn.shopify.com/s/files/1/0668/5120/9465/files/Web-Banner-1370x426.jpg?v=1676887514&width=1370"
      />
    </div>
  );
};
