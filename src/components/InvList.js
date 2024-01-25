import React from "react";
import Inventory from "./Inventory";
import PropTypes from "prop-types";

function InvList(props) {
  return (
  <>
    <hr />
    {props.invList.map((inventory, index) => (
    <React.Fragment>
      <Inventory  burger={inventory.burger}
                  toppings={inventory.toppings}
                  price={inventory.price}
                  description={inventory.description}
                  key={index}
      />
      <hr />
      </React.Fragment>
    ))}
  </>
  );
}

InvList.propTypes = {
  invList: PropTypes.array
};

export default InvList;