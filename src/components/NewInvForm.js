import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function NewInvForm(props) {

  function handleNewFormSubmission(event) {
    event.preventdefault();
    props.onNewInvCreation({
      burger: event.target.burger.value,
      toppings: event.target.toppings.value,
      price: parseInt(event.target.price.value),
      description: event.target.description.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
    <form>
      <input 
      type="text"
      name="burger"
      placeholder="BURGER"
      required />
      <br />
      <input 
      type="text"
      name="toppings"
      placeholder="TOPPINGS"
      required />
      <br />
      <input 
      type="text"
      name="price"
      placeholder="PRICE"
      required />
      <br />
      <input 
      type="text"
      name="description"
      placeholder="DESCRIPTION"
      required />
      <br />
      <label for="quantity">QUANTITY: </label>
      <input
      type="number"
      name="quantity"
      min="0"
      max="130"
      defaultValue="130"
      placeholder="QUANTITY"
      required />
      <br />
    </form>
    </React.Fragment>
  );
}

NewInvForm.propTypes = {
  onNewInvCreation: PropTypes.func
};

export default NewInvForm;