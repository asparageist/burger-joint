import React from "react";
import Inventory from "./Inventory";
import PropTypes from "prop-types";

function InvList(props) {
  return (
  <>
    <hr />
    {props.invList.map((inventory) => (
    <React.Fragment key={inventory.id}>
      <Inventory  
                  whenBurgerClicked={props.onInvSelection}
                  burger={inventory.burger}
                  toppings={inventory.toppings}
                  price={inventory.price}
                  description={inventory.description}
                  quantity={inventory.quantity}
                  id={inventory.id}
      />
      <hr />
      </React.Fragment>
    ))}
  </>
  );
}

InvList.propTypes = {
  invList: PropTypes.array,
  onInvSelection: PropTypes.func
};

export default InvList;