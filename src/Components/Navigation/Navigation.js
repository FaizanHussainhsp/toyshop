import React, { useContext, useState } from "react";
import classes from "./Navigation.module.css";
import cartLogo from "../../Assets/cart-svgrepo-com.svg";
import { store } from "../../Store/GlobalState";

export const Navigation = (props) => {
  const { StateData, dispatchData } = useContext(store);
  const totalCartItem = StateData.item.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  return (
    <>
      <div className={classes.navigation}>
        <ul className={classes.ulStyle}>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <img
          src={cartLogo}
          className={classes.cartlogo}
          onClick={props.close}
        />
        {totalCartItem === 0 && null}
        {totalCartItem > 0 && (
          <span className={classes.cartCounter}>{totalCartItem}</span>
        )}
      </div>
    </>
  );
};
