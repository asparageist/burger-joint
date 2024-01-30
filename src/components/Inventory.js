import React from "react";
import PropTypes from "prop-types";

function Inventory(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenBurgerClicked(props.id)}>
        <h1>{props.burger}:</h1>
        <h3>A burger with {props.toppings}.</h3>
        <h3>${props.price}</h3>
        <p>{props.description}</p>
      </div>
    </React.Fragment>
  );
}

Inventory.propTypes = {
  burger: PropTypes.string.isRequired,
  toppings: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenBurgerClicked: PropTypes.func
}

export default Inventory;