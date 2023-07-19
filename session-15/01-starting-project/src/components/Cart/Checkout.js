import { useState } from "react";
import classes from "./Checkout.module.css";
import useInput from "../../hooks/use-input";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsVaidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const {
    value: nameValue,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    reset: resetNameInput,
  } = useInput(isEmpty);

  const {
    value: streetValue,
    isValid: streetIsValid,
    valueChangeHandler: streetChangeHandler,
    reset: resetStreetInput,
  } = useInput(isEmpty);

  const {
    value: postalValue,
    isValid: postalIsValid,
    valueChangeHandler: postalChangeHandler,
    reset: resetPostalInput,
  } = useInput(isFiveChars);

  const {
    value: cityValue,
    isValid: cityIsValid,
    valueChangeHandler: cityChangeHandler,
    reset: resetCityInput,
  } = useInput(isEmpty);


  const confirmHandler = (event) => {
    event.preventDefault();

    setFormInputsVaidity({
      name: nameIsValid,
      street: streetIsValid,
      city: cityIsValid,
      postalCode: postalIsValid,
    });

    const formIsValid =
      nameIsValid &&
      streetIsValid &&
      cityIsValid &&
      postalIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: nameValue,
      street: streetValue,
      city: cityValue,
      postalCode: postalValue,
    });

    resetNameInput();
    resetStreetInput();
    resetPostalInput();
    resetCityInput();

  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" value={nameValue} onChange={nameChangeHandler}/>
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" value={streetValue}onChange={streetChangeHandler}/>
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" value={postalValue}onChange={postalChangeHandler}/>
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code (5 characters long)!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" value={cityValue} onChange={cityChangeHandler} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
