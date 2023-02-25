import React, { useContext } from "react";
import { store } from "../../Store/GlobalState";
import { Button } from "../Button/Button";
import classes from "./Item.module.css";

export const Item = (props) => {
  const { dispatchData } = useContext(store);
  const removeItemHandler = (itemTitle, itemPrice) => {
    dispatchData({
      type: "REMOVE_ITEM",
      val: {
        itemTitle,
        itemPrice,
        quantity: 1,
      },
    });
  };

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
    <section className={classes.itemDetail}>
      <div>
        <h3>{props.itemTitle}</h3>
        <p>{props.itemPrice}</p>
      </div>
      <div>
        <h3>{props.quantity}</h3>
        <p>
          <Button
            btnClass={classes.btn}
            onClick={() => removeItemHandler(props.itemTitle, props.itemPrice)}
          >
            -
          </Button>
          <Button
            btnClass={classes.btn}
            onClick={() => AddItemHandler(props.itemTitle, props.itemPrice)}
          >
            +
          </Button>
        </p>
      </div>
    </section>
  );
};
