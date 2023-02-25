import React, { useContext } from "react";
import classes from "./Cards.module.css";
import { store } from "../../Store/GlobalState";

export const Cards = (props) => {
  const { dispatchData } = useContext(store);
  const AddItemHandler = (itemTitle, itemPrice) => {
    dispatchData({
      type: "ADD_ITEM",
      val: {
        itemTitle,
        itemPrice,
        quantity: 1,
      },
    });
  };
  return (
    <div className={classes.card}>
      <img className={classes.cardImg} src={props.path} />
      <h1>{props.heading}</h1>
      <h3>Price {props.price}</h3>
      <button
        className={classes.cardbtn}
        onClick={() => AddItemHandler(props.heading, props.price)}
      >
        +
      </button>
    </div>
  );
};
