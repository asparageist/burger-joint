import React from 'react';
import PropTypes from "prop-types";


function InvDetail(props){
  const { inventory, onClickingDelete } = props;

  return (
    <>
      <h1>{inventory.burger}</h1>
      <p>hello?</p>
      <h3>{inventory.quantity}</h3>
      <button onClick={()=> onClickingDelete(inventory.id) }>EMPTY THE BIN</button>
      <br />
    </>
  );
}

InvDetail.propTypes = {
  inventory: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default InvDetail;