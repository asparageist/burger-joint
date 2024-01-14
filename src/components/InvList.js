import React from "react";
import Inventory from "./Inventory";
import PropTypes from "prop-types";

function InvList(props) {
  return (
  <>
  <React.Fragment>
    <hr />
    {props.invList.map((inventory, index) => 
      <Inventory  burger={inventory.burger}
                  toppings={inventory.toppings}
                  price={inventory.price}
                  description={inventory.description}
                  key={index}
      />
    )}
  </React.Fragment>
  </>
  );
}

InvList.propTypes = {
  invList: PropTypes.array
};

export default InvList;