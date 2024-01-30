import React from 'react';
import PropTypes from "prop-types";


function InvDetail(props){
  const { inventory, onEditBurger, onClickingDelete, onClickingUpdateBurger } = props;

function handleIncrementBurger() {
  onClickingUpdateBurger(inventory, 1);
}

function handleDecrementBurger() {
  onClickingUpdateBurger(inventory, -1);
}

  return (
    <>
      <h1>{inventory.burger}</h1>
      <h3>BURGERS LEFT: {inventory.quantity}</h3>
      <button onClick={handleDecrementBurger}>LESS</button>
      <button onClick={handleIncrementBurger}>MORE</button>
      <hr />
      <button onClick={()=> props.onEditBurger(inventory.id) }>EDIT THE BURGER</button>
      <button onClick={()=> props.onClickingDelete(inventory.id) }>TRASH THE BURGER</button>
      <br />
    </>
  );
}

InvDetail.propTypes = {
  inventory: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onEditBurger: PropTypes.func,
  onClickingUpdateBurger: PropTypes.func
};

export default InvDetail;