import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
      type="number"
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
      <label htmlFor="quantity"><strong>QUANTITY: </strong></label>
      <input
      type="number"
      name="quantity"
      id="quantity"
      min="0"
      max="130"
      defaultValue="130"
      placeholder="QUANTITY"
      required />
      <br />
      <button type ="submit">AWW YISS</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;