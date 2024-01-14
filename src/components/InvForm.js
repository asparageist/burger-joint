import React from "react";
import PropTypes from "prop-types";

function InvForm(props) {
  return (
    <>
    <form>
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
      type="text"
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
      <input 
      type="number"
      name="quantity"
      min="0"
      max="130"
      defaultValue="130"
      placeholder="QUANTITY"
      required />
      <br />
      <button type="submit"></button>
    </form>
    </>
  )
}