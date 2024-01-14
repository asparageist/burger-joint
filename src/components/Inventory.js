import React from "react";
import PropTypes from "prop-types";

function Inventory(props) {
  return (
    <React.Fragment>
      <h1>{props.burger}:</h1>
      <h3>A burger with {props.toppings}.</h3>
      <h3>${props.price}</h3>
      <p>{props.description}</p>
    </React.Fragment>
  );
}

Inventory.propTypes = {
  burger: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
}

export default Inventory;