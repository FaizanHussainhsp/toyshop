import React, { useContext, useReducer, useState } from "react";
import { store } from "../../Store/GlobalState";
import { Button } from "../Button/Button";
import { ButtonWrapper } from "../ButtonWrapper/ButtonWrapper";
import { Input } from "../Input/Input";
import classes from "./Form.module.css";
import {
  unameRedcer,
  addressRedcer,
  postalRedcer,
  emailRedcer,
} from "./reducers";
export const Form = (props) => {
  const [uname, dispatchUName] = useReducer(unameRedcer, {
    uname: "",
    isValid: true,
    isValidOnBlur: true,
  });
  const [streetAddress, dispatchStreetAddress] = useReducer(addressRedcer, {
    streetAddress: "",
    isValid: true,
    isValidOnBlur: true,
  });
  const [postalCode, dispatchPostalCode] = useReducer(postalRedcer, {
    postalCode: "",
    isValid: true,
    isValidOnBlur: true,
  });
  const [email, dispatchEmail] = useReducer(emailRedcer, {
    email: "",
    isValid: true,
    isValidOnBlur: true,
  });
  const { StateData, dispatchData } = useContext(store);
  const userNameOnStrokeHandler = (event) => {
    dispatchUName({ type: "uNameOnStroke", val: event.target.value });
  };
  const userNameOnBlurHandler = (event) => {
    dispatchUName({ type: "uNameOnBlur" });
  };
  const streetOnStrokeHandler = (event) => {
    dispatchStreetAddress({
      type: "streetAddressOnStroke",
      val: event.target.value,
    });
  };
  const streetOnBlurHandler = (event) => {
    dispatchStreetAddress({
      type: "streetAddressOnBlur",
    });
  };
  const postalOnStrokeHandler = (event) => {};
  const postalOnBlurHandler = (event) => {};
  const emailOnStrokeHandler = (event) => {};
  const emailOnBlurHandler = (event) => {};

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (uname.uname === "") {
      dispatchUName({ type: "uNameOnEmptySubmit" });
      return;
    } else if (streetAddress.streetAddress === "") {
      dispatchStreetAddress({ type: "addressOnEmptySubmit" });
      return;
    } else if (!uname.isValid) return;
    else if (!uname.isValidOnBlur) return;
    if (!streetAddress.isValid) return;
    else if (!streetAddress.isValidOnBlur) return;

    const order = {
      uname: uname.uname,
      street: streetAddress.streetAddress,
      // postal: postalCode.postalCode,
      // email: email.email,
      items: StateData.item,
      totalPrice: StateData.total,
    };
    const sendToDataBase = async () => {
      const res = await fetch(
        "https://fir-store-214fa-default-rtdb.firebaseio.com/order.json",
        {
          method: "POST",
          body: JSON.stringify(order),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.ok) {
        alert("Success");
        return;
      }
      alert("Operation Failed");
    };

    sendToDataBase();
  };

  const cancelOrderHandler = (event) => {
    dispatchData({
      type: "CancelOrder",
    });
    props.close();
  };
  return (
    <form onSubmit={onSubmitHandler} className={classes.form}>
      <Input
        type="text"
        value={uname.uname}
        onChange={userNameOnStrokeHandler}
        placeholder="userName"
        onBlur={userNameOnBlurHandler}
        className={classes.inputStyle}
      />
      {uname.isValid ? "" : "character should be greater or equal to 5"}
      {uname.isValidOnBlur ? "" : "uName should not be empty"}
      <Input
        type="text"
        value={streetAddress.streetAddress}
        onChange={streetOnStrokeHandler}
        onBlur={streetOnBlurHandler}
        placeholder="Street Address"
        className={classes.inputStyle}
      />
      {streetAddress.isValid ? "" : "must enter 10 character"}
      {streetAddress.isValidOnBlur ? "" : "Address should not be empty"}
      {/* <Input
        type="text"
        value={postalCode.postalCode}
        onChange={postalHandler}
        placeholder="postalCode"
        className={classes.inputStyle}
      /> */}
      {/* {postalCode.isValid ? "" : "incorrect postal address "}
      {postalCode.isValidOnBlur ? "" : "postal Code should not be empty"}
      <Input
        type="email"
        value={email.email}
        onChange={emailHandler}
        placeholder="email"
        className={classes.inputStyle}
      />
      {email.isValid ? "" : "incorrect email address "}
      {email.isValidOnBlur ? "" : "email  should not be empty"} */}
      <ButtonWrapper btnWrapper={classes.btnWrapper}>
        <Button btnClass={classes.btn} onClick={cancelOrderHandler}>
          Cancel Order
        </Button>
        <Button type="submit" btnClass={classes.btn}>
          Order
        </Button>
      </ButtonWrapper>
    </form>
  );
};
