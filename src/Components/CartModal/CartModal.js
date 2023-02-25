import React, { useContext } from "react";
import { store } from "../../Store/GlobalState";
import { Item } from "../Item/Item";
import classes from "./CartModal.module.css";
import closeIcon from "../../Assets/cross-small-svgrepo-com.svg";
import { Form } from "../Form/Form";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { ButtonWrapper } from "../ButtonWrapper/ButtonWrapper";
export const CartModal = (props) => {
  const { StateData, dispatchData } = useContext(store);

  let content;
  if (StateData.item.length === 0) {
    content = <h3>Empty Bucket</h3>;
  }
  if (StateData.item.length !== 0) {
    content = StateData.item.map((data, index) => (
      <Item
        key={index}
        itemTitle={data.itemTitle}
        itemPrice={data.itemPrice}
        quantity={data.quantity}
      />
    ));
  }
  return (
    <div className={classes.cartModal}>
      <h1 className={classes.cartModalHeading}>total Items</h1>
      <img
        className={classes.closeIcon}
        src={closeIcon}
        onClick={props.close}
      />
      <div className={classes.ItemContainer}>{content}</div>
      {!StateData.total && <h3>Add Item TO Bucket</h3>}
      {StateData.total > 0 && (
        <div className={classes.cartTotalPriceContainer}>
          <span className={classes.cartTotalPrice}>total</span>
          <span className={classes.cartTotalPrice}>{StateData.total}</span>
        </div>
      )}
      {StateData.total > 0 && <Form close={props.close} />}
    </div>
  );
};
