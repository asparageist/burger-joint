import React from 'react';
import PropTypes from "prop-types";


function InvDetail(props){
  const { inventory } = props;

  return (
    <>
      <h1>{inventory.burger}</h1>
      <p>hello?</p>
      <h3>{inventory.quantity}</h3>
    </>
  );
}

InvDetail.propTypes = {
  inventory: PropTypes.object
};

export default InvDetail;