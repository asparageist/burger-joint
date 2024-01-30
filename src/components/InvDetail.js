import React from 'react';
import PropTypes from "prop-types";


function InvDetail(props){
  const { inventory, onClickingDelete } = props;

  return (
    <>
      <h1>{inventory.burger}</h1>
      <p>hello?</p>
      <h3>{inventory.quantity}</h3>
      <button onClick={ props.onEditBurger }>EDIT BURGER</button>
      <button onClick={()=> props.onClickingDelete(inventory.id) }>EMPTY THE BIN</button>
      <br />
    </>
  );
}

InvDetail.propTypes = {
  inventory: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onEditBurger: PropTypes.func
};

export default InvDetail;